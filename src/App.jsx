import React, { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import LoginPage from "./components/LoginPage.jsx";
import BluetoothPage from "./components/BluetoothPage.jsx";

function App() {
    const { userData } = useContext(AuthContext);

    return (
        <main className="h-screen p-6 flex flex-col">
            {userData.userEmail == null ? <LoginPage /> : <BluetoothPage />}
        </main>
       
    );
}

export default App;
