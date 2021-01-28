import React from 'react'
import Card from './components/Card';
import Button from './components/Button';
import logoImage from '../src/bg.png'
import './AccountType.css';
function AccountType() {
    return (
        <div className="AccountType-flex-container">
            <div className="Left-box">
            <img src={logoImage} />
            </div>
            <div className="Right1-box">
            <t>Select Account Type</t>
            <div className="box01">
            <Card type="I want a Job"/><Card type="I want a hire"/>
            </div>
            <div className="box02">
            <Button buttonStyle='btn--outline' value="Continue"/>
            </div>
            </div>
            
        </div>
        
    )
}

export default AccountType
