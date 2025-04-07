import React, { useState } from "react";
import Header from "./general/Header";
import ContentList from "./general/ContentList";
import Title from "./general/Title";

const BluetoothPage = () => {
    const [connectedDevice, setConnectedDevice] = useState("")
    return (
        <>
            <Header />
            {/* <div className="h-auto flex pt-4 items-center">
                <h2 className="h-full font-bold text-2xl">Bluetooth</h2>
                <img className="h-full w-10" src=".\qr-code.png" alt="" />
            </div> */}
            <Title title={"Bluetooth"} />
            <div className="h-auto flex py-4 justify-between items-center">
                <h3 className="h-full font-sm text-xl">Bluetooth Connection</h3>
                <h3 className="h-full font-bold text-xl text-green-600">ON</h3>
            </div>
            <ContentList
                title={"Paired Devices"}
                heightOfComponent={"flex-1"}
                imgSrc1={"./bluetooth.png"}
                imgSrc2={"./settings.png"}
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
                imgSrc1={"./bluetooth.png"}
                imgSrc2={"./settings.png"}
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
