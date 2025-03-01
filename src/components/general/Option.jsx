import React from "react";

const Option = (data) => {
    return (
        <>
            <div className="flex justify-between pt-4">
                <button>{data.p1}</button>
                <button>{data.p2}</button>
            </div>
        </>
    );
};
export default Option;
