import React, { Component } from 'react';
import OKRContent from './components/okrContent';
import okrItems from '../../data';
import './index.css';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export default class OKRMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      okrItems: []
    }
  }

  componentDidMount() {
    // axios call
    this.setState({okrItems: okrItems});
  }

  onSearchInputChange = (e) => {
    this.setState({search: e.target.value});
  }

  onSearchSubmit = () => {
    // axios call
  }

  render() {
    const { okrItems, search } = this.state;
    return (
      <Layout>
        <Header className='header'>Header</Header>
        <Layout>
          <Sider theme='light'>Sider</Sider>
          <Content  className='okr-main-content'>
            <div className='okr-main-functionality'>
              <div className='okr-main-search'>
                <input 
                  placeholder='请输入负责人名称' 
                  onChange = {this.onSearchInputChange}
                />
                <div 
                  className='okr-main-search-btn'
                  onClick = {this.onSearchSubmit}
                >Search</div>
              </div>
              <div className='okr-main-new'>New OKR</div>
            </div>
            {
              okrItems.length === 0 ? 
              <div>No Okr</div> :
              <OKRContent dataSource={okrItems} />
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}