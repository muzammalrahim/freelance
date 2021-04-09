import React, { Component } from 'react'
import  "./ProfileSetting.css"
import Dropdown from "../../../components/Dropdown";
import list, { patch } from "../helper/api"
export default class ProfileSetting extends Component {

    constructor(props){
        super(props);



        this.state = {
        value:'',
        id:'',
        RadioclassActivee: 0, 
        provideService :'',

        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleToggleChange1 = this.handleToggleChange1.bind(this);
        this.handleToggleChange2 = this.handleToggleChange2.bind(this);
        this. dropDownHandler = this.dropDownHandler.bind(this);
        this. saveChanges = this.saveChanges.bind(this);



    }

    state = { 
		
        ButtonColor: 0,
        RadioItem:0,
        
    }

    dropDownHandler (provideService2)
     {
        this.setState({provideService:provideService2})
      }

     handleInputChange(event) 
    {
        this.setState({value:event.target.value});
        
    }

    handleToggleChange(event) 
    {
        this.setState({RadioclassActivee: 1});
        this.setState({id:event.currentTarget.id});
        
        
    }
    
    handleToggleChange1(event) 
    {
        this.setState({RadioclassActivee: 2});
        this.setState({id:event.currentTarget.id});
        
        
    }

    handleToggleChange2(event) 
    {
        this.setState({RadioclassActivee: 3});
        this.setState({id:event.currentTarget.id});         
    }
    
 getId()
 {   
       var id = localStorage.getItem("profile_id")
        list(`api/v1/user/${id}/`)
        .then((response) => {
          var profileId = response.data.profile[0].id
          localStorage.setItem("modelId",profileId)
      
        });

 }

saveChanges= () => {
    let {id} = this.state

   if(id === "junior")
   {
        var data = { experience_level : "junior"}
   }
   else if(id === "intermediate")
   {
        var data = { experience_level : "intermediate"}
   }
   else if (id === "expert")
   {
        var data = { experience_level : "expert"}
   }
    var getModelId= localStorage.getItem("modelId")

   patch(`api/v1/freelancer_profile/${getModelId}/`,data)
    .then((res)=>{
     console.log("res34:",res)
    })
}
    componentDidMount()
    {
        this.getId() 
        this.saveChanges() 
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
                            <div className={"selection-button "+ (this.state.ButtonColor=== 1 ? 'neww-button': 'hidden')}  onClick={() => this.setState({ ButtonColor: 1,RadioItem: 1, value: 'Private' })}> 
                            <div className={"radio-item "+ (this.state.RadioItem=== 1 ? 'radio-item1': 'hidden')}  onClick={() => this.setState({ RadioItem: 1 })}> 
                              <input  type="radio" id="ritema" name="ritem" value="Private" checked={ this.state.value === 'Private' }  onChange={this.handleInputChange}></input>
                              <label for="ritema"><span>Private</span></label>
                            </div>
                            </div>
                            </div>
                            <div className=" col-md-6">
                            <div className={"selection-button "+ (this.state.ButtonColor=== 2 ? 'neww-button': 'hidden')}  onClick={() => this.setState({ ButtonColor: 2,RadioItem: 2, value: 'Public' })}> 
                            <div className={"radio-item "+ (this.state.RadioItem=== 2 ? 'radio-item1': 'hidden')}  onClick={() => this.setState({ RadioItem: 2 })}> 
                              <input type="radio" id="ritemb" name="ritem" value="Public" checked={ this.state.value === 'Public' }  onChange={this.handleInputChange}></input>
                              <label for="ritemb"><span>Public</span></label>
                            </div>
                            </div>     
                            </div>
                        </div>    
                        {/* {console.log("Value",this.state.value)} */}
                        </div>
                        <div className="ps-selections col-md-6">
                            <div className="row as-dropdown">
                             <Dropdown onDropdownn={this.dropDownHandler} title="Project" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="ps-selections col-md-12">
                                <p>Experience Level</p>
                                <div className="row">
                                    <div className="col-md-4">
                   
                        <div className={"card-as "+ (this.state.RadioclassActivee=== 1 ? 'card-as-green': 'hidden')} id="junior" onClick={this.handleToggleChange}>              
                                        <t>Junior</t>
                                        <p>I am relatively new to this field.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className={"card-as "+ (this.state.RadioclassActivee=== 2 ? 'card-as-green': 'hidden')} id="intermediate" onClick={this.handleToggleChange1}>             
                                        <t>Intermediate</t>
                                        <p>I have substantial experience in this field.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className={"card-as "+ (this.state.RadioclassActivee=== 3 ? 'card-as-green': 'hidden')} id="expert" onClick={this.handleToggleChange2}>         
                                        <t>Expert</t>
                                        <p>I have comprehensive and deep experience in this field.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {console.log("Value",this.state.id)}
                        
                        <div className="row">
                            <div className="my-profile-links col-md-12">
                                  <a href="">discard changes</a>
                                  <button onClick={() => {
                                    this.saveChanges()
                                  }} >save changes</button>
                            </div>
                        </div>
                    </div>
               </div>
        )
    }
}





