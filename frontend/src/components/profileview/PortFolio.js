import React from 'react'
import './PortFolio.css'
import Button from "../Button";
import Commercial from '../../assets/Commercial.png'
import Ecomerce from '../../assets/Ecomerce.png'
import Medical from '../../assets/Medical.png'
export function PortFolio(props) {
    

    return (
        <div className="Portfol">
            <div className="comp3">
            <h> Portfolio </h> 
            <Button buttonStyle="btn--ADD" value="+ADD" />
         
            </div>
            <div className="Pic-tag">
            <div>
                <img src={Commercial} alt="/"/>
                <br/>
                <br/>
                <p> Ecomerce Project </p>
                <h6>8 Artworks</h6>
            </div>
            <div>
                <img src={Ecomerce} alt="/"/>
                <br/>
                <br/>
                <p> Ecomerce Project </p>
                <h6>8 Artworks</h6>
            </div>
            <div>
                <img src={ Medical } alt="/"/>
                <br/>
                <br/>
                <p> Ecomerce Project </p>
                <h6>8 Artworks</h6>
            </div>
            </div>
        </div>
    )
}
export default PortFolio