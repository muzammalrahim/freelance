import React, { Component } from 'react'
import ContractNav from "./ContractNav";
import Navbar from '../jobs/Navbar';
import Header from '../../../../src/components/header/Header';
import "../../../assets/css/custom.css";
import ContractView  from "./ContractView"
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ControlledAccordions from './Accordians'
import FooterMenu from './FooterMenu';


export default class ContractOne extends Component {
    render() {
        return (
            <div className="contract-pg1">
                {/* top header */}
                <div className="top-area">
                    <Header />
                </div>
                {/* top header */}
                <div className="contractone-main">
                    <div className="container">
                        <div className="main-wrap pt-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4">
                                    <ContractNav/>
                                </div>
                                <div className="col-md-9 col-sm-8">
                                    <ContractView/>
                                    <div className="cont-row">
                                        <div className="con-des-area">
                                        <div className="content-heading">
                                            <Avatar className="my-name">OP</Avatar>
                                            <h3 className="pt-2 pl-2">
                                            Job title lorem ipsum lorem ipsum lorem ipsum 
                                            </h3>
                                            <Button variant="outlined" color="secondary">View Job</Button> 
                                        </div>
                                        <div className="row">
                                            <ul className="duration">
                                                <li>
                                                <p><i class="fas fa-lock"></i>Monthly</p>
                                                </li>
                                                <li>
                                                <p><i class="fa fa-calendar-alt"></i>2 months</p>
                                                </li>
                                                <li>
                                                <p><i class="fas fa-clock"></i>20 min ago</p>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        </div>
                                        
                                        <div className="mile-stones">
                                            <ControlledAccordions/>
                                        </div>
                                        <div className="invoice-details">
                                            <h3>Invoice Receipt</h3>
                                            <FooterMenu/>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}
