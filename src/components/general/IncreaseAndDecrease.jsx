import React from "react";

function IncreaseAndDecrease() {
    return (
        <>
            <div className="h-14 w-full flex justify-center gap-5 items-center">
                <button className="h-full w-2/12 bg-[#f6a55a] rounded-lg text-4xl font-bold">
                    -
                </button>
                <input
                    className="h-full w-8/12 bg-white text-center text-xl rounded-lg outline-none "
                    type="number"
                    placeholder="Input"
                />
                <button className="h-full w-2/12 bg-[#f6a55a] rounded-lg text-4xl font-bold">
                    +
                </button>
            </div>
        </>
    );
}

export default IncreaseAndDecrease;
