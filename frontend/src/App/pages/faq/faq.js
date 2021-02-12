import React from 'react'
import Navbar from './Navbar';
import DefaultMenu from './DefaultMenu';
//import Proposal from './Proposal';
import AvatarImage from '../../../../src/AvatarImage.png';
// import img from "../../../img/stars1.png"
import  "./faq.css";

export default function faq() {
    return (
        <div className="faq">
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
                    <div className="row pt-4 pb-4">
                        <div className="col-md-12 align-self-center bg-white pb-4">
                            <div class="pg-heading pt-5 pb-4 pl-3"><h3 class="font-weight-bold text-uppercase">Faq's</h3></div>


                            <div class="accordion" id="accordionExample">
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingOne">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark" data-toggle="collapse" data-target="#collapseOne"><i class="fa fa-plus"></i> What is HTML?</button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>HTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages. <a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank">Learn more.</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark collapsed" data-toggle="collapse" data-target="#collapseTwo"><i class="fa fa-plus"></i> What is Bootstrap?</button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions. <a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank">Learn more.</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingThree">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark collapsed" data-toggle="collapse" data-target="#collapseThree"><i class="fa fa-plus"></i> What is CSS?</button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>{/*-------*/}

                </div>
            </div>
        </div>
    </div>

       
    )
}
