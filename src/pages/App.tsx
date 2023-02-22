import React,{useState} from 'react';
import { Outlet } from 'react-router-dom'
import { Layout, Menu, theme} from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import '../assets/css/App.css'
import { useNavigate, useLocation } from 'react-router-dom'
const { Header, Sider, Content } = Layout;


export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()

  // 截取当前URL路径
  const location = useLocation();
  // const selectedkeys = location.pathname;
  // const openkeys = ["/" + location.pathname.split("/")[1]];
  console.log(location,'location');
  
  const onClick = (item:any) => {
    console.log(item.key,'路由映射');
    
    navigate(item.key)
  };


  return (
    <Layout className='pages'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ display: "flex", height: "100%", flexDirection: 'column' }}>
          <div className="logo" >新闻发布后台管理系统</div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['/home']}
              items={[
                {
                  key: '/home',
                  icon: <UserOutlined />,
                  label: '首页',
                },
                {
                  key: "/price",
                  label: "价格列表",
                  icon: <UploadOutlined />,
                  children:[
                    {
                      key: "/price/list",
                      label: "价格列表",
                      icon: <UploadOutlined />
                    },
                  ]
                },
                {
                  key: '/setting',
                  icon: <VideoCameraOutlined />,
                  label: '设置',
                },
              ]}
              onClick={onClick}
            />
          </div>
        </div>
      </Sider>
      <Layout className='main'>
        <Header style={{ background: colorBgContainer }}>header</Header>
        <Content style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
}


