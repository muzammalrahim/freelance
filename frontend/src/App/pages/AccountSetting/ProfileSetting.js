import React, { Component } from 'react'
import  "./ProfileSetting.css"
import Dropdown from "../../../components/Dropdown";


export default class ProfileSetting extends Component {

    state = { 
		
		changeColorr: 0, 
	}
    
    constructor(){
         super();

         this.state = {
             black: true
         }

         this.state = {
            greenn: true
        }

        //  this.state = {
        //     green: true
        // }

    }

   changeColor(){
    this.setState({black: !this.state.black})


}

changeColorr(){
    this.setState({greenn: !this.state.greenn})
}

// changeColorr(){
//     this.setState({green: !this.state.green})
// }
    
    render() {

        let selection_button= this.state.black ? "neww-button" : "selection-button";
        // let radio_item= this.state.green ? "radio-item" : "radio-item1";
        let card_as= this.state.greenn ? "card-as" : "card-as-green";



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
                            <div className={selection_button} onClick={this.changeColor.bind(this)}>
                            <div class="radio-item">
                              <input  type="radio" id="ritema" name="ritem" value="Private"></input>
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
                        <div className="row">
                            <div className="ps-selections col-md-12">
                                <p>Experience Level</p>
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className={card_as} onClick={this.changeColorr.bind(this)}>
                                        <t>Entry Level</t>
                                        <p>I am relatively new to this field.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className={card_as} onClick={this.changeColorr.bind(this)}>
                                        <t>Intermediate</t>
                                        <p>I have substantial experience in this field.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className={card_as} onClick={this.changeColorr.bind(this)}>
                                        <t>Expert</t>
                                        <p>I have comprehensive and deep experience in this field.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="my-profile-links col-md-12">
                                  <a href="">discard changes</a>
                                  <button>save changes</button>
                            </div>
                        </div>
                        
                        
                        
                    </div>
               </div>
        )
    }
}


{/* <div className={radio_item} onClick={this.changeColorr.bind(this)}>  */}