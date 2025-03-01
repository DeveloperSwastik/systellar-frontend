import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Title from "./components/Title";

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Header />

      <Title title={"Log-in to your account"} subHeading={"Welcome back! Please enter your details."}/>

      <InputField
        useStateVariable={email}
        useStateFunction={setEmail}
        label={"Email"}
        type={"text"}
        placeholder={"Enter your email or user id"}
        imgSrc={"./src/assets/mail.png"}
        />

      <InputField
        useStateVariable={password}
        useStateFunction={setPassword}
        label={"Password"}
        type={"password"}
        placeholder={"Enter your password"}
        imgSrc={"./src/assets/lock.png"}
      />
    </>
  );
}

export default App;
