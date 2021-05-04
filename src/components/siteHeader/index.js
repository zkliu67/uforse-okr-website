import React from 'react';
import { withRouter } from 'react-router-dom';
import Employers from '../../routers/employers';
import { Layout, List } from 'antd';
const { Header } = Layout;

@withRouter
class SiteHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      const employer = Employers.getEmployer(token);
      if (employer) {
        this.setState({isAuth: true, employer});
      }
      else {
        this.setState({isAuth: false});
      }
    }
    else {
      this.setState({isAuth: false});
    }
  }

  render() {
    return (
      <Header>
        
      </Header>
    )  
  }
}

export default SiteHeader;