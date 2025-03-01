import React from "react";

function Button(data) {
  return (
    <>
      <div className=" w-full flex pt-4 justify-center " >
        <div className=" w-90 p-1 bg-[#fd7d06] text-white text-2xl font-semibold rounded-lg">
          <button className="w-full ">{data.text}</button>
        </div>
      </div>
    </>
  );
}

export default Button;
