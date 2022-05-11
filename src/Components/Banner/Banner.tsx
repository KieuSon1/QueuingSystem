import React from 'react'
import Banner1 from '../../Assets/Banner1';
import { Banner2 } from '../../Assets/Banner2';
import "./banner.scss"

const Banner = () => {
  return (
    <div className="images">
    {/* Banner trang đăng nhập */}
    {/* <Banner1/> */}
    {/* Banner trang quên mật khẩu */}
    <Banner2 />
    {/* <div className="heading">
        <div className="heading-small">Hệ thống</div>
        <div className="heading-large">Quản lý xếp hàng</div>
    </div> */}
    
    
</div>
  )
}

export default Banner