// @flow
import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider, Content, Footer } = Layout;


const Scaffold = (props: any) => {
  const { children } = props;
  const [collapsed, setCollapse] = React.useState(false);
  const onCollapse = () => setCollapse(!collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="file-protect" />
            <span>Meus documentos</span>
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
