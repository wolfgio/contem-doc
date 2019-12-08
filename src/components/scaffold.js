// @flow
import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import Logo from './logo';

const { Sider, Content, Footer } = Layout;


const Scaffold = (props: any) => {
  const { children, selectedKey = '1' } = props;
  const [collapsed, setCollapse] = React.useState(false);
  const onCollapse = () => setCollapse(!collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ backgroundColor: '#044872' }} theme="dark" collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Logo />
        <Menu style={{ backgroundColor: '#044872' }} theme="dark" defaultSelectedKeys={[selectedKey]} mode="inline">
          <Menu.Item key="1">
            <Link to="/map">
              <Icon type="file-protect" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">
              <Icon type="file-protect" />
              <span>Terminais</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/terminal">
              <Icon type="file-protect" />
              <span>Documentos</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', backgroundColor: '#FAFAFA' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#FAFAFA' }}>contemDoc ©2019</Footer>
      </Layout>
    </Layout>
  );
};

export default Scaffold;
