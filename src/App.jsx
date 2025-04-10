import React, { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import LoginPage from "./components/LoginPage.jsx";
import BluetoothPage from "./components/BluetoothPage.jsx";
import Menu from "./components/Menu.jsx";
import ChargeController from "./components/ChargeController.jsx";
import FirmwareUpdate from "./components/FirmwareUpdate.jsx";
import HelpAndSupport from "./components/HelpAndSupport.jsx";
import RealTimeMonitoring from "./components/RealTimeMonitoring.jsx";
import AccountSetting from "./components/AccountSetting.jsx";
import Home from "./components/Home.jsx";

function App() {
    const { userData, menuStatus, currentPage } = useContext(AuthContext);

    return (
        <main className="h-screen w-full flex relative">
            <div className="h-full w-full flex flex-col p-6">
                {currentPage == "" ? (
                    userData.userEmail == null ? (
                        <LoginPage />
                    ) : (
                        <BluetoothPage />
                    )
                ) : currentPage == "home" ? (
                    <Home />
                ) : currentPage == "bluetooth connection" ? (
                    <BluetoothPage />
                ) : currentPage == "charge controller" ? (
                    <ChargeController />
                ) : currentPage == "real time monitoring" ? (
                    <RealTimeMonitoring/>
                ) : currentPage == "firmware update" ? (
                    <FirmwareUpdate />
                ) : currentPage == "help and feedback" ? (
                    <HelpAndSupport />
                ) : currentPage == "account setting" ? (
                    <AccountSetting />
                ) : (
                    ""
                )}
            </div>
            {menuStatus ? <Menu /> : ""}
        </main>
    );
}

export default App;
