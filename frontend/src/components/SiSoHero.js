import React from 'react'
import './SiSoHero.css';
import Signbg from '../assets/Signbg.png'
function SiSoHero() {
    return (
        <div className='banner' style={{backgroundImage: `url(${Signbg})`}}>
            <button class="btnback"><i class="fas fa-long-arrow-alt-left"></i> Back</button>
        </div>
    )
}

export default SiSoHero

