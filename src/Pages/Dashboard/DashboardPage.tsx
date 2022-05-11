import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Textbox from '../../Components/Textbox/Textbox'
import "./dashboardpage.scss"

const DashboardPage: React.FC = () => {
  return (
    <div className="app__dashboard-page">
      <Sidebar/>
      <div className="dashboard__content">
        {/* ban beo cot' vao` day */}
        <div className='dashboard__content-top'>
          <div className='dashboard__content-heading'>Dashboard</div>

          
        </div>
      </div>
    </div>
  )
}

export default DashboardPage