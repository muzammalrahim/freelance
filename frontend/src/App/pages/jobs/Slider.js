import React, { Component } from 'react'

export default class Slider extends Component {
   
   
    render() {
        
        return (
            <div>
                
                <form class="container pb-4 range-slider">
                <input type="range" min="0" max="100"></input>
                <div class="number"></div>    
                </form>


            </div>
        )
    }
}
