import React, { Component } from 'react'
import "../../../assets/css/custom.css";

import list from '../../pages/helper/api'

export default class ContractNav extends Component {
   constructor(props) {
       super(props)
       this.state = {
        
       }
    
   }
   componentDidMount() {
       list('/api/v1/contract/')
       .then((response) => {
          const data = response.data;
          console.log("get data:" , response.data[0]);
          this.setState({data});
       })
   }
   
   
   

    render() {
        return (
            <div className="contract-left">
                <ul className="c1">
                <li>
                    <p className="p-3">Budget <span className="budget">{this.state.project_budget}</span></p>
                </li>
                <li>
                    <p className="p-3">Paid <span className="paid">{this.state.project_budget}</span></p>
                </li>
                <li>
                    <p className="p-3">Remaining <span>{this.state.project_budget}</span></p>
                </li>
                <li>
                    <p className="p-3"><b>Total earning <span>{this.state.project_budget}</span></b></p>
                </li>
                    
                </ul>
            </div>
        )
    }
}
