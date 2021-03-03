import React, { Component } from 'react';
import './Dropdown.css'

import {dropdownAction} from "../redux/actions/dropdownAction"
import {connect} from "react-redux"



class Dropdown extends React.Component {
                                          constructor(props) {
                                          super(props);
                                          this.state = {
                                                            provide_service: ''
                                                        };
                                           this.handleChange = this.handleChange.bind(this);

                                          }


     handleChange(event) {
                             this.setState({provide_service: event.target.value});
                             this.props.changeName(event.target.value)
                         }



  render() {
    return (
      <div>
        <p className="dropheader">{this.props.title}</p>
           <select className="Select" value={this.state.provide_service} onChange={this.handleChange} >
           
            <option value="Select service">Select service</option>
            <option value="Copywriting">Copywriting</option>
            <option value="Blog Editing">Blog Editing</option>
            <option value="Web Design">Web Design</option>
            <option value="Web Development">Web Development</option>
            <option value="WordPress Setup">WordPress Setup</option>
            <option value="Graphic Design">Graphic Design</option>
           
          </select>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch)=>
{
   return{
     changeName:(statedata)=>
     {
       dispatch(dropdownAction({type:'DROPDOWN_CHANGE',payload:statedata}))
     }
   }
}


export default connect(null, mapDispatchToProps)(Dropdown)