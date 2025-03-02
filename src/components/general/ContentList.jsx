import React from "react";

const ContentList = (data) => {
    return (
        <>
            <div className="bg-[#eceaeb] rounded-2xl mt-6">
                <h3 className="p-3 text-lg">Connections</h3>
                <hr className="border-t-2 border-[#e2dede]" />
                {(() => {
                    let options = [];

                    for (let index = 0; index < data.list.length; index++) {
                        if (data.imgSrc1 != null) {
                            options.push(
                                <img
                                    className="w-10 h-10"
                                    key={`img1-${index}`}
                                    src={data.imgSrc1}
                                    alt=""
                                />
                            );
                        }

                        options.push(
                            <h3 key={`text-${index}`} className="p-3 text-xl">
                                Connections
                            </h3>
                        );

                        if (data.imgSrc2 != null) {
                            options.push(
                                <img
                                    className="w-10 h-10"
                                    key={`img2-${index}`}
                                    src={data.imgSrc2}
                                    alt=""
                                />
                            );
                        }

                        let division;

                        if (data.imgSrc1 == null || data.imgSrc2 == null) {
                            division = (
                                <div key={`div-${index}`}>
                                    <div
                                        className="flex justify-between py-1 px-2 items-center"
                                    >
                                        {options[options.length - 2]}
                                        {options[options.length - 1]}
                                    </div>

                                    <hr
                                        key={`hr-${index}`}
                                        className="border-t-2 border-[#e2dede]"
                                    />
                                </div>
                            );

                            options.splice(-2);
                        } else {
                            division = (
                                <div key={`div-${index}`}>
                                    <div
                                        className="flex justify-between py-1 px-2 items-center"
                                    >
                                        {options[options.length - 3]}
                                        {options[options.length - 2]}
                                        {options[options.length - 1]}
                                    </div>

                                    <hr
                                        key={`hr-${index}`}
                                        className="border-t-2 border-[#e2dede]"
                                    />
                                </div>
                            );

                            options.splice(-3);
                        }

                        options.push(division);
                    }
                    
                    return options;
                })()}
            </div>
        </>
    );
};

export default ContentList;
