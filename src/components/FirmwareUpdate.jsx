import React from "react";
import Header from "./general/Header";
import Title from "./general/Title";
import Button from "./general/Button";

const FirmwareUpdate = () => {
    return (
        <>
            <Header />
            <Title title={"Firmware Update"} />

            <div className="bg-[#eceaeb] bg-[url('./FirmwareBackGround.png')] bg-cover bg-center w-full h-80 mt-7 rounded-xl ">
                <div className="text-8xl font-bold p-5">
                    <p className="text-black">0<span className="text-orange-500">1</span></p>
                </div>
                <div className="relative top-[10%]">
                    <p className="px-4 text-lg">Update available</p>
                    <h2 className="px-4 font-bold text-2xl ">
                        Charge Controller
                    </h2>
                    <p className="px-4 text-lg">UPAWE2130</p>
                </div>
            </div>

            <div className="bg-[#eceaeb] py-5 mt-5 mb-5 rounded-xl flex flex-col justify-center">
                <h2 className="px-4 font-bold text-lg ">Firmware Version</h2>
                <p className="px-4 ">Version 0.1</p>
            </div>

            <Button text="Download and Install" />
        </>
    );
}

export default FirmwareUpdate;
