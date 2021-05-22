import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import OKRContent from './components/okrContent';
import OkrModal from './components/okrModal';
import {okrItems} from '../../data';
import './index.css';
import { Layout } from 'antd';
import SiteHeader from '../../components/siteHeader';
const { Sider, Content } = Layout;

export default class OKRMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      okrItems: [],
      showModal: false
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

  withAuthenticationChecked = () => {
    const {
      location: {search = ''}
    } = this.props || {};
    const { id = '' } = queryString.parse(search);
    const token = localStorage.getItem('token');
    const employer = JSON.parse(localStorage.getItem('employer'));
    if (id && token && employer) {
      if (id === token) {
        // const employer = Employers.getEmployer(id);
        this.setState({ employer });
        return;
      }
    }
    if (token || employer) {
      localStorage.clear('token');
      localStorage.clear('employer');
    }
    this.props.history.push("/login");
  }

  componentDidMount() {
    this.withAuthenticationChecked();
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

  onModalDisplay = (id) => {
    if (id) {
      const { okrItems = [] } = this.state;
      const editedItem = okrItems.find((item) => {
        return item.id === id
      });
      if (editedItem) {
        this.setState({ editedItem });
      }
    }
    this.setState({ showModal: true });
  }

  onModalClosed = () => {
    this.setState({ showModal: false });
    if (this.state.editedItem) {
      this.setState({ editedItem: null });
    }
  }

  onModalSubmit = (newOkr) => {
    const { okrItems = [] } = this.state;
    let newOkrItems = [];

    if (newOkr.id) {
      // modify existing okr
      newOkrItems = okrItems.map(item => {
        if (item.id === newOkr.id) {
          return newOkr;
        }
        return item;
      });
    } else {
      // create new okr
      const compOkr = {
        ...newOkr,
        Assignee: this.state.employer.username,
        score: '--'
      }
      newOkrItems = [...okrItems, compOkr];
    }
    this.setState({ okrItems: newOkrItems, showModal: false });
  }

  render() {
    const { okrItems, search, employer, showModal, editedItem = {} } = this.state;
    return (
      <>
      <Layout>
        <SiteHeader employer={employer} />
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
              <div className='okr-main-new' onClick={this.onModalDisplay}>New OKR</div>
            </div>
            {
              okrItems.length === 0 ? 
              <div>No Okr</div> :
              <OKRContent dataSource={okrItems} onModalDisplay={this.onModalDisplay} />
            }
          </Content>
        </Layout>
      </Layout>
      {
        showModal && 
        <OkrModal 
          showModal={showModal} 
          okrItem={editedItem}
          onModalClosed={this.onModalClosed}
          onModalSubmit={this.onModalSubmit}
        />
      }
      </>
    )
  }
}