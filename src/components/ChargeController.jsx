import React from "react";
import Header from "./general/Header";
import Title from "./general/Title";
import SaveAndReset from "./general/SaveAndReset";
import IncreaseAndDecrease from "./general/IncreaseAndDecrease";

const ChargeController = () => {
  return (
    <>
      <Header />
      <Title title={"Charge Controller"} />
      <div className="bg-[#eceaea] rounded-xl">
        <div className="mt-7 p-4 ">
          <h2 className="py-7 text-2xl">Charge Current</h2>
          <div className="my-4">
            <IncreaseAndDecrease />
          </div>
          <hr className="border-t-3 border-[#e2dede]" />
        </div>
        <div className="p-4 ">
          <h2 className="py-7 text-2xl">Voltage</h2>
          <div className="my-4">
            <IncreaseAndDecrease />
          </div>
        </div>
      </div>
      <SaveAndReset button1="Save" button2="Reset" />
    </>
  );
}

export default ChargeController;
