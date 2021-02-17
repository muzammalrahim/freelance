import React from "react";
import "./card.css";
import Status from "../../assets/Status.png";
import india from "../../assets/india.png";
import Display from "../../assets/Display.png";

function Card() {
  return (
    <div className="CarD ">
      <div class="container">
        <div class="row bg-white">
         <div class="col-md-12">

        
      
      <div class="profile pt-3">
        <img src={Status} class="pb-2"/>
        <p>Pixelz Warrios</p>
        <h6>UI/UX Designer</h6>
      </div>

      <div className="complete-profile">
        <h5>Completed Profile</h5>
        <span> 3/5 </span>Followups
      </div>
      <div className="Details-subtext">
        <h4>Details</h4>
        <ul className="details-info">
          <li>
            <p>
              <i className="fas fa-tags"></i>
              SAR 100 Per/Hour{" "}
            </p>
          </li>
          <li>
            <p>
              <img src={india} className="img_setting" alt=" " />
              Indore{" "}
            </p>
          </li>
          <li>
            <p>
              {" "}
              <i class="fas fa-clock"> </i>
              It’s Currently 3:43 Pm here
            </p>
          </li>
        </ul>

        <li>
          <p className="details-info2">
            {" "}
            <img src={Display} className="img_setting" alt=" " />
            Join Decemeber 10, 2015
          </p>
        </li>

        <li>
          <p>
            <i className="img_setting fas fa-heart "> </i>
            10 Recommendation
          </p>
        </li>
      </div>
      </div>
      </div>
      </div>
      </div>
  );
}
export default Card;
