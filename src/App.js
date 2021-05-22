import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SiteHeader from './components/siteHeader';
import OKRMainPage from './pages/okrMainPage';
import Authentication from './pages/Authentication';
import './App.css';
import { Layout } from 'antd';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/main-okr' component={OKRMainPage} />
        <Route path='/login' component={Authentication} />
        <Route path='/register' component={Authentication} />
      </Switch>
    </BrowserRouter>             
  );
}