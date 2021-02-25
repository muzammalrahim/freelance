import React, { Component } from 'react'
import  ProfileSetting from "./ProfileSetting"
import   ContactInfo from "./ContactInfo"
import   MembershipPlan from "./MembershipPlan"
import  BillingMethod from "./BillingMethod"
import  NotificationSetting from "./NotificationSetting"
import  PaymentWithdraw  from "./PaymentWithdraw"



export default class AccountSettingMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabindex: 1,
    };
  }




  render() {
    return (
      <div>

      
      <div class="main-area">
      <div class="container-fluid pr-5 pl-5">
          <div class="row">
              <div class="banner-ac">
                  <div class="btn btn-primary btn-lg change-cover-btn">
                      <i class="fa fa-camera"></i>
                      <a class="popup-with-form" href="#">Change Cover</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="position-wrapper">
          <div class="container">
              <div class="row">
                  <div class="col-md-3 pt-5">
                      <div class="wrap-bg bg-white p-4">
                                        
         
                      <div class="Tab">
                      <span
                        class=" "
                        onClick={() => this.setState({ tabindex: 1 })}
                      >
                  <button type="button" class={"btn btn-outline-secondary btn-circle btn-md ButtonclsActive" + (this.state.tabindex=== 1 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 1 })}> 1</button> 

                  
                
    
                      </span>{" "}
                      <span class="text2">Profile Setting</span>
                    </div>{" "}
         
                      <div class="Tab">
                      <span
                        class=" "
                        onClick={() => this.setState({ tabindex: 2 })}
                      >
                  <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 2 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 2 })}> 2</button> 
                
    
                      </span>{" "}
                      <span class="text2">Contact Info</span>
                    </div>{" "}
         
                      <div class="Tab">
                      <span
                        class=" "
                     
                      >
                  <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 3 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 3 })}> 3</button> 
                
    
                      </span>{" "}
                      <span class="text2">Membership Plan</span>
                    </div>{" "}
         
                      <div class="Tab">
                      <span
                        class=" "
           
                      >
                  <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 4 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 4 })}> 4</button> 
                
    
                      </span>{" "}
                      <span class="text2">Billing Method</span>
                    </div>{" "}
         
                      <div class="Tab">
                      <span
                        class=" "
                 
                      >
                  <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 5 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 5 })}> 5</button> 
                
    
                      </span>{" "}
                      <span class="text2">Notification Setting</span>
                    </div>{" "}
         
                      <div class="Tab">
                      <span
                        class=" "
                
                      >
                  <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 6 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 6 })}> 6</button> 
                
    
                      </span>{" "}
                      <span class="text2">Payment Withdraw</span>
                    </div>{" "}


                      </div>
                  </div>
                  <div class="col-md-9 pt-5">
                  {console.log(this.state.tabindex)}
                  {this.state.tabindex === 1 && <ProfileSetting/>}
                  {this.state.tabindex === 2 && <ContactInfo />}
                  {this.state.tabindex === 3 && <MembershipPlan/>}
                  {this.state.tabindex === 4 && <BillingMethod />}
                  {this.state.tabindex === 5 && <NotificationSetting/>}
                  {this.state.tabindex === 6 && <PaymentWithdraw/>}
                      <div class="wrap-bg bg-white p-5">
                        
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      </div>
    )
  }
}
