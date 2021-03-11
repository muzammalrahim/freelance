import React, { Component } from 'react'
import  "./ContactInfo.css"
import  "./ProfileSetting.css"



export default class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-information">
                <div className="ci-heading">
                    Account
                    <span>
                        <button>Edit</button>
                    </span>
                </div>
                
                    <div className="ci-account col-md-12">
                        <p>User ID<span>Pixelz-Warrios14</span></p>
                        <p>Name<span> Pixelz-Warrios</span></p>
                        <p>Email<span> PixelzWarrios14@gmail.com</span></p>
                    </div>

                    <div className="ci-heading">
                    Location
                    <span>
                        <button>Edit</button>
                    </span>
                </div>
                
                    <div className="ci-account col-md-12">
                        <p>Address<span>Pixelz-Warrios14</span></p>
                        <p>Phone<span> Pixelz-Warrios</span></p>
                    </div>
                            <div className="my-profile-links col-md-12">
                                  <a href="">discard changes</a>
                                  <button>save changes</button>
                            </div>
                    
            </div>
        )
    }
}
