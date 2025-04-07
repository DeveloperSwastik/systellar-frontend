import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Menu = () => {
    const { setUserData, setMenuStatus } = useContext(AuthContext);
    const logout = {
        userName: null,
        userId: null,
        userEmail: null,
        userPassword: null,
    };
    return (
        <div className="h-full w-full flex justify-center items-center absolute p-6 index-100">
            <div className="h-5/6 w-full flex flex-col rounded-2xl bg-white">
                <div className="h-[10%] flex p-3">
                    <button
                        onClick={(e) => {
                            setMenuStatus(false);
                        }}
                        className="h-full font-bold"
                    >
                        <img
                            className="h-full font-bold"
                            src=".\close.png"
                            alt=""
                        />
                    </button>
                    <img
                        className="h-full w-1/2 items-center"
                        src=".\logo.png"
                        alt=""
                    />
                </div>

                <div className="h-[89%] w-full bg-transparent rounded-3xl px-3">
                    <div className="flex h-[12%] items-center gap-4 text-xl font-medium font px-6 bg-[#eceaea] pt-4 pb-2 rounded-t-3xl">
                        <img className="h-full" src=".\home.png" alt="" />
                        <p className="h-full">Home</p>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="flex h-[12%] items-center gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
                        <img className="h-full" src=".\bluetooth.png" alt="" />
                        <p className="h-full">Bluetooth Connection</p>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="flex h-[12%] items-center gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
                        <img className="h-full" src=".\charge.png" alt="" />
                        <p className="h-full">Charge Controller</p>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="flex h-[12%] items-center gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
                        <img className="h-full" src=".\moniter.png" alt="" />
                        <p className="h-full">Real-Time Monitoring</p>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="flex h-[12%] items-center gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
                        <img className="h-full" src=".\update.png" alt="" />
                        <p className="h-full">Firmware Updates</p>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="flex h-[12%] items-center gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
                        <img className="h-full" src=".\help.png" alt="" />
                        <p className="h-full">Help and Support</p>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="flex h-[12%] items-center gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
                        <img className="h-full" src=".\settings.png" alt="" />
                        <p className="h-full">Account Setting</p>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="flex h-[12.5%] items-center gap-4 text-xl font-medium px-6 text-red-500 font bg-[#eceaea] pt-4 pb-2 rounded-b-3xl">
                        <img className="h-full" src=".\logout.png" alt="" />
                        <button
                            onClick={(e) => {
                                setUserData(logout);
                                setMenuStatus(false)
                            }}
                            className="h-full"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
