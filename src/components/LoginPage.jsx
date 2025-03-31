import React, { useState, useContext } from "react";
import InputField from "./general/InputField";
import Header from "./general/Header.jsx";
import Title from "./general/Title";
import Option from "./general/Option";
import { AuthContext } from "../context/AuthProvider.jsx";
import Button from "./general/Button.jsx";
import Footer from "./general/Footer.jsx";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUserData } = useContext(AuthContext);

    function login() {
        let auth;
        if (email == "admin@admin.com" && password == "123") {
            setUserData({
                userName: "Admin",
                userId: "ADMIN001",
                userEmail: email,
                userPassword: password,
            });
        } else {
            auth = false;
        }
    }

    return (
        <>
            <Header />

            <Title
                title={"Log-in to your account"}
                subHeading={"Welcome! Please enter your details."}
            />

            <form action="">
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
            </form>

            <Option p1={"Change Password"} p2={"Forgot Password"} />

            <Button text="Log In" onClickFunction={login} />

            <Footer text={"Don't have an account ?"} button={"Log In"} />
        </>
    );
};

export default LoginPage;
