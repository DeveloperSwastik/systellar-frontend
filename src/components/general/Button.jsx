import React from "react";

function Button(data) {
    return (
        <>
            <div className="h-auto w-full p-1 justify-center bg-[#fd7d06] text-white text-2xl font-semibold rounded-lg">
                <button onClick={data.onClickFunction} className="h-full w-full">{data.text}</button>
            </div>
        </>
    );
}

export default Button;
