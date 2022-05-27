import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import LogoSm from '../../Assets/LogoSm';
import './sidebar.scss';
import { ReactComponent as DashboardIc } from '../../Assets/dashboard.svg';
import { ReactComponent as DeviceIc } from '../../Assets/device.svg';
import { ReactComponent as ServiceIc } from '../../Assets/service.svg';
import { ReactComponent as NumberIc } from '../../Assets/number.svg';
import { ReactComponent as ReportIc } from '../../Assets/report.svg';
import { ReactComponent as SettingIc } from '../../Assets/setting.svg';

import { ReactComponent as SignOutIc } from '../../Assets/signout.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

const items = [
  { name: 'Dashboard', icon: <DashboardIc />, path: 'panel' },
  { name: 'Thiết bị', icon: <DeviceIc />, path: 'device/list' },
  { name: 'Dịch vụ', icon: <ServiceIc />, path: 'service/list' },
  { name: 'Cấp số', icon: <NumberIc /> },
  { name: 'Báo cáo', icon: <ReportIc /> },
  { name: 'Cài đặt hệ thống', icon: <SettingIc /> },
];
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const signOut = ():void => {
    dispatch(logout())
    navigate("/login")
  }
  const location = useLocation();
  const [path, setPath] = useState<string>("");
  useEffect(() => {
    const arr = location.pathname.split('/');
    setPath(arr[2]);
    
  },[path, location]);

  return (
    <div className="app__sidebar">
      <div className="app__sidebar__logo">
        <LogoSm />
      </div>
      <div className="app__sidebar__items-container">
        {items.map((item) => {
          return (
            <div
              className={`menu-item ${item.path?.includes(path) ? `selected` : ``}`}
              key={item.name}
              onClick={() => navigate(`${item.path ? item.path : ``}`)}
            >
              <div className="menu-item__icon">{item.icon}</div>
              <div className="menu-item__name">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="app__sidebar__sign-out">
        <button onClick={() => signOut()}>
          <span>
            <SignOutIc />
          </span>
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
