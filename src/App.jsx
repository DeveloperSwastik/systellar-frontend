import React, { useContext } from "react";
import LoginPage from "./components/LoginPage.jsx";
import { AuthContext } from "./context/AuthProvider";
import BluetoothPage from "./components/BluetoothPage.jsx";
import ChargeController from "./components/ChargeController.jsx";
import FirmwareUpdate from "./components/FirmwareUpdate.jsx";
import HelpAndSupport from "./components/HelpAndSupport.jsx";
import SaveAndReset from "./components/general/SaveAndReset.jsx";

function App() {
    const {userData} = useContext(AuthContext);    

    return (
        <>
        <main className="h-screen p-6 flex flex-col">
            {userData.userEmail == null ? <LoginPage />: <BluetoothPage />}
            {/* <BluetoothPage /> */}
            {/* <HelpAndSupport /> */}
            {/* <FirmwareUpdate/> */}
            {/* <ChargeController/> */}
        </main>
        </>
    );
}

export default App;
