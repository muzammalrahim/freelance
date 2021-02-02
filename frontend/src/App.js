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
import ProfessionalProfile from './ProfessionalProfile'
// import ProfileView from './components/profileview/ProfileView'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import JobDetail from "./App/pages/jobs/JobDetail";


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
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>    
  );
}

export default App;
