import React, { Component } from 'react'
import  "./NotificationSetting.css"
import  "./ProfileSetting.css"
import Dropdown from "../../../components/Dropdown";
import ToggleSwitch from '../../../components/ToggleSwitch';



export default class NotificationSetting extends Component {
    render() {
        return (
            <div className="notification-setting">
                <div className="ps-heading">
                  Notification Setting
                  <p>Desktop</p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Show notifications for" />
                  </div>
                  <div className="col-md-6">
                   <Dropdown title="Increment message counter for" />
                  </div>
                  </div>
               </div>
               <div className="ps-heading">
                  <p>Mobile</p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Show notifications for" />
                  </div>
                  <div className="col-md-6">
                   <Dropdown title="Increment message counter for" />
                  </div>
                  </div>
               </div>
               <div className="ps-heading">
                  <p>Email <span>(sending to ja******14@gmail.com)</span></p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Send an email with unread activity for" />
                  </div>
                  <div className="col-md-6">
                   <Dropdown />
                  </div>
                  </div>
               </div>
               <div className="ps-heading">
                  <p>Email <span>(sending to ja******14@gmail.com)</span></p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Receive recruiting emails for" />
                  </div>
                  <ToggleSwitch />
                

                  </div>
               </div>
               
            </div>
        )
    }
}
