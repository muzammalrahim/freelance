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

                             this.props.onDropdownn(event.target.value);

                             console.log("dropdown",event.target.value)
                         }



  render() {
    return (
      <div className="dropdown-comp">

      </div>
      
  }
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