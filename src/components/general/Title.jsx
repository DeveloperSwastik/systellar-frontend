import React from "react";

const Title = (data) => {
    return (
        <div className="h-[11%] flex flex-col pt-4 gap-3">
            <h2 className="h-full font-bold text-2xl">{data.title}</h2>
            {(() => {
                if (data.subHeading != null) {
                    return <p className="h-full">{data.subHeading}</p>;
                }
            })()}
        </div>
    );
};

export default Title;
