import React, { Component } from 'react'
import './footermenu.css'

export default class FooterMenu extends Component {
    render() {
        return (
            <div className="footer-nav">
                <nav class="navbar">

                    <div class=" row footer-navbar">
                        <div class=" col-md-2">
                            <a class="" href="#">Date</a>
                        </div>
                        <div class=" col-md-4 text-center">
                            <a class="" href="#">Description</a>
                        </div>
                        <div class=" col-md-4 text-center">
                            <a class="" href="#">Amount</a>
                        </div>
                        <div class=" col-md-2">
                            <a class="float-right" href="#">Invoice</a>
                        </div>
                    </div>
                
                </nav>
            </div>
        )
    }
}
