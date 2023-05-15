import { useNavigate } from 'react-router-dom';
import {
    LayoutOutlined,
    SettingOutlined,
    IdcardOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
import RouteApplication from '../../RouteApplication';

  const { Header, Sider, Content } = Layout;

 
  const Layouts = () => {
    const navigate=useNavigate();
    const [collapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{
            display:"flex",flexDirection:"row",height:32,margin:16,background:'rgba(255,255,255,0.2)',}} />
          <Menu
          onClick={({key})=>{
            if(key==="signout"){
        }else{
            navigate(key);
        }
      }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        items={[
          {
            key: '/',
            label: 'Dashboard',
          },
          {
            key: '/Cast analyst',
            icon: <SettingOutlined />,
            label: 'Cast analyst',
          },
          {
            key: '/',
            label: 'Resources',
          },
          {
            key: '/Resources',
            icon: <LayoutOutlined />,
            label: 'Resource',
          },
          {
            key: '/',
            label: 'Application',
          },
          {
            key: '/Application',
            icon: <IdcardOutlined />,
            label: 'Application',
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
      </Header>
      <Content

        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
       <RouteApplication/>
      </Content>
    </Layout>
  </Layout>
);

  };
  export default Layouts;