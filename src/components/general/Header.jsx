import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
    const { userData } = useContext(AuthContext);

    return (
        <>
            <div className="h-[8%] flex justify-between items-center">
                <img className="h-full w-[50%] " src="src\assets\logo.png" alt="" />
                {(() => {
                    if (userData.userName != null) {
                        return <div className="h-16 w-16 text-white text-center last:bg-[#343333] rounded-full">
                            <p className="h-full text-4xl mt-2">
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
