import React from 'react'
import Logo from '../../../Assets/Logo'
import Button from '../../Button/Button'
import Textbox from '../../Textbox/Textbox'
import "./loginform.scss"

const LoginForm: React.FC<{switchForm: Function}> = ({switchForm}) => {
  return (
    <div className="login-form">
    <div className="login-form-top">
      <Logo />
    </div>
    {/* Trang đăng nhập */}
    <div className="login-form-middle">
      <Textbox label="Tên đăng nhập *" />
      <Textbox label="Mật khẩu *" isPassword />
      <a href="#" className="forgot-password" onClick={() => switchForm("forgotpassword")}>
        Quên mật khẩu?
      </a>
    </div>
    <div className="login-form-bottom">
      <Button  text="Đăng nhập" onClick={() => console.log("500K lam` tiep'")}/>
    </div>

   
  </div>
  )
}

export default LoginForm