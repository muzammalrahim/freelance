import React from 'react';
import './App.css';
import signuppage from './App/pages/signin/signuppage'
import SignIn from './App/pages/signin/SignIn'
import Accounttype from "./App/pages/registration/AccountType"
import tabbar2 from './App/pages/registration/tabbar2'
import NotFound from "./App/pages/notFound/NotFound";
import Jobs from "./App/pages/jobs/Jobs";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
import AddPortfolio from './components/profileview/AddPortfolio'
import PortfolioDetails from './components/profileview/PortfolioDetails'
import DetailsPreview from './components/profileview/preview/DetailsPreview'
function App() {
return (
    <>
    <Router>
    <Switch>
         <Route path='/' exact component={SignIn}/>
         <Route path='/SignIn' exact component={SignIn}/>
        <Route path='/signup' exact component={signuppage}/>
         <Route path='/registration-processpages' exact component={tabbar2}/>
        <Route path='/account-setting' exact component={AccountSettingMain}/>
        <Route path='/Jobs' exact component={Jobs}/>
        <Redirect from='/Accounttype/' to="/registration-process/" />
        <Route path='/JobDetail' exact component={JobDetail}/>
        <Route path='/PersonalProfile' exact component={PersonalProfile}/>
        <Route path='/ProfessionalProfile' exact component={ProfessionalProfile}/>
        <Route path='/profileview' exact component={Profileview}/>
        <Route path='/addportfolio' exact component={AddPortfolio}/>
        <Route path='/detailspreview' exact component={DetailsPreview}/>
        <Route path='/portfoliodetails' exact component={PortfolioDetails}/>
        <Route path='/Paymentinformation' exact component={PaymentInformation}/>
        <Route path='/Companydetail' exact component={CompanyDetail}/>
        <Route path='/Hourlyrate' exact component={HourlyRate}/>
        <Route path='/Idverification' exact component={IdVerification}/>
        <Route path='/registrationprocess' exact component={Root}/>
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


