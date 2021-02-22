import React, { Component } from 'react'
import ContractNav from "./ContractNav";
import Header from '../../../../src/components/header/Header';
import "../../../assets/css/custom.css";
import ContractView  from "./ContractView"
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ControlledAccordions from './Accordians'
import FooterMenu from './FooterMenu';
import WorkIcon from '@material-ui/icons/Work'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CalanderIcon from '../../../img/calendar.svg';
import AvtarIcon from '../../../img/contract-img.png';


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
                        <div className="main-wrap pt-5 pl-4 pr-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4">
                                    <ContractNav/>
                                </div>
                                <div className="col-md-9 col-sm-8">
                                    <ContractView/>
                                    <div className="cont-row">
                                        <div className="con-des-area">
                                        <div className="content-heading">
                                            <div className="contact1-avatar"><img src={AvtarIcon} alt="no img"/></div>
                                            <h3 className="pl-3">
                                            Job title lorem ipsum lorem ipsum <br></br>lorem ipsum 
                                            </h3>
                                            <Button variant="outlined" color="secondary">View Job</Button> 
                                        </div>
                                        {/* Tags */}
                                        <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-11">
                                            <ul className="duration pl-1">
                                                <li className="pr-3">
                                                <p className="m-icon"><span className="pr-1"><WorkIcon/></span>Monthly</p>
                                                </li>
                                                <li className="pr-3">
                                                <p className="m-icon"><span className="pr-1"><img src={CalanderIcon} alt="no img"/></span>2 months</p>
                                                </li>
                                                <li className="pr-3">
                                                <p className="m-icon"><span className="pr-1"><WatchLaterIcon/></span>20 min ago</p>
                                                </li>

                                            </ul>
                                        </div>

                                        </div>
                                        {/* Tags */}
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
