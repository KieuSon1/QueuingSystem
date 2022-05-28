import React, { useState } from 'react'
import Button from '../../../Button/Button'
import Modal from '../../../Modal/Modal'
import Number from '../../../Number/Number'
import Select from '../../../Select/Select'
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg'
import "./createreport.scss"
import { useNavigate } from 'react-router';
import Textbox from '../../../Textbox/Textbox'
import Table, { IDeviceRow, Service } from '../../../Table/Table'
import DatePicker from '../../../DatePicker/DatePicker'

const serviceList = ["Khám tim mạch", "Sản - phụ khoa", "Khám tai - mũi - họng"]
const tableData: IDeviceRow[] = [
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_02',
        deviceName: 'Kiosk2',
        ipAddress: '192.169.1.2',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: false,
        displayUpdate: false,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: false,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: false,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'KIO_02',
        deviceName: 'Kiosk2',
        ipAddress: '192.169.1.2',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: false,
        displayUpdate: false,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: false,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: false,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: false,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'K2',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
    {
        deviceId: 'ABC',
        deviceName: 'Kiosk',
        ipAddress: '192.169.1.1',
        isActivated: true,
        isConnected: true,
        services: [Service.Dental, Service.Heart],
        displayDetail: true,
        displayUpdate: true,
    },
];
const CreateReport: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className='new-report'>
            <div className="row"><DatePicker label='Chọn thời gian' /></div>
            <div className="row"><Table data={tableData} /></div>
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