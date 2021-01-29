import React from 'react';
import './App.css';

import signuppage from './App/pages/signin/signuppage'
import SignIn from './App/pages/signin/SignIn'
import AccountType from './AccountType'
import PersonalProfile from './App/pages/registration/PersonalProfile'
import PaymentInformation from './App/pages/registration/PaymentInformation'
import HourlyRate from './App/pages/registration/HourlyRate'
import CompanyDetail from './App/pages/registration/CompanyDetail'
import IdVerification from './App/pages/registration/IdVerification'
import {Root} from './App/pages/registration/tabbar2'
import NotFound from "./App/pages/notFound/NotFound";
import Jobs from "./App/pages/jobs/Jobs";
import ProfessionalProfile from './App/pages/registration/ProfessionalProfile'
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
        <Route path='/PersonalProfile' exact component={PersonalProfile}/>
        <Route path='/ProfessionalProfile' exact component={ProfessionalProfile}/>
        {/* <Route path='/ProfileView' exact component={ProfileView}/> */}

     {/*  <Route path='/Paymentinformation' exact component={PaymentInformation}/>
        <Route path='/Companydetail' exact component={CompanyDetail}/>
        <Route path='/Hourlyrate' exact component={HourlyRate}/>
        <Route path='/Idverification' exact component={IdVerification}/> */} 
        
        <Route path='/registrationprocess' exact component={Root}/>
        <Route path='/accountsetting' exact component={AccountSettingMain}/>
        <Route path='/Jobs' exact component={Jobs}/>
        <Route component={NotFound} />

        <Route path='/Paymentinformation' exact component={PaymentInformation}/>
        <Route path='/Companydetail' exact component={CompanyDetail}/>
        <Route path='/Hourlyrate' exact component={HourlyRate}/>
        <Route path='/Idverification' exact component={IdVerification}/>
        <Route path='/registrationprocess' exact component={Root}/>
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>    
  );
}

export default App;