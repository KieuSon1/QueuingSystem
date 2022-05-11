import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./dashboardpage.scss"

const DashboardPage: React.FC = () => {
  return (
    <div className="app__dashboard-page">
      <Sidebar/>
      <div className="dashboard__content">
        {/* ban beo cot' vao` day */}
        <div className='dashboard__content-top'>
          <Textbox label="" />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage