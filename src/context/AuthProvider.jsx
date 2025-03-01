import React, { createContext, useState } from "react";

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState({
        userName: null,
        userId: null,
        userEmail: null,
        userPassword: null,
    });

    return (
        <div>
            <AuthContext.Provider value={{userData, setUserData}}>
                {children} 
            </AuthContext.Provider>
        </div>
    );
};

export const AuthContext = createContext();

export default AuthProvider;
