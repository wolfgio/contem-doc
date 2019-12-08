// @flow
import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';

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
            <Icon type="file-protect" />
            <span>Meus documentos</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="file-protect" />
            <span>Atracamentos</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', backgroundColor: '#FFF' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#FFF' }}>Contem Doc ©2019</Footer>
      </Layout>
    </Layout>
  );
};

export default Scaffold;
