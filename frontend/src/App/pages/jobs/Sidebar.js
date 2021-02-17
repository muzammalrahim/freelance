import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import Checkbox from '@material-ui/core/Checkbox';
import RangeSlider from './RangeSlider'



const Side = props => {
   

    return (
        <>
            <div className="side-menu">
             <Nav className="bg-white sidebar">
                <div className="sidebar-sticky"></div>
                <ul className="skills">
                    <h3>Skills</h3>
                    <li className="checkbox-wrapper">
                        <label className="checkmark">
                            <spna className="heading">Skill 01</spna> 
                        </label>
                        <input type="checkbox" name="name" id="check" />

                    </li>
                    <li>
                        <label>
                            <spna className="heading">Skill 02</spna> 
                        </label>
                        <input type="checkbox" name="name" />
                     </li>
                    <li>
                        <label>
                            <spna className="heading">Skill 03</spna> 
                        </label>
                        <input type="checkbox" name="name" />
                    </li>
                    <li>
                        <label>
                            <spna className="heading">Skill 04</spna> 
                        </label>
                        <input type="checkbox" name="name" />
                    </li>
                    <li>
                        <label>
                            <spna className="heading">Skill 05</spna> 
                        </label>
                        <input type="checkbox" name="name" />
                    </li>
                    <li>
                        <label>
                            <spna className="heading">Skill 06</spna> 
                        </label>
                        <input type="checkbox" name="name" />
                    </li>
                    <li>
                        <label>
                            <spna className="heading">Skill 07</spna> 
                        </label>
                        <input type="checkbox" name="name" />
                    </li>
                    <li>
                        <label>
                            <spna className="heading">Skill 08</spna> 
                        </label>
                        <input type="checkbox" name="name" />
                    </li>
                </ul>
                <ul className="pt-4">
                <h3>Price</h3>
                <RangeSlider/>
                </ul>
                <ul className="pt-4 border-top">
                <h3>Project Type</h3>
                <li>
                    <label>
                        <spna className="heading">Hourly</spna> 
                    </label>
                    <input type="checkbox" name="name" />
                </li>
                <li>
                    <label>
                        <spna className="heading">Monthly</spna> 
                    </label>
                    <input type="checkbox" name="name" />
                </li>
                   
                </ul>
                </Nav>
            </div>
           
          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar