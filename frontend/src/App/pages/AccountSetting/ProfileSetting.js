import React, { Component } from 'react'
import  "./ProfileSetting.css"
import Dropdown from "../../../components/Dropdown";


export default class ProfileSetting extends Component {


    state = { 
		
		RadioclassActivee: 0, 
        ButtonColor: 0,
        RadioItem:0,
	}

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
                            <div className={"selection-button "+ (this.state.ButtonColor=== 1 ? 'neww-button': 'hidden')}  onClick={() => this.setState({ ButtonColor: 1,RadioItem: 1 })}> 
                            <div className={"radio-item "+ (this.state.RadioItem=== 1 ? 'radio-item1': 'hidden')}  onClick={() => this.setState({ RadioItem: 1 })}> 
                              <input  type="radio" id="ritema" name="ritem" value="Private" checked={this.state.ButtonColor=== 1}></input>
                              <label for="ritema"><span>Private</span></label>
                            </div>
                            </div>
                            </div>
                            <div className=" col-md-6">
                            <div className={"selection-button "+ (this.state.ButtonColor=== 2 ? 'neww-button': 'hidden')}  onClick={() => this.setState({ ButtonColor: 2,RadioItem: 2 })}> 
                            <div className={"radio-item "+ (this.state.RadioItem=== 2 ? 'radio-item1': 'hidden')}  onClick={() => this.setState({ RadioItem: 2 })}> 
                              <input type="radio" id="ritemb" name="ritem" value="Public" checked={this.state.ButtonColor=== 2}></input>
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
                   
                        <div className={"card-as "+ (this.state.RadioclassActivee=== 1 ? 'card-as-green': 'hidden')}  onClick={() => this.setState({ RadioclassActivee: 1 })}>         
                                        <t>Entry Level</t>
                                        <p>I am relatively new to this field.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className={"card-as "+ (this.state.RadioclassActivee=== 2 ? 'card-as-green': 'hidden')}  onClick={() => this.setState({ RadioclassActivee: 2 })}>         
                                        <t>Intermediate</t>
                                        <p>I have substantial experience in this field.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className={"card-as "+ (this.state.RadioclassActivee=== 3 ? 'card-as-green': 'hidden')}  onClick={() => this.setState({ RadioclassActivee: 3 })}>         
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

