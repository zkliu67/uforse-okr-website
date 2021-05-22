import React from 'react';
import { useHistory } from "react-router-dom";
import { Layout, List } from 'antd';
import './index.css';
const { Header } = Layout;

function SiteHeader({ employer }){
  let history = useHistory();

  const onEmployerLogout = () => {
    history.push("/login");
  }

  const renderHeaderNotAuthed = () => {
    return (
      <div className="header-wrapper">
        <div className="header-item">Sign Up</div>
        <div className="header-divider">|</div>
        <div className="header-item">Login</div>
      </div>
    )
  }
  
  const renderHeaderAuthed = ({username}) => {
    return (
      <div className="header-wrapper">
        <div className="header-item">{username}</div>
        <div className="header-divider">|</div>
        <div className="header-item" onClick={onEmployerLogout}>Logout</div>
      </div>
    )
  }

  return (
    <Header>
      { employer ? renderHeaderAuthed(employer) : renderHeaderNotAuthed() }
    </Header>
  )

}

export default SiteHeader;