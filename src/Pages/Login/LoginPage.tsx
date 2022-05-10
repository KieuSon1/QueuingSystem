import React from "react";
import Banner1 from "../../Assets/Banner1";
import Logo from "../../Assets/Logo";
import Button from "../../Components/Button/Button";
import Textbox from "../../Components/Textbox/Textbox";
import "./loginpage.scss";

const LoginPage = () => {
  const LoginForm = () => {
    return (
      <div className="login-form">
        <div className="login-form-top">
          <Logo />
        </div>
        <div className="login-form-middle">
          <Textbox label="Tên đăng nhập *" />
          <Textbox label="Mật khẩu *" isPassword />
          <a href="#" className="forgot-password">
            Quên mật khẩu
          </a>
        </div>
        <div className="login-form-bottom">
          {" "}
          <Button  text="Đăng nhập"/>
        </div>
      </div>
    );
  };

  const Image = () => {
    return <div className="images">
        <Banner1/>
        <div className="heading">
            <div className="heading-small">Hệ thống</div>
            <div className="heading-large">Quản lý xếp hàng</div>
        </div> 
        
    </div>;
  };

  return (
    <div className="app__login-page">
      <LoginForm />
      <Image/>
    </div>
  );
};

export default LoginPage;
