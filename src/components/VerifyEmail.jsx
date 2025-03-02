import React from "react";
import Header from "./general/Header";
import Title from "./general/Title";
import Button from "./general/Button";
import Option from "./general/Option";

const VerifyEmail = () => {
  return (
    <>
      <Header />
      <Title
        title={"Create in your Email"}
        subHeading={"We sent an verification email at xyz@gmail.com"}
      />
      <div className=" flex justify-center pt-4 text-white text-lg">
        <div className=" w-50 p-2 bg-[#434141] rounded ">
          <input className="w-full outline-none text-lg text-center " type="number" placeholder="Enter verification code"/>
        </div>
      </div>
      <Button text="Verify Email" />
      <Option p1={"Didn't receive the email"} p2={"Click to resend"} />
    </>
  );
};

export default VerifyEmail;
