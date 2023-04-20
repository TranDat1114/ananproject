interface Props {
    hoatDong: HoatDong[];
}

const ShowHoatDong = ({ hoatDong }: Props) => {
    const getDay = (current: any, endDate: any) => {
        var Start = new Date(current);
        var End = new Date(endDate);
        return Math.ceil(
            (End.getTime() - Start.getTime()) / (1000 * 60 * 60 * 24)
        );
    };
    return (
        <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-4">
            {hoatDong?.map((p, index) => (
                <div className="rounded-xl shadow-2xl lg:mx-4" key={index}>
                    <div className="p-2">
                        <img
                            className="rounded-lg"
                            src="https://static.mservice.io/blogscontents/momo-upload-api-230323151231-638151811516624864.jpg"
                            alt=""
                        />
                        <div className="p-4">
                            <p className="font-semibold text-base">{p.name}</p>
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
                                <div className="px-4">
                                    {/* <p className="text-xs font-medium">
                                        Xưởng thực hành UDPM FPT-Polytechnic
                                    </p> */}
                                    <p className="text-sm font-medium ">
                                        {p.user.userName}
                                    </p>
                                </div>
                                <div className="min-w-min">
                                    <p className="text-xs bg-red-200 rounded-lg p-2 text-pink-600 whitespace-nowrap">
                                        Còn {getDay(p.startDate, p.endDate)}{" "}
                                        ngày
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="w-full bg-gray-400 h-2 rounded-l-lg rounded-r-lg overflow-hidden">
                                <div
                                    style={{
                                        width: `${
                                            (p.currentAmount / p.targetAmount) *
                                            100
                                        }%`,
                                    }}
                                    className={`bg-pink-500 h-2`}
                                ></div>
                            </div>
                            <div className="py-4 grid grid-cols-3 text-xs items-center text-center">
                                <div>
                                    <p>Luợt quyên góp</p>
                                    <p>{p.donations.length}</p>
                                </div>
                                <div>
                                    <p>Đạt được</p>
                                    <p>
                                        {(p.currentAmount / p.targetAmount) *
                                            100}
                                        %
                                    </p>
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
    );
};

export default ShowHoatDong;
