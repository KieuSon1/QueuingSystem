import React from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import EditPasswordForm from './Components/Forms/EditPassword-form/EditPasswordForm';
import ForgotPasswordForm from './Components/Forms/ForgotPassword-form/ForgotPasswordForm';
import LoginForm from './Components/Forms/Login-form/LoginForm';
import Dashboard from './Components/Layout/Dashboard/Dashboard';
import DetailDevice from './Components/Layout/Device/DetailDevice/DetailDevice';
import Device from './Components/Layout/Device/Device';
import ListDevice from './Components/Layout/Device/ListDevice/ListDevice';
import ModifyDevice from './Components/Layout/Device/ModifyDevice/ModifyDevice';
import NewDevice from './Components/Layout/Device/NewDevice/NewDevice';
import DetailQueue from './Components/Layout/Queue/DetailQueue/DetailQueue';
import ListQueue from './Components/Layout/Queue/ListQueue/ListQueue';
import NewQueue from './Components/Layout/Queue/NewQueue/NewQueue';
import Queue from './Components/Layout/Queue/Queue';
import CreateReport from './Components/Layout/Report/CreateReport/CreateReport';
import Report from './Components/Layout/Report/Report';
import DetailService from './Components/Layout/Service/DetailService/DetailService';
import ListService from './Components/Layout/Service/ListService/ListService';
import ModifyService from './Components/Layout/Service/ModifyService/ModifyService';
import NewService from './Components/Layout/Service/NewService/NewService';
import Service from './Components/Layout/Service/Service';
import UserInfo from './Components/Layout/UserInfo/UserInfo';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import LoginPage from './Pages/Login/LoginPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <RequireAuth>
        <Routes>
          <Route path='/' element={<LoginPage />}>
            <Route path='login' element={<LoginForm />} />
            <Route path='forgot-password' element={<ForgotPasswordForm />} />
            <Route path='edit-password' element={<EditPasswordForm />} />
          </Route>
          <Route path='/dashboard' element={<DashboardPage />}>
            <Route path='panel' element={<Dashboard />} />
            <Route path='device' element={<Device />}>
              <Route path='list' element={<ListDevice />} />
              <Route path='new' element={<NewDevice />} />
              <Route path='modify' element={<ModifyDevice />} />
              <Route path='detail' element={<DetailDevice />} />
            </Route>
            <Route path='service' element={<Service />}>
              <Route path='new' element={<NewService />} />
              <Route path='detail' element={<DetailService />} />
              <Route path='modify' element={<ModifyService />} />
              <Route path='list' element={<ListService />} />
            </Route>
            <Route path='queue' element={<Queue />}>
              <Route path='list' element={<ListQueue />} />
              <Route path='new' element={<NewQueue />} />
              <Route path='detail' element={<DetailQueue/>}/>
            </Route>
            <Route path='report' element={<Report/>}>
              <Route path='create' element={<CreateReport/>}/>
            </Route>
            <Route path='system-setting' element={<></>}>
              <Route path='role' element={<>ABC</>}/>
              <Route path='user-logs' element={<></>} />
            </Route>
            <Route path="user-info" element={<UserInfo />} />
          </Route>
        </Routes>
      </RequireAuth>
    </div>
  );
};

export default App;
