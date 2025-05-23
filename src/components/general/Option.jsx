import React from "react";

const Option = (data) => {
    return (
        <div className="h-auto my-3 bg-blak flex justify-between items-center">
            <button className="h-full">{data.p1}</button>
            <button className="h-full">{data.p2}</button>
        </div>
    );
};
export default Option;
