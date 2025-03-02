import React from "react";

function Button(data) {
  return (
    <>
      <div className=" w-full mt-7 p-1 justify-center bg-[#fd7d06] text-white text-2xl font-semibold rounded-lg" >
          <button className="w-full">{data.text}</button>
      </div>
    </>
  );
}

export default Button;
