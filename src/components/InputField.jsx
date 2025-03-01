import React from "react";

const InputField = (data) => {		
  return (
    <>
      <div>
        <label className="font-semibold text-lg" htmlFor={data.label}>{data.label}</label>
        <div className="input bg-[#434141] rounded-xl p-1 mt-3 flex">
          <img className="w-8 opacity-50 mx-2" src={data.imgSrc} alt="" />
		  <input className="text-white w-full outline-none" type="password" placeHolder={data.placeHolderValue} />
        </div>
      </div>
    </>
  );
};

export default InputField;
