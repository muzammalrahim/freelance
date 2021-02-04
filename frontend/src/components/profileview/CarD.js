import React from "react";
import "./card.css";
import Status from "../../assets/Status.png";
import LINEE from "../../assets/LINEE.png";
import india from "../../assets/india.png";
import Sar from "../../assets/Sar.png";
import Recomend from "../../assets/Recomend.png";
import time from "../../assets/time.png";
import Display from "../../assets/Display.png";


function Card() {
  return (
    <div className="CarD ">
          <div className="profile">
      <img src={Status} />
      <p>Pixelz Warrios</p>
      <h>UI/UX Designer</h>
      </div>

    <div className="complete-profile">
    <h5>Completed Profile</h5>
      <span> 3/5 </span>Followups
    </div>
    <div className="Details-subtext">
        <h4>Details</h4>
        <ul className="details-info">
            <li>
            <p><i class="fas fa-tags"></i>
                    SAR 100 Per/Hour </p>
            </li>
            <li>
                  <p><img src={india} alt=" " />
                  Indore </p>
            </li>
            <li>
                 
            <p> <i class="fas fa-clock">  </i>
                   It’s Currently 3:43 Pm here</p>
            </li>
        </ul>
        
     
       <li>
      
      <p className="details-info2" >  <img src={Display} alt=" " />
       Join Decemeber 10, 2015</p>
     
      </li>
      
      <li>
      <p>
      <i class="fas fa-heart "> </i>
       10 Recommendation</p>
      </li>
   
      </div>
    </div>
  );
}
export default Card;
