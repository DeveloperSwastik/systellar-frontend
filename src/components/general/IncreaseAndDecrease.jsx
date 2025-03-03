import React from "react";

function IncreaseAndDecrease(data) {

  return (
    <>
      <div className="flex justify-center gap-5 mx-4 items-center">
        <button className="bg-[#f6a55a]  px-4  rounded-lg text-5xl font-bold py-6">
          -
        </button>
        <input
          className="bg-white w-35 py-3 text-center text-xl rounded-lg outline-none "
          type="number"
          placeholder="Input"
        />
        <button className="bg-[#f6a55a]  px-4  rounded-lg text-5xl font-bold py-6">
          +
        </button>
      </div>
    </>
  );
}

export default IncreaseAndDecrease;
