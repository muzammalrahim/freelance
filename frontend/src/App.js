import React from 'react';
import './App.css';
import signuppage from './App/pages/signin/signuppage'
import SignIn from './App/pages/signin/SignIn'
import NotFound from "./App/pages/notFound/NotFound";
import Jobs from "./App/pages/jobs/Jobs";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import JobDetail from "./App/pages/jobs/JobDetail";
import ContractOne from './App/pages/Contract/ContractOne'
import JobDetailTwo from "./App/pages/jobs/JobDetailTwo";
import ApplicationList from '../src/App/pages/application-pages/ApplicationList'
import ApplicationDetail from '../src/App/pages/application-pages/ApplicationDetail'
import Faq from './App/pages/faq/faq'
import Help from './App/pages/help/help'
import Chat from './App/pages/chat/chat'
import Reports from './App/pages/AccountSetting/Reports'
import PaymentWithdraw from './App/pages/AccountSetting/PaymentWithdraw'
import Profileview from './components/profileview/ProfileView'
import PortfolioTab from './components/profileview/PortfolioTab'
import PortfolioDetails from './components/profileview/PortfolioDetails'
import DetailsPreview from './components/profileview/preview/DetailsPreview'
import Accounttype from "./App/pages/registration/AccountType"



function App() {
return (
    <>
    <Router>
    <Switch>
         <Route path='/' exact component={SignIn}/>
         <Route path='/login' exact component={SignIn}/>
        <Route path='/signup' exact component={signuppage}/>
        <Route path='/Jobs' exact component={Jobs}/>
        <Route path='/JobDetail' exact component={JobDetail}/>
        <Route path='/profileview' exact component={Profileview}/>
        <Route path='/portfoliotab' exact component={PortfolioTab}/>
        <Route path='/detailspreview' exact component={DetailsPreview}/>
        <Route path='/portfoliodetails' exact component={PortfolioDetails}/>
        <Route path='/registration-process' exact component={Accounttype}/>
        <Route path='/ContractOne' exact component={ContractOne}/>
        <Route path='/JobDetailTwo' exact component={JobDetailTwo}/>
        <Route path='/ApplicationList' exact component={ApplicationList}/>
        <Route path='/ApplicationDetail' exact component={ApplicationDetail}/>
        <Route path='/faq' exact component={Faq}/>
        <Route path='/help' exact component={Help}/>
        <Route path='/chat' exact component={Chat}/>
        <Route path='/paymentWithdraw' exact component={PaymentWithdraw}/>
        <Route path='/reports' exact component={Reports}/>
        <Route path='/profile-view' exact component={Profileview}/>
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>    
  );
}

export default App;


