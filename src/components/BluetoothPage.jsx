import React from "react";
import Header from "./general/Header";

const BluetoothPage = () => {
    return (
        <>
            <Header />
            <div className="flex pt-4 gap-3 items-center justify-between">
                <h2 className="font-bold text-xl">Bluetooth</h2>
                <img className="w-10" src="src\assets\qr-code.png" alt="" />
            </div>
            <div className="flex justify-between mt-4">
                <h3 className="font-sm text-xl">Bluetooth Connection</h3>
                <h3 className="font-bold text-xl text-green-600">ON</h3>
            </div>
        </>
    );
};

export default BluetoothPage;
