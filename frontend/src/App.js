import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
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
import JobDetail from "./App/pages/jobs/JobDetail";
import profileview from './components/profileview/ProfileView'
import Profileview from './components/profileview/ProfileView';
import ContractOne from './App/pages/Contract/ContractOne'
import {AccountSettingMain} from './App/pages/AccountSetting/AccountSettingMain'
import JobDetailTwo from "./App/pages/jobs/JobDetailTwo";
import ApplicationList from '../src/App/pages/application-pages/ApplicationList'
import ApplicationDetail from '../src/App/pages/application-pages/ApplicationDetail'


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
        <Route path='/JobDetail' exact component={JobDetail}/>
        <Route path='/Paymentinformation' exact component={PaymentInformation}/>
        <Route path='/Companydetail' exact component={CompanyDetail}/>
        <Route path='/Hourlyrate' exact component={HourlyRate}/>
        <Route path='/Idverification' exact component={IdVerification}/>
        <Route path='/registrationprocess' exact component={Root}/>
        <Route path='/ContractOne' exact component={ContractOne}/>
        <Route path='/JobDetailTwo' exact component={JobDetailTwo}/>
        <Route path='/ApplicationList' exact component={ApplicationList}/>
        <Route path='/ApplicationDetail' exact component={ApplicationDetail}/>
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>    
  );
}

export default App;

