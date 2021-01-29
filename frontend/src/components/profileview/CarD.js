import React from 'react'
import "./CarD.css"
import Status from '../../assets/Status.png'
import LINEE from '../../assets/LINEE.png'
import india from '../../assets/india.png'
import Sar from '../../assets/Sar.png'
import Recomend from '../../assets/Recomend.png'
import time from '../../assets/time.png'
import Display from '../../assets/Display.png'
export function Card(props) {
    

    return (
        <div className="CarD">
            <img src={Status}/>
            <p>Pixelz Warrios</p>
            <h>
            UI/UX Designer
            </h>
             <h1>Completed Profile</h1>
             <h2> <span> 3/5 </span>Followups</h2>
             <div className="LINN">
             <img src={LINEE} alt="/"/>
             </div>
            
   <div className="Details">
   <p>Details</p>
   </div>

<div className="Details-subtext">
<img src={Sar} alt=" "/>
     <p>SAR 100 Per/Hour </p>
<img src={india} alt=" "/>
     <p>Indore </p>
<img src={time} alt=" "/>
      <p> It’s Currently 3:43 Pm here</p>
<img src={Display} alt=" "/>
      <p> Join Decemeber 10, 2015</p>
<img src={Recomend} alt=" "/>
      <p> 10 Recommendation</p>
</div>
</div>
    )
}
export default Card;
