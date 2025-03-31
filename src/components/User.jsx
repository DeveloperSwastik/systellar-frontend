import React from "react";

const User = () => {
  return (
    <>
      <div className="flex gap-12 ">
        <button className="w-11  font-bold">
          <img src="src\assets\close.png" alt="" />
        </button>
        <img
          className="flex items-center w-40 "
          src="src\assets\logo.png"
          alt=""
        />
      </div>
      <div className="my-9 bg-white w-full h-full rounded-3xl">
        <div className="flex h-[12%]  gap-4 text-xl font-medium font px-6 bg-[#eceaea] pt-4 pb-2 rounded-t-3xl">
          <img className="w-10" src="src\assets\home.png" alt="" />
          <p>Home</p>
        </div>
        <hr className="h-[0.5%]" />
        <div className="flex h-[12%] gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
          <img className="w-10" src="src\assets\bluetooth.png" alt="" />
          <p>Bluetooth Connection</p>
        </div>
        <hr className="h-[0.5%]" />
        <div className="flex h-[12%] gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
          <img className="w-10" src="src\assets\charge.png" alt="" />
          <p>Charge Controller</p>
        </div>
        <hr className="h-[0.5%]" />
        <div className="flex h-[12%] gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
          <img className="w-10" src="src\assets\moniter.png" alt="" />
          <p>Real-Time Monitoring</p>
        </div>
        <hr className="h-[0.5%]" />
        <div className="flex h-[12%] gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
          <img className="w-10" src="src\assets\update.png" alt="" />
          <p>Firmware Updates</p>
        </div>
        <hr className="h-[0.5%]" />
        <div className="flex h-[12%] gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
          <img className="w-10" src="src\assets\help.png" alt="" />
          <p>Help and Support</p>
        </div>
        <hr className="h-[0.5%]" />
        <div className="flex h-[12%] gap-4 text-xl font-medium px-6 font bg-[#eceaea] pt-4 pb-2">
          <img className="w-10" src="src\assets\settings.png" alt="" />
          <p>Account Setting</p>
        </div>
        <hr className="h-[0.5%]" />
        <div className="flex h-[12.5%] gap-4 text-xl font-medium px-6 text-red-500 font bg-[#eceaea] pt-4 pb-2 rounded-b-3xl">
          <img className="w-10" src="src\assets\logout.png" alt="" />
          <p>Log Out</p>
        </div>
      </div>
    </>
  );
};

export default User;
