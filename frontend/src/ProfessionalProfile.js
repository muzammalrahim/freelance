import React from "react";
import "./App/pages/registration/ProfessionalProfile.css";
import Group from './assets/Group 3539.png'
import Dropdown from "./components/Dropdown";
import Button from './components/Button';
import Catagory from './components/Catagory'
import SelectSkill from "./components/SelectSkill";
import Profile from "./components/Profile";
import Certificate from "./components/Certificate";
function Heading(props) {
  return (
    <>
      <Profile className="left-section"/>
      <div className="background">
        <img src={Group} alt="user" className="userpad" />
        <p className="text">Professional Profile</p>
        <p className="paragragh">
          Creating your account in just a few steps away, Fill your professional
          details
        </p>
        <Dropdown />
        <SelectSkill />
        <Catagory />
       
        <div className="Buttons">
         <div className="Buttonss"> 
           <Button buttonStyle="btn--white" value="Next"/>
        
           </div>
          <div>
          <a href="#" class="pf_prevButtonns">
            Previous
          </a>
        </div>
        </div>
        <Certificate />
      </div>
    </>
  );
}
export default Heading;
