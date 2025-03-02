import React from "react";
import Header from "./general/Header";
import Title from "./general/Title";
import Button from "./general/Button";

function FirmwareUpdate() {
  return (
    <>
      <Header />
      <Title title={"Firmware Update"} />

      <div className="bg-[url('./src/assets/FirmwareBackGround.png')] bg-cover bg-center w-full h-80 mt-7 rounded-xl ">
      
        <div className="">
          <p className="px-4">Update available</p>
          <h2 className="px-4 font-bold text-lg ">Charge Controller</h2>
          <p className="px-4">zxcv765a</p>
        </div>
      </div>

      <div className="bg-white pt-3 mt-7 pb-3 rounded-xl flex flex-col justify-center">
        <h2 className="px-4 font-bold text-lg ">Firmware Version</h2>
        <p className="px-5 ">vp123(1456ev)</p>
      </div>

      <Button text="Download and Install" />
    </>
  );
}

export default FirmwareUpdate;
