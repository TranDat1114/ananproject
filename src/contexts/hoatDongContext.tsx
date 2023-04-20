import axios, { AxiosResponse } from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export interface HoatDong {
    projectId: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    targetAmount: number;
    currentAmount: number;
    userId: number;
    user: User;
    donations: Donation[];
}

export interface Donation {
    donationId: number;
    amount: number;
    donationDate: Date;
    userId: number;
    projectId: number;
    user: null;
    project: null;
}

export interface User {
    id: number;
    userName: string;
    email: string;
    address: string;
    password: string;
    phoneNumber: string;
    accountRoleId: number;
    accountRole: null;
    donations: null;
    projects: null;
}

interface HoatDongState {
    hoatDongs: HoatDong[];
    loading: boolean;
    error: string | null;
}

const initialState: HoatDongState = {
    hoatDongs: [],
    loading: false,
    error: null,
};

enum HoatDongActionTypes {
    FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE",
}

interface FetchHoatDongsRequestAction {
    type: HoatDongActionTypes.FETCH_PRODUCTS_REQUEST;
}

interface FetchHoatDongsSuccessAction {
    type: HoatDongActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: HoatDong[];
}

interface FetchHoatDongsFailureAction {
    type: HoatDongActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: string;
}

type HoatDongAction =
    | FetchHoatDongsRequestAction
    | FetchHoatDongsSuccessAction
    | FetchHoatDongsFailureAction;

const HoatDongReducer = (
    state: HoatDongState,
    action: HoatDongAction
): HoatDongState => {
    switch (action.type) {
        case HoatDongActionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case HoatDongActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                hoatDongs: action.payload,
                loading: false,
            };
        case HoatDongActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const HoatDongContext = createContext<{
    state: HoatDongState;
    dispatch: React.Dispatch<HoatDongAction>;
}>({
    state: initialState,
    dispatch: () => null,
});
interface Props {
    children: React.ReactElement;
}
const HoatDongProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(HoatDongReducer, initialState);

    const [hoatDongs, setHoatDongs] = useState<HoatDong[]>([]);

    useEffect(() => {
        const fetchHoatDongs = async () => {
            dispatch({ type: HoatDongActionTypes.FETCH_PRODUCTS_REQUEST });
            try {
                const response = await axios.get<HoatDong[]>(
                    "https://localhost:7142/api/Projects"
                );
                setHoatDongs(response.data);
                console.log(response.data);
                dispatch({
                    type: HoatDongActionTypes.FETCH_PRODUCTS_SUCCESS,
                    payload: response.data,
                });
            } catch (error) {
                dispatch({
                    type: HoatDongActionTypes.FETCH_PRODUCTS_FAILURE,
                    payload: "Lỗi",
                });
            }
        };
        fetchHoatDongs();
    }, []);

    return (
        <HoatDongContext.Provider value={{ state, dispatch }}>
            {children}
        </HoatDongContext.Provider>
    );
};

export default HoatDongProvider;
