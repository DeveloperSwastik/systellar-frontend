import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
    const { userData } = useContext(AuthContext);

    return (
        <>
            <div className="flex justify-between">
                <img className="w-45 " src="src\assets\logo.png" alt="" />
                {(() => {
                    if (userData.userName != null) {
                        return <div className="bg-[#343333] w-15 rounded-full text-white text-center">
                            <p className="text-4xl mt-2">
                                {userData.userName[0].toUpperCase()}
                            </p>
                        </div>
                    }
                })()}
            </div>
        </>
    );
};

export default Header;
