import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Nav from "./components/Nav";
interface Props {
    children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <header className="w-full bg-white shadow lg:sticky lg:top-0 lg:left-0 lg:right-0 ">
                <Nav />
            </header>
            <main className="py-5 min-h-screen">{children}</main>
            <footer className="w-full shadow bg-[#242424] text-white">
                <div className="container m-auto ">
                    <div className="grid py-5 grid-cols-1 lg:grid-cols-1 grid-flow-col">
                        <div className="col-span-2 flex flex-row justify-evenly items-center  text-sm ">
                            <ul className="lg:flex lg:items-start lg:space-x-8">
                                <li>
                                    <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-pink-400">
                                        <span className="text-base font-bold text-white hover:text-inherit">Hoàn Cảnh Quyên Góp</span>
                                    </a>
                                    <ul className="mt-3">
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Vì trẻ em</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Người già</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Bệnh hiểm nghèo</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Hoàn cảnh khó khăn</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Hỗ trợ giáo dục</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Bảo vệ môi trường</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-pink-400">
                                        <span className="text-base font-bold text-white hover:text-inherit">Đối Tác Đồng Hành</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-pink-400">
                                        <span className="text-base font-bold text-white hover:text-inherit">Tin Tức Cộng Đồng</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-pink-400">
                                        <span className="text-base font-bold text-white hover:text-inherit">Blog Cuộc Sống</span>
                                    </a>
                                    <ul className="mt-3">
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Sống tốt</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Sống khỏe</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Sống thông minh</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="" className="block cursor-pointer whitespace-nowrap text-sm text-white/80 transition-all hover:text-white">Sống vui</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-5 flex-none md:w-80 lg:mt-0">
                            <div className="font-bold text-white">CHĂM SÓC KHÁCH HÀNG</div>
                            <ul className="mt-3 space-y-2 text-sm text-white/80">
                                <li>
                                    <span>Địa chỉ: </span>
                                    Tòa nhà T, QTSC9, Tô Ký, Quận 12, Thành phố Hồ Chí Minh, Việt Nam
                                </li>
                                <li>
                                    <span>Hotline: </span>
                                    <a href="" className="inline font-bold text-white hover:text-pink-500"> 090xxxxxxx</a>
                                    <i> (1000/phút)</i>
                                </li>
                                <li>
                                    <span>Email: </span>
                                    <a href="" className="inline font-bold text-white hover:text-pink-500"> dotnetuniverse17@gmail.com</a>
                                </li>
                                <li>
                                    <span>Tổng đài gọi ra: </span>
                                    <a href="" className="inline font-bold text-white hover:text-pink-500"> 090xxxxxxx</a>
                                    <span className="text-gray-500"> - </span>
                                    <a href="" className="inline font-bold text-white hover:text-pink-500"> 090xxxxxxx</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4 flex flex-row justify-around items-center border-t border-white/10">
                        <div className="flex flex-row justify-around items-center">
                            <span>
                                <p className="text-blue-500 text-2xl">ANNAN</p>
                                <p className="text-pink-500">Ví Nhân ái</p>
                            </span>
                        </div>
                        <div className="grid text-center gap-2">
                            <div className="flex flex-row justify-center items-center  text-lg gap-5">
                                <a
                                    href="#"
                                    className="text-[#3b5998] p-2 bg-pink-50 rounded-[50%]"
                                >
                                    <BsFacebook />
                                </a>

                                <a
                                    href="#"
                                    className="text-[#c13c49] bg-pink-50 p-2 rounded-[50%]"
                                >
                                    <BsInstagram />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#c4302b] bg-pink-50 p-2 rounded-[50%]"
                                >
                                    <BsYoutube />
                                </a>
                            </div>
                            <div className="w-full ">
                                <p className="text-gray-400 text-xs">
                                    ©Copyright UDPM_Polytechnic 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
