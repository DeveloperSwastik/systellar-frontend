import React, { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import LoginPage from "./components/LoginPage.jsx";
import BluetoothPage from "./components/BluetoothPage.jsx";
import Menu from "./components/Menu.jsx";

function App() {
    const { userData, menuStatus } = useContext(AuthContext);
    
    return (
        <main className="h-screen w-full flex relative">
            <div className="h-full w-full flex flex-col p-6">
                {userData.userEmail == null ? <LoginPage /> : <BluetoothPage />}
            </div>

            {menuStatus ? <Menu /> : ""}
        </main>
    );
}

export default App;
