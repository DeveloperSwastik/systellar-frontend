import React from "react";
import Header from "./general/Header";
import ContentList from "./general/ContentList";

const BluetoothPage = () => {
    return (
        <>
            <Header />
            <div className="h-auto flex pt-4 items-center">
                <h2 className="h-full font-bold text-2xl">Bluetooth</h2>
                {/* <img className="h-full w-10" src="src\assets\qr-code.png" alt="" /> */}
            </div>
            <div className="h-auto flex py-4 justify-between items-center">
                <h3 className="h-full font-sm text-xl">Bluetooth Connection</h3>
                <h3 className="h-full font-bold text-xl text-green-600">ON</h3>
            </div>
            <ContentList
                title={"Paired Devices"}
                heightOfComponent={"flex-1"}
                imgSrc1={"src\\assets\\bluetooth.png"}
                imgSrc2={"src\\assets\\settings.png"}
                list={[
                    "Systeller CC 001",
                    "Systeller CC 002",
                    "Systeller CC 003",
                    "Systeller CC 004",
                    "Systeller CC 001",
                    "Systeller CC 002",
                    "Systeller CC 003",
                    "Systeller CC 004",
                ]}
            />
            <ContentList
                title={"Available Devices"}
                button={"Refresh"}
                heightOfComponent={"flex-1"}
                imgSrc1={"src\\assets\\bluetooth.png"}
                imgSrc2={"src\\assets\\settings.png"}
                list={[
                    "Systeller CC 005",
                    "Systeller CC 006",
                    "Systeller CC 007",
                    "Systeller CC 008",
                    "Systeller CC 005",
                    "Systeller CC 006",
                    "Systeller CC 007",
                    "Systeller CC 008",
                ]}
            />
        </>
    );
};

export default BluetoothPage;
