import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Space, Table, Tag } from 'antd';
const AppModel = ({ isModalOpen, setIsModalOpen }) => {

const { userDetails} = useSelector(state => state.users)
const showModal = () => {
    setIsModalOpen(true);
};
const handleOk = () => {
    setIsModalOpen(false);
};
const handleCancel = () => {
    setIsModalOpen(false);
};

const columns = [
    {
        title: 'ConsumedQuantity',
        dataIndex: 'ConsumedQuantity',
        key: 'consumedQuantity',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Cost',
        dataIndex: 'Cost',
        key: 'cost',
    },
    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'date',
    },
    {
        title: 'MeterCategory',
        dataIndex: 'MeterCategory',
        key: 'meterCategory',
    },
    {
        title: 'ResourceGroup',
        dataIndex: 'ResourceGroup',
        key: 'resourceGroup',
    },
    {
        title: 'ResourceLocation',
        dataIndex: 'ResourceLocation',
        key: 'resourceLocation',
    },


    {
        title: 'UnitOfMeasure',
        dataIndex: 'UnitOfMeasure',
        key: 'unitOfMeasure',
    },
    {
        title: 'Location',
        dataIndex: 'Location',
        key: 'location',
    },
    {
        title: 'ServiceName',
        dataIndex: 'ServiceName',
        key: 'serviceName',
    },

    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];




return (
    <>
        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>

        <Modal title="User List" style={{ width: "100vh", height: "100vh" }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {/* {appData.map((app,index)=>(
      <p key={index}>{app.ServiceName}</p>
     ))} */}
            <Table style={{
                overflow: "auto",
                width: "100vh", height: "100vh"
            }} columns={columns} dataSource={userDetails} />
        </Modal>
    </>
);

};
export default AppModel;