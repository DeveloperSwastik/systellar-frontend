import React from "react";
import Header from "./general/Header";
import Title from "./general/Title";

function FirmwareUpdate() {
    return (
        <>
            <Header />
            <Title title={"Firmware Update"} />
            <div className="h-80 mt-6 bg-[url('src/assets/FirmwareBackGround.png')] bg-cover bg-center rounded-2xl">

            </div>
        </>
    );
}

export default FirmwareUpdate;
