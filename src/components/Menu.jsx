import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Menu = () => {
    const { setUserData, setMenuStatus, setCurrentPage } = useContext(AuthContext);
    const logout = {
        userName: null,
        userId: null,
        userEmail: null,
        userPassword: null,
    };
    return (
        <div className="h-full w-full flex justify-center items-center absolute p-6 index-100">
            <div className="h-[90%] w-full flex flex-col rounded-2xl bg-white">
                <div className="h-[10%] flex justify-end p-3">
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
                </div>

                <div className="h-[89%] w-full bg-transparent rounded-3xl px-3">
                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea] rounded-t-3xl">
                        <img className="h-[80%]" src=".\home.png" alt="" />
                        <button
                            onClick={(e) => {
                                setCurrentPage("home");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Home
                        </button>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea]">
                        <img className="h-[70%]" src=".\bluetooth.png" alt="" />
                        <button
                            onClick={(e) => {
                                setCurrentPage("bluetooth connection");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Bluetooth Connection
                        </button>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea]">
                        <img className="h-[70%]" src=".\charge.png" alt="" />
                        <button
                            onClick={(e) => {
                                setCurrentPage("charge controller");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Charge Controller
                        </button>
                    </div> 
                    <hr className="h-[0.5%] border-white" />

                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea]">
                        <img className="h-[70%]" src=".\moniter.png" alt="" />
                        <button
                            onClick={(e) => {
                                setCurrentPage("real time monitoring");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Real-Time Monitoring
                        </button>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea]">
                        <img className="h-[70%]" src=".\update.png" alt="" />
                        <button
                            onClick={(e) => {
                                setCurrentPage("firmware update");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Firmware Updates
                        </button>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea]">
                        <img className="h-[70%]" src=".\help.png" alt="" />
                        <button
                            onClick={(e) => {
                                setCurrentPage("help and feedback");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Help and Feedback
                        </button>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea]">
                        <img className="h-[70%]" src=".\settings.png" alt="" />
                        <button
                            onClick={(e) => {
                                setCurrentPage("account setting");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Account Setting
                        </button>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                    <div className="h-[12%] flex items-center gap-4 text-lg font-medium px-4 bg-[#eceaea]">
                        <img className="h-[70%]" src=".\logout.png" alt="" />
                        <button
                            onClick={(e) => {
                                setUserData(logout);
                                setCurrentPage("");
                                setMenuStatus(false);
                            }}
                            className="text-medium"
                        >
                            Log Out
                        </button>
                    </div>
                    <hr className="h-[0.5%] border-white" />

                </div>
            </div>
        </div>
    );
};

export default Menu;
