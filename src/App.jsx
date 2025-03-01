import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";

function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <>
      <Header />

      <div className="view-1 flex flex-col gap-4 ">
        <div className="login flex flex-col gap-2">
          <h2 className="font-bold pt-1 ">Log-in to your account</h2>
          <p>Welcome back! Please enter your details.</p>
        </div>
      </div>

      <InputField
        label={"Email"}
        placeholder={"Enter your email or user id"}
        img_src={"./src/assets/mail.png"}
      />

      <InputField
        label={"Password"}
        placeholder={"Enter your password"}
        img_src={"./src/assets/lock.png"}
      />
    </>
  );
}

export default App;
