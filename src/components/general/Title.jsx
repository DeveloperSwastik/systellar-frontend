import React from "react";

const Title = (data) => {
    return (
        <>
            <div className="flex flex-col pt-4 gap-3">
                    <h2 className="font-bold text-2xl">
                        {data.title}
                    </h2>
                    {(() => {
                        if (data.subHeading != null) {
                            return <p>{data.subHeading}</p>;
                        }
                    })()}
            </div>
        </>
    );
};

export default Title;
