import { useContext, useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import ShowHoatDong from "../components/ShowHoatDong";
import { HoatDongContext } from "../contexts/hoatDongContext";
interface Device {
    device: string;
    backgroundUrl: string;
}

const devices: Device[] = [
    {
        device: "desktop",
        backgroundUrl:
            "https://static.mservice.io/img/momo-upload-api-220610222058-637904964587890784.jpg",
    },
    {
        device: "tablet",
        backgroundUrl:
            "https://static.mservice.io/img/momo-upload-api-220610222058-637904964587890784.jpg",
    },
    {
        device: "phone",
        backgroundUrl:
            "https://static.mservice.io/img/momo-upload-api-220610222100-637904964604135347.jpg",
    },
];

const Home = () => {
    const [device, setDevice] = useState<Device>(devices[0]);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 640) {
                setDevice(devices[2]);
            } else if (width <= 768) {
                setDevice(devices[1]);
            } else {
                setDevice(devices[0]);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { state, dispatch } = useContext(HoatDongContext);

    return (
        <>
            <div id="session-1">
                <img
                    className="object-cover object-center w-screen"
                    src={device.backgroundUrl}
                    alt="anh-nen"
                />
            </div>

            <div id="session-2" className="py-8 md:py-10 lg:py-14  bg-white">
                <div className=" container mx-auto">
                    <div
                        className="flex flex-col lg:flex-row
                justify-center items-center p-4 lg:px-44"
                    >
                        <div className="lg:w-1/2 flex flex-col">
                            <p className="text-pink-500 text-3xl font-semibold my-2">
                                Ví Nhân Ái - Thiện nguyện mỗi ngày
                            </p>
                            <p className="text-base font-normal my-2">
                                Ví Nhân Ái là tính năng tập hợp tất cả các dự
                                án, tổ chức đang gây quỹ từ thiện trên MoMo. Nơi
                                bạn có thể thực hiện “sống tốt” bằng cách quyên
                                góp Heo Vàng hoặc tiền mặt.
                            </p>
                            <p className="text-sm my-2">
                                Nhìn lại chặng đường Ví Nhân Ái đã đi qua
                            </p>
                            <div className="justify-between flex flex-row my-2">
                                <div className="border-l-2 px-2 border-pink-600 w-1/4">
                                    847
                                </div>
                                <div className="border-l-2 px-2 border-pink-600 w-1/4">
                                    56 tỷ
                                </div>
                                <div className="border-l-2 px-2 border-pink-600 w-1/4">
                                    777 triệu
                                </div>
                                <div className="border-l-2 px-2 border-pink-600 w-1/4">
                                    vân vân
                                </div>
                            </div>
                            <div className="justify-between flex flex-row">
                                <div className="text-xs font-normal w-1/4 mx-1">
                                    dự án đã được gây quỹ thành công
                                </div>
                                <div className="text-xs font-normal w-1/4 mx-1">
                                    đồng được quyên góp
                                </div>
                                <div className="text-xs font-normal w-1/4 mx-1">
                                    heo vàng được quyên góp
                                </div>
                                <div className="text-xs font-normal w-1/4 mx-1">
                                    lượt quyên góp
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div className="justify-start flex flex-row gap-x-10">
                                <button className="border-1 bg-pink-600 text-white py-2 px-4 rounded-xl text-sm">
                                    <span>Quyên góp</span>
                                </button>
                                <button className="border border-pink-600 py-2 px-4 rounded-xl text-sm text-pink-600 duration-300 hover:text-white hover:bg-pink-600">
                                    <span>Về chúng tôi</span>
                                </button>
                            </div>
                        </div>
                        <div className="hidden w-1/2 lg:flex flex-col justify-center items-center">
                            <img
                                src="https://static.mservice.io/img/momo-upload-api-220610222354-637904966341393543.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="session-3" className="bg-pink-50 py-8">
                <div className="container m-auto">
                    <div className="p-4">
                        <p className="text-center lg:text-3xl my-5 text-pink-600 whitespace-nowrap">
                            Các hoàn cảnh quyên góp
                        </p>
                        <p className="text-center text-sm">
                            Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn
                            trên khắp cả nước.
                        </p>
                    </div>

                    <ShowHoatDong hoatDong={state.hoatDongs} />
                    <div
                        className="flex flex-row justify-center 
                    items-center text-center flex-nowrap py-4"
                    >
                        <a
                            className="rounded-full border border-pink-500 py-1 pl-4 pr-6 text-pink-500 transition-all hover:bg-pink-50 hover:text-pink-600 flex flex-row items-center flex-nowrap justify-between gap-2"
                            href="#"
                        >
                            <BsArrowDown />
                            Xem thêm
                        </a>
                    </div>
                </div>
            </div>
            <div id="session-4" className="py-4">
                <div className="text-center text-pink-400 text-xl font-extrabold">
                    <p>Ví nhân ái - Thiện nguyện mỗi ngày</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2"></div>
            </div>
            <div id="session-5" className="py-4">
                <div className="text-center text-pink-400 text-xl -font-extrabold">
                    <p>Các đối tác đồng hành</p>
                </div>
            </div>
            <div id="session-6" className="py-4">
                <div className="text-center text-pink-400 text-xl -font-extrabold">
                    <p>Khi thiện nguyện là nguồn hạnh phúc</p>
                </div>
            </div>
        </>
    );
};

export default Home;
