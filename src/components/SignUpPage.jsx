import React from "react";
import Header from "./general/Header";
import Title from "./general/Title";
import InputField from "./general/InputField";
import Option from './general/Option';
import Button from "./general/Button.jsx";


const SignUpPage = () => {
  return (
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    <>
      <Header />
      <Title
        title={"Create an account"}
        subHeading={"Welcome back! Please enter your details."}
      />
      <InputField
        // useStateVariable={email}
        // useStateFunction={setEmail}
        label={"Name"}
        type={"text"}
        placeholder={"Enter your name"}
        imgSrc={"./src/assets/user.png"}
      />
      <InputField
        // useStateVariable={email}
        // useStateFunction={setEmail}
        label={"Email"}
        type={"text"}
        placeholder={"Enter your email or user id"}
        imgSrc={"./src/assets/mail.png"}
      />

      <InputField
        // useStateVariable={password}
        // useStateFunction={setPassword}
        label={"Password"}
        type={"password"}
        placeholder={"Enter your password"}
        imgSrc={"./src/assets/lock.png"}
      />

      <Option p1={"Accept our privicy policy"} p2={"Read policy"} />

      <Button text="Log In" />
    </>
  );
};

export default SignUpPage;
