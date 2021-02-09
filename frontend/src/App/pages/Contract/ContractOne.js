import React, { Component } from 'react'
import ContractNav from "./ContractNav";
import Navbar from '../jobs/Navbar';
import DefaultMenu from '../jobs/DefaultMenu';
import  "./contractone.css";
import ContractView  from "./ContractView"
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ControlledAccordions from './Accordians'
export default class ContractOne extends Component {
    render() {
        return (
            <div className="contract-pg1">
                {/* top header */}
                <div className="top-area">
                    <div className='si-container'>
                        <Navbar text="" value="Post a Project" /> 
                    </div> 
                    <div className='default-menu '>
                        <DefaultMenu />
                    </div>
                </div>
                {/* top header */}
                <div className="contractone-main">
                    <div className="container-fluid">
                        <div className="main-wrap">
                            <div className="row">
                                <div className="col-md-3 col-sm-4">
                                    <ContractNav/>
                                </div>
                                <div className="col-md-9 col-sm-8">
                                    <ContractView/>
                                    <div className="cont-row">
                                        <div className="content-heading">
                                            <Avatar className="my-name">OP</Avatar>
                                            <h3>
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
                                        <div className="mile-stones">
                                            <ControlledAccordions/>
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
