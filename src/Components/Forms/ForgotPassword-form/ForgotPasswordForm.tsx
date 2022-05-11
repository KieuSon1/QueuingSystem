import React from 'react'
import Logo from '../../../Assets/Logo'
import Button from '../../Button/Button'
import Textbox from '../../Textbox/Textbox'
import "./forgotpasswordform.scss"

const ForgotPasswordForm: React.FC<{switchForm: Function}> = ({switchForm}) => {
  return (
    <div className="forgot-password-form">
    <div className="forgot-password-form-top">
      <Logo />
    </div>
    <div className="forgot-password-form-middle">
        <div className="label">Đặt lại mật khẩu</div>
      <Textbox label="Vui lòng nhập email để đặt lại mật khẩu của bạn*" />
      
    </div>
    <div className="forgot-password-form-bottom">
      <Button  text="Huỷ" isOutlined onClick={() => switchForm("login")} />
      <Button  text="Tiếp tục" onClick={() => switchForm("editpassword")}/>
    </div>

   
  </div>
  )
}

export default ForgotPasswordForm