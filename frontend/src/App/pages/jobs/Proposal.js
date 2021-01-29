import React, { Component } from 'react'
import './proposal.css';
import './jobdetail.css';
import Navbar from './Navbar';

export default class Proposal extends Component {
    render() {
        return (
            <div className="proposal-details">
                <div className="proposal-heading">
                    <h1>Proposal Details</h1> 
                    <ul>
                        <li>
                            <h3>Proposal Amount</h3>
                            <input type="text" placeholder="1"></input>
                        </li>
                        <li>
                            <h3>15% service free</h3>
                            <input type="text" placeholder="1"></input>
                        </li>
                        <li>
                            <h3>Total amount you’ll recieve</h3>
                            <input type="text" placeholder="1"></input>
                        </li>
                        <li>
                            <h3>Your Proposal</h3>
                            <textarea row="3" placeholder="Text"></textarea>
                        </li>
                    </ul>
                    
                    <button class="btn btn--yellow btn--medium">Submit a Proposal</button>
                    
                </div>
                
            </div>
            
        )
    }
}
