import React from "react";
import "./ProfessionalProfile.css";
import Group from '../../../assets/Group 3539.png'
import Dropdown from "../../../components/Dropdown";
import Catagory from '../../../components/Catagory'
import SelectSkill from "../../../components/SelectSkill";
import img2 from '../../../img/profess_F.png'

import GetImage from './GetImage'
function Heading(props) {
  return (
    <>

      <div className="background">
        <img src={Group} alt="user" className="userpad" />
        <p className="text">Professional Profile</p>
        <p className="paragragh">
          Creating your account in just a few steps away, Fill your professional
          details
        </p>
        <Dropdown />
        <SelectSkill />
        <Catagory/>
        </div>
        <p style={{color:"white"}}>t</p>
        <GetImage/>
    </>
  );
}
export default Heading;


export function HeadingFooter( ) 
{
    return (
        <>

        <div className='proP_foot' style={{backgroundImage: `url(${img2})`}}></div>
    
        </>
        );
      
}