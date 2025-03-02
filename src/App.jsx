import React, { useContext } from "react";
import LoginPage from "./components/LoginPage.jsx";
import { AuthContext } from "./context/AuthProvider";
import BluetoothPage from "./components/BluetoothPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";

function App() {
    const {userData} = useContext(AuthContext);    

    return (
        <>
            {/* {userData.userEmail == null ? <LoginPage />: <BluetoothPage />} */}
            {/* <SignUpPage/> */}
            <VerifyEmail />
        </>
    );
}

export default App;
