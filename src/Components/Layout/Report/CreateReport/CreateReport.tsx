import React, { useState } from 'react'
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg'
import "./createreport.scss"
import { useNavigate } from 'react-router';
import Table from '../../../Table/Table'
import DatePicker from '../../../DatePicker/DatePicker'
import { deviceList } from '../../../Mock'

const CreateReport: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className='new-report'>
            <div className="row"><DatePicker label='Chọn thời gian' /></div>
            <div className="row"><Table data={deviceList} /></div>
            <div
                className='add-device-btn'
                onClick={() => {}}
            >
                <span>
                    <AddIc />
                </span>
                <span>Cấp số mới</span>
            </div>

        </div>
    )
}

export default CreateReport