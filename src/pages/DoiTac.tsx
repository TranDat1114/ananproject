import { BsArrowDown } from "react-icons/bs";

const hoanCanh = [
    {
        TenHoatDong: "Cùng Trăng Khuyết giúp chú Hùng tiếp tục sống “cuộc đời thứ 2 tại mái ấm Sài Gòn Bao Dung",
        NhaDongHanh: "FPT Polytechnic HCM",
        ThoiGian: "32 days",
        img: ""
    },
    {
        TenHoatDong: "Cùng Trăng Khuyết giúp chú Hùng tiếp tục sống “cuộc đời thứ 2 tại mái ấm Sài Gòn Bao Dung",
        NhaDongHanh: "NhaDongHanh",
        ThoiGian: "32 days",
    },
    {
        TenHoatDong: "Cùng Trăng Khuyết giúp chú Hùng tiếp tục sống “cuộc đời thứ 2 tại mái ấm Sài Gòn Bao Dung",
        NhaDongHanh: "NhaDongHanh",
        ThoiGian: "32 days",
    },
    {
        TenHoatDong: "Cùng Trăng Khuyết giúp chú Hùng tiếp tục sống “cuộc đời thứ 2 tại mái ấm Sài Gòn Bao Dung",
        NhaDongHanh: "FPT Polytechnic HCM",
        ThoiGian: "32 days",
    },];


const doiTac = [
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210145044-637801014448263998.jpg",
        title: "Sức mạnh 2000",
        slogan: "Tiền lẻ mỗi ngày Xây ngay ngàn trường mới"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210144649-637801012095537821.jpg",
        title: "Quỹ Hy Vọng",
        slogan: "Hỗ trợ các hoàn cảnh khó khăn"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210144730-637801012500730410.jpg",
        title: "Viện Nghiên cứu Quản lý Phát triển bền vững (MSD)",
        slogan: "Bảo vệ các đối tượng có hoàn cảnh khó khăn"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220222143709-637811374290560734.jpg",
        title: "Quỹ Từ Thiện Hoa Chia Sẻ",
        slogan: "Hỗ trợ các hoàn cảnh khó khăn"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220224163117-637813170779125320.png",
        title: "VinaCapital Foundation",
        slogan: "Thay đổi cuộc sống cho phụ nữ và trẻ em Việt Nam"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210144849-637801013290473832.jpg",
        title: "Quỹ Vì Tầm Vóc Việt",
        slogan: "Vì tầm vóc Việt"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210144919-637801013591050551.jpg",
        title: "Saigon Children's Charity",
        slogan: "Hỗ trợ trẻ em"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210144944-637801013847718816.jpg",
        title: "SCDI - Mỗi ngày Một quả trứng",
        slogan: "Trung tâm Hỗ trợ Sáng kiến Phát tiển Cộng đồng"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210145014-637801014149994575.jpg",
        title: "Thien Nhan & Friends",
        slogan: "Phẫu thuật BPSD cho trẻ em"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220628110539-637920111390938583.jpg",
        title: "Tương Lai Centre",
        slogan: "Phòng chống xâm hại tình dục trẻ em"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220210145113-637801014732015266.jpg",
        title: "Quỹ Trăng Khuyết",
        slogan: "Hỗ trợ người già & trẻ em"
    },
    {
        img: "https://static.mservice.io/img/momo-upload-api-220224163215-637813171353558027.png",
        title: "Operation Smile",
        slogan: "Phẫu thuật nụ cười"
    },
]
const DoiTac = () => {
    return (
        <>
            <div className="container p-4 m-auto">
                <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 ">
                    <div className="col-span-2 lg:px-8 pb-4">
                        <p className="text-2xl text-pink-500 pb-4">
                            Các đối tác đồng hành
                        </p>
                        <div className="grid  lg:grid-cols-2 grid-cols-1 gap-3">
                            {doiTac.map((p, index) => (
                                <div className="col-span-1 flex flex-row gap-4 items-center border hover:shadow-xl p-3 h-24"
                                    key={index}>
                                    <img
                                        className="rounded-xl object-cover h-10 w-10"
                                        src={p.img}
                                        alt="img"
                                    />
                                    <div className="">
                                        <p className="text-md font-bold text-pink-500">
                                            {p.title}
                                        </p>
                                        <p className="text-xs text-gray-500 cursor-pointer">
                                            {p.slogan}
                                        </p>
                                        <a href="#" className="text-md text-blue-500" ><small>Xem chi tiết...</small></a>
                                    </div>
                                </div>
                            ))}

                        </div>
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

                    <div className="col-span-1 lg:border-l-2 lg:px-8">
                        <p className="text-lg text-pink-500">
                            Hoàn cảnh quyên góp mới nhất
                        </p>
                        <div className=" grid grid-cols-1 gap-3">
                            {hoanCanh.map((p, index) => (
                                <div
                                    className="rounded-xl shadow-2xl"
                                    key={index}
                                >
                                    <div className="p-2">
                                        <img
                                            className="rounded-lg"
                                            src="https://static.mservice.io/blogscontents/momo-upload-api-230323151231-638151811516624864.jpg"
                                            alt=""
                                        />
                                        <div className="p-4">
                                            <p className="font-semibold text-base">
                                                {p.TenHoatDong}
                                            </p>
                                            <div className="flex flex-row justify-between items-center mt-4">
                                                <div className="rounded-[50%] border-2 shadow-md border-red-200">
                                                    <div className="w-10            h-10 ">
                                                        <img
                                                            className="object-contain w-10 h-10"
                                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg5.thuthuatphanmem.vn%2Fuploads%2F2022%2F01%2F16%2Flogo-fpt-fpt-polytechnic-tach-nen_043151201.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="px-2">
                                                    <p className="text-xs font-medium">
                                                        {p.NhaDongHanh}
                                                    </p>
                                                </div>
                                                <div className="min-w-min">
                                                    <p className="text-xs bg-red-200 rounded-lg p-2 text-pink-600 whitespace-nowrap">
                                                        {p.ThoiGian}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <div className="w-full bg-gray-400 h-2 rounded-l-lg rounded-r-lg overflow-hidden ">
                                                <div className="w-[30%] bg-pink-500 h-2"></div>
                                            </div>
                                            <div className="py-4 grid grid-cols-3 text-xs items-center text-center">
                                                <div className="grow">
                                                    <p className="text-xs text-gray-500">Luợt quyên góp</p>
                                                    <p className="text-sm font-bold text-gray-600">0</p>
                                                </div>
                                                <div className="grow">
                                                    <p className="text-xs text-gray-500">Đạt được</p>
                                                    <p className="text-sm font-bold text-gray-600">30%</p>
                                                </div>
                                                <div className="min-w-max">
                                                    <a
                                                        className="border-pink-600 px-3 py-2 rounded-lg border-2  text-pink-600 duration-300 hover:text-white hover:bg-pink-600"
                                                        href="#"
                                                    >
                                                        Quyên góp
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
            </div>
        </>
    );
};
export default DoiTac;
