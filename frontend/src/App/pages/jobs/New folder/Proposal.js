import React, { Component } from 'react'
import './proposal.css';
import './jobdetail.css';

export default class Proposal extends Component {
    render() {
        return (
            <div className="main-area">
                <div className="proposal-details">
                    <h1>Proposal Details</h1> 
                    <ul>
                        <li>
                            <h3>Proposal Amount</h3>
                            <input type="text" placeholder="1"></input>
                        </li>
                    </ul>
                </div>
                
            </div>
            
        )
    }
}