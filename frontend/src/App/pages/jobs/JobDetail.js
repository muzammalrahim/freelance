import React from 'react'
import Navbar from './Navbar';
import DefaultMenu from './DefaultMenu';
import Proposal from './Proposal';
import AvatarImage from '../../../../src/AvatarImage.png';

export default function JobDetail() {
    return (
        <div className="job-detail">
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
            <div className="main-area">
                <div className="container">
                    <div className="row details-grid">
                        <div className="left-side"><Proposal/></div>
                        <div className="right-side">
                             {/*--------- row1 ---------------*/}
                  <div className="row-1 pb-4">
                  <div className="row job">
                    <div className="img-icon">
                    <div className='avatar-user' style={{backgroundImage: `url(${AvatarImage})`}}></div>
                    </div>
                    <div className="content-heading">
                      <h3>
                      Job title lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                      </h3>
                    </div>
                    {/* <div className="dislike fa-icon">
                    <i class="far fa-thumbs-down"></i>
                    </div>
                    <div className="book-mark fa-icon">
                    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>  */}
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
                    <li className="price">
                      <p>300 SAR <br></br><span>Per Hour</span></p>
                    </li>
                  </ul>
                </div>
                <div className="row paragraph">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries
                        <a href="#">more...</a>
                        </p>
                        <ul className="tags">
                        <li>
                          <a href="#">Design</a>
                          </li>
                          <li>
                          <a href="#">Frontend developer</a>
                          </li>
                          <li>
                          <a href="#">Java</a>
                          </li>
                          <li>
                          <a href="#">Html</a>
                          </li>
                          <li className="payment-btn">
                            <a className="payment-button" href="#">
                              <i class="fas fa-check"></i>
                              <span>Payment verification</span>
                            </a>
                          </li>
                          
                        </ul>
                    </div>
                    </div>
                    {/*--------- row1 ---------------*/}

                    <div className="required-skills">
                        <h3>Skills Required</h3>
                        <ul className="tags">
                        <li>
                          <a href="#">PHP</a>
                          </li>
                          <li>
                          <a href="#">Website design</a>
                          </li>
                          <li>
                          <a href="#">Wordpress</a>
                          </li>
                          <li>
                          <a href="#">Java</a>
                          </li>
                          <li>
                          <a href="#">UIUX</a>
                          </li>
                          <li>
                          <a href="#">Branding</a>
                          </li>
                          <li>
                          <a href="#">Logo</a>
                          </li>
                          
                        </ul>
                        
                        <div className="information">
                            <div className="bid-info">
                                <h3>Bid Information</h3>
                                <ul className="bid-inner">
                                    <li>
                                    <label className="bid-title">Bid Left</label>
                                    <span className="bid-detail">8/8</span>
                                    </li>
                                    <li>
                                    <label className="bid-title">Unit next bid</label>
                                    <span className="bid-detail">-</span>
                                    </li>
                                    <li>
                                    <label className="bid-title">Refresh speed</label>
                                    <span className="bid-detail">1x</span>
                                    </li>
                                    <li>
                                    <label className="bid-title">Average bid</label>
                                    <span className="bid-detail">2500 SAR</span>
                                    </li>
                                </ul>
                                <div >
                                    
                                    
                                </div>
                                
                            </div>
                            <div className="client-info">
                                <h3>Client Information</h3>
                                <div className="client-details">
                                    <ul>
                                        <li>
                                            <h4><i class="fa fa-map-marker" aria-hidden="true"></i>Brazil </h4>
                                            <p>Rio De Janerio 09:18 pm</p>
                                        </li>
                                        <li>
                                            <h4><i class="fa fa-briefcase"></i>5 Job Posted </h4>
                                            <p>75% Hiring Rate</p>
                                        </li>
                                        <li>
                                            <h4><i class="fas fa-wallet"></i>1800 SAR spent </h4>
                                            <p> 20 Hires, 6 Active</p>
                                        </li>
                                        <li>
                                            <h4><i class="fa fa-calendar"></i>Member since Nov 19, 2020 </h4>
                                            <p> </p>
                                        </li>
                                    </ul>
                                </div>

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
