import React from "react";
import "./Education.css";
import Button from "../Button";
export function Education(props) {
  return (
    <div className="EDUC">
   <div className="profile-inner">
        <h> Education </h>
        <Button buttonStyle="btn--ADD" value="+ADD" />
      </div>

      <div>
        <div className="delete-button">
          <h>Engineering in science | Oxford Universal College</h>

          <a href="">
          
            <i class="fas fa-trash"></i>
          </a>
        </div>
        <div className="dlt-icon">
          <h>20 Aug 2018 to 14 feb 2020</h>
        </div>
        <div className="delete-button">
          <h>Engineering in science | Oxford Universal College</h>

          <a href="">
        
            <i class="fas fa-trash"></i>
          </a>
        </div>
        <div className="dlt-icon">
          <h>20 Aug 2018 to 14 feb 2020</h>
        </div>
      </div>
    </div>
  );
}
export default Education;
