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
import ProfessionalProfile from './ProfessionalProfile'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import JobDetail from "./App/pages/jobs/JobDetail";
import Profileview from './components/profileview/ProfileView'
import faq from './App/pages/faq/faq'
import AddPortfolio from './components/profileview/AddPortfolio'
import PortfolioDetails from './components/profileview/PortfolioDetails'
import DetailsPreview from './components/profileview/preview/DetailsPreview'
function App() {
return (
    <>
    <Router>
    <Switch>
        <Route path='/' exact component={SignIn}/>
        <Route exact path='/faq' component={faq}/>
        <Route path='/SignIn' exact component={SignIn}/>
        <Route path='/signup' exact component={signuppage}/>
        <Route path='/Accounttype' exact component={AccountType}/>
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
        <Route path='/tabbar2' exact component={Root}/>
        <Route path='/Jobs' exact component={Jobs}/>
        <Route path='/JobDetail' exact component={JobDetail}/>
        <Route path='/registrationprocess' exact component={Root}/>
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>    
  );
}
export default App;

