import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SiteHeader from './components/siteHeader';
import OKRMainPage from './pages/okrMainPage';
import Login from './pages/login';
import './App.css';
import { Layout } from 'antd';

const isAuth = () => {
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

function App() {
  return (
    <Layout>
      <SiteHeader />
      <BrowserRouter>
        <Switch>
          <Route path='/main-okr' component={OKRMainPage}></Route>
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>  
    </Layout>
    
  );
}

export default App;
