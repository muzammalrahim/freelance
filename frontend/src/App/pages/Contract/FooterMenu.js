import React, { Component } from 'react'
import './footermenu.css'

export default class FooterMenu extends Component {
    render() {
        return (
            <div className="footer-nav d-flex justify-content-center">
                <nav class="navbar">

                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Date<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Description</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Amount</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Invoice</a>
                    </li>
                    </ul>
                
                </nav>
            </div>
        )
    }
}
