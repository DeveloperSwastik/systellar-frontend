import React, { useContext } from "react";
import LoginPage from "./components/LoginPage.jsx";
import { AuthContext } from "./context/AuthProvider";
import BluetoothPage from "./components/BluetoothPage.jsx";
import ChargeController from "./components/ChargeController.jsx";
import FirmwareUpdate from "./components/FirmwareUpdate.jsx";
import HelpAndSupport from "./components/HelpAndSupport.jsx";
import SaveAndReset from "./components/general/SaveAndReset.jsx";
import IncressAndDecress from "./components/general/IncreaseAndDecrease.jsx";

function App() {
    const {userData} = useContext(AuthContext);    

    return (
        <>
            {/* {userData.userEmail == null ? <LoginPage />: <BluetoothPage />} */}
            {/* <BluetoothPage /> */}
            {/* <HelpAndSupport /> */}
            {/* <FirmwareUpdate/> */}
            <ChargeController/>
            {/* <IncressAndDecress/> */}
        </>
    );
}

export default App;
