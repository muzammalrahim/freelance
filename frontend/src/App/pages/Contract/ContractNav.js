import React, { Component } from 'react'
import "../../../assets/css/custom.css";


export default class ContractNav extends Component {
    render() {
        return (
            <div className="contract-left">
                <ul className="c1">
                <li>
                    <p className="p-3">Budget <span className="budget">SAR 300</span></p>
                </li>
                <li>
                    <p className="p-3">Paid <span className="paid">SAR 100</span></p>
                </li>
                <li>
                    <p className="p-3">Remaining <span>SAR 200</span></p>
                </li>
                <li>
                    <p className="p-3"><b>Total earning <span>SAR 300</span></b></p>
                </li>
                    
                </ul>
            </div>
        )
    }
}
