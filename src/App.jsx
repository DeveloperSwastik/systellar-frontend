import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Title from "./components/Title";

function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <>
      <Header />

      <Title title={"Log-in to your account"} subHeading={"Welcome back! Please enter your details."}/>

      <InputField
        label={"Email"}
        placeHolder={"Enter your email or user id"}
        imgSrc={"./src/assets/mail.png"}
      />

      <InputField
        label={"Password"}
        placeHolder={"Enter your password"}
        imgSrc={"./src/assets/lock.png"}
      />
    </>
  );
}

export default App;
