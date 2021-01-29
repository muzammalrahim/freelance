import React, { Component } from 'react'
import './slider.css';

export default class Slider extends Component {
   
   
    render() {
        
        return (
            <div>
                
                <form class="container pb-4 range-slider">
                <input type="range"></input>
                <div class="number"></div>    
                </form>


            </div>
        )
    }
}
