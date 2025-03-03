import React from "react";

const ContentList = ({ heightOfComponent, title, list, imgSrc1, imgSrc2 }) => {
    return (
        <div className={`${heightOfComponent} bg-[#eceaeb] mb-3 rounded-2xl overflow-y-auto scrollbar-none`}>
            {title && (
                <div className="sticky top-0 bg-[#eceaeb]">
                    <h3 className="text-xl font-bold p-3">{title}</h3>
                    <hr className="border-t-2 border-[#e2dede]" />
                </div>
            )}

            {list.map((item, index) => (
                <div key={index}>
                    <div className="flex justify-between py-2 px-3 items-center">
                        {imgSrc1 && <img className="w-8 h-8" src={imgSrc1} alt="" />}
                        <h3 className="text-xl">{item}</h3>
                        {imgSrc2 && <img className="w-8 h-8" src={imgSrc2} alt="" />}
                    </div>
                    <hr className="border-t-2 border-[#e2dede]" />
                </div>
            ))}
        </div>
    );
};

export default ContentList;
