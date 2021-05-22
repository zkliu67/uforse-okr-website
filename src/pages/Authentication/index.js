import React from 'react';
import SiteHeader from '../../components/siteHeader';
import Login from './component/login';
import Register from './component/register';
import './index.css';


export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register: false
    }
  }

  componentDidMount() {
    const { location: { pathname = '' } } = this.props || {};
    if ( pathname === '/login' ) {
      this.setState({
        login: true,
        register:false
      })
    }
    else if (pathname === '/register' ) {
      this.setState({
        login: false,
        register:true
      })
    }
  }

  render() {
    const { login, register } = this.state || {};
    const { history = {} } = this.props || {};
    return (
      <>
        <SiteHeader login={login} register={register} />
        { login ? <Login history={history} /> : null }
        { register ? <Register history={history} /> : null }
      </>
    )
  }
}

