import React, { useContext } from "react";
import LoginPage from "./components/LoginPage.jsx";
import { AuthContext } from "./context/AuthProvider";

function App() {
    const {userData} = useContext(AuthContext);    

    return (
        <>
            {userData.userEmail == null ? <LoginPage />: ""}
        </>
    );
}

export default App;
