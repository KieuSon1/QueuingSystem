import React, { useState } from "react";
import Banner1 from "../../Assets/Banner1";
import Logo from "../../Assets/Logo";
import Button from "../../Components/Button/Button";
import Textbox from "../../Components/Textbox/Textbox";
import "./loginpage.scss";
import { Banner2 } from "../../Assets/Banner2";
import LoginForm from "../../Components/Forms/Login-form/LoginForm";
import ForgotPasswordForm from "../../Components/Forms/ForgotPassword-form/ForgotPasswordForm";
import EditPasswordForm from "../../Components/Forms/EditPassword-form/EditPasswordForm";
import Banner from "../../Components/Banner/Banner";

const LOGIN = "login"
const FORGOTPASSWORD = "forgotpassword"
const EDITPASSWORD = "editpassword"

const LoginPage: React.FC = () => {

  const [type, setType] = useState("login")
  console.log(type);

  const switchForm = (form: string) : void => {
    setType(form)
  }
  

  return (
    <div className="app__login-page">
      {type === LOGIN && <LoginForm switchForm={switchForm}/>}
      {type === FORGOTPASSWORD && <ForgotPasswordForm switchForm={switchForm}/>}
      {type === EDITPASSWORD && <EditPasswordForm switchForm={switchForm}/>}
      <Banner />
    </div>
  );
};

export default LoginPage;

