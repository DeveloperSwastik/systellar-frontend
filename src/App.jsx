import React, { useContext } from "react";
import LoginPage from "./components/LoginPage.jsx";
import { AuthContext } from "./context/AuthProvider";
import BluetoothPage from "./components/BluetoothPage.jsx";

function App() {
    const {userData} = useContext(AuthContext);    

    return (
        <>
            {userData.userEmail == null ? <LoginPage />: <BluetoothPage />}
        </>
    );
}

export default App;
