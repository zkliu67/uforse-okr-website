import React, { Component } from 'react';
import axios from 'axios';
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

  renderAllOKRs = () => {
    /**
     * 如果添加了api，可以调用axios
     */
    // axios.get('调用的后端接口')
    //   .then(res => {
    //     this.setState({okrItems: res});
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   })

    /**
     * 本地测试
     */
    this.setState({okrItems: okrItems});
  }

  componentDidMount() {
    this.renderAllOKRs();
  }

  onSearchInputChange = (e) => {
    this.setState({search: e.target.value});
  }

  onSearchSubmit = () => {
    // API CALL: AXIOS call get okr by employer
    // axios call search by employerid
    const { search } = this.state;
    if (search === '') {
      this.renderAllOKRs();
    }
    else {
      axios.get('please input the api', {
        params: {
          employer: search // https:/xxx.com?employer=xxx
        }
      }).then(res => {
        this.setState({ okrItems: res })
      }).catch(e => {
        console.log(e);
      })
    }
    
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