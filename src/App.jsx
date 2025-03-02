import React, { useContext } from "react";
import LoginPage from "./components/LoginPage.jsx";
import { AuthContext } from "./context/AuthProvider";
import BluetoothPage from "./components/BluetoothPage.jsx";
import ChargeController from "./components/ChargeController.jsx";
import FirmwareUpdate from "./components/FirmwareUpdate.jsx";

function App() {
    const {userData} = useContext(AuthContext);    

    return (
        <>
            {/* {userData.userEmail == null ? <LoginPage />: <BluetoothPage />} */}
            <BluetoothPage />
            {/* <ChargeController/> */}
            {/* <FirmwareUpdate/> */}
        </>
    );
}

export default App;
