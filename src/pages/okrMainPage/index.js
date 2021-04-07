import React, { Component } from 'react';
import OKRContent from './components/okrContent';
import './index.css';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export default class OKRMainPage extends Component {
  render() {
    return (
      <Layout>
        <Header className='header'>Header</Header>
        <Layout>
          <Sider theme='light'>Sider</Sider>
          <Content className='okr-main-content'>
            <OKRContent />
          </Content>
        </Layout>
      </Layout>
    )
  }
}