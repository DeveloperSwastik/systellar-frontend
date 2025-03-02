import React from "react";
import Header from "./general/Header";
import ContentList from "./general/ContentList";

const BluetoothPage = () => {
    return (
        <>
            <Header />
            <div className="flex pt-4 gap-3 items-center justify-between">
                <h2 className="font-bold text-2xl">Bluetooth</h2>
                <img className="w-10" src="src\assets\qr-code.png" alt="" />
            </div>
            <div className="flex justify-between mt-6">
                <h3 className="font-sm text-xl">Bluetooth Connection</h3>
                <h3 className="font-bold text-xl text-green-600">ON</h3>
            </div>
            <ContentList
                imgSrc1={"src\\assets\\bluetooth.png"}
                imgSrc2={"src\\assets\\settings.png"}
                list={[
                    "Systeller CC 001",
                    "Systeller CC 002",
                    "Systeller CC 003",
                    "Systeller CC 004",
                ]}
            />
        </>
    );
};

export default BluetoothPage;
