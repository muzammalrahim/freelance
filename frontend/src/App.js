import React from 'react';
import './App.css';

import signuppage from './App/pages/signin/signuppage'
import SignIn from './App/pages/signin/SignIn'
import AccountType from './AccountType'
import {Root} from './App/pages/registration/tabbar2'
import test from './App/pages/registration/test'
import NotFound from "./App/pages/notFound/NotFound";
import Jobs from "./App/pages/jobs/Jobs";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AccountSettingMain } from './App/pages/AccountSetting/AccountSettingMain';
function App() {
return (
    <>
    <Router>
      
    <Switch>
         <Route path='/' exact component={SignIn}/>
         <Route path='/SignIn' exact component={SignIn}/>
        <Route path='/signup' exact component={signuppage}/>
        <Route path='/Accounttype' exact component={AccountType}/>
        <Route path='/registration-process' exact component={Root}/>
        <Route path='/account-setting' exact component={AccountSettingMain}/>
        <Route path='/Jobs' exact component={Jobs}/>
        <Route path='/test' exact component={test}/>
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>    
  );
}

export default App;
