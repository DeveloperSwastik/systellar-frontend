import React from "react";

const Option = (data) => {
    return (
        <>
            <div className="flex justify-between pt-4">
                <div className="flex gap-1">
                    <input type="checkbox" />
                    <p>{data.p1}</p>
                </div>
                <div className=" ">
                    <a href="#">{data.p2}</a>
                </div>
            </div>
        </>
    );
};
export default Option;
