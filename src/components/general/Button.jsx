import React from "react";

function Button(data) {
  return (
    <>
      <div className="h-[5%] w-full mt-7 p-1 justify-center bg-[#fd7d06] text-white text-2xl font-semibold rounded-lg" >
          <button className="h-full w-full">{data.text}</button>
      </div>
    </>
  );
}

export default Button;
