import React, { createContext, useState } from "react";

const AuthProvider = ({ children }) => {
    const [menuStatus, setMenuStatus] = useState(false);
    const [userData, setUserData] = useState({
        userName: null,
        userId: null,
        userEmail: null,
        userPassword: null,
    });
    const [currentPage, setCurrentPage] = useState("");

    return (
        <div>
            <AuthContext.Provider
                value={{
                    userData,
                    setUserData,
                    menuStatus,
                    setMenuStatus,
                    currentPage,
                    setCurrentPage,
                }}
            >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export const AuthContext = createContext();

export default AuthProvider;
