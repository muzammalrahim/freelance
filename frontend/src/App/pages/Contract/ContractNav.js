import React, { Component } from 'react'
import { contractnav } from "./../Contract/contractnav.css";


export default class ContractNav extends Component {
    render() {
        return (
            <div className="contract-left">
                <ul className="c1">
                <li>
                    <p>Budget <span className="budget">SAR 300</span></p>
                </li>
                <li>
                    <p>Paid <span className="paid">SAR 100</span></p>
                </li>
                <li>
                    <p>Remaining <span>SAR 200</span></p>
                </li>
                <li>
                    <p><b>Total earning <span>SAR 300</span></b></p>
                </li>
                    
                </ul>
            </div>
        )
    }
}
