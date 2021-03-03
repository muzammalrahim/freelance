import React, { Component } from 'react'
import  "./ProfileSetting.css"
import Dropdown from "../../../components/Dropdown";


export default class ProfileSetting extends Component {
    render() {
        return (
            <div className="profile-setting">
               <div className="ps-heading">
                  My Profile
               </div>
               <div className="container">
                <div className="row">
                        <div className="ps-selections col-md-6">
                            <p>Visibility</p>
                <div className="row">
                            <div className=" col-md-6">
                            <div className="selection-button">
                            <div class="radio-item">
                              <input type="radio" id="ritema" name="ritem" value="Private"></input>
                              <label for="ritema"><span>Private</span></label>
                            </div>
                            </div>
                            </div>
                            <div className=" col-md-6">
                            <div className="selection-button">
                            <div class="radio-item">
                              <input type="radio" id="ritemb" name="ritem" value="Public"></input>
                              <label for="ritemb"><span>Public</span></label>
                            </div>
                            </div>     
                            </div>
                        </div>     
                        </div>
                        <div className="ps-selections col-md-6">
                            <div className="row as-dropdown">
                             <Dropdown title="Project" />
                            </div>
                        </div>
                        </div>
                        
                        
                        
                    </div>
               </div>
        )
    }
}


