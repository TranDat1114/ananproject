import axios, { AxiosResponse } from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

interface HoatDong {
    tenHoatDong: string;
    tenDoiTac: string;
    hinhanhDoiTac: string;
    luotQuyenGop: string;
    soTienHienTai: number;
    soTienCan: number;
    ngayKetThuc: Date;
}
interface ProductState {
    products: HoatDong[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

enum ProductActionTypes {
    FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE",
}

interface FetchProductsRequestAction {
    type: ProductActionTypes.FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: HoatDong[];
}

interface FetchProductsFailureAction {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: string;
}

type ProductAction =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction;

const HoatDongReducer = (
    state: ProductState,
    action: ProductAction
): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const ProductContext = createContext<{
    state: ProductState;
    dispatch: React.Dispatch<ProductAction>;
}>({
    state: initialState,
    dispatch: () => null,
});
interface Props {
    children: React.ReactElement;
}
const HoatDongProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(HoatDongReducer, initialState);

    const [products, setProducts] = useState<HoatDong[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response: AxiosResponse<HoatDong[]> = await axios.get(
                `http://localhost:5006/Product`
            );
            setProducts(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_REQUEST });
            try {
                const response = await axios.get<HoatDong[]>(
                    "http://localhost:5006/HoatDong"
                );
                dispatch({
                    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
                    payload: response.data,
                });
            } catch (error) {
                dispatch({
                    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
                    payload: "Lỗi",
                });
            }
        };
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

export default HoatDongProvider;
