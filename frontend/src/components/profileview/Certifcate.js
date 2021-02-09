import React from "react";
import "./CERTIFICATE.css";
import Button from "../Button";
import certificate from "../../assets/certificate.png";
import certificate2 from "../../assets/certificate2.png";
export function Certificate(props) {
  return (
    <div className="Certifies">
      <div className="comp3">
        <h> Certificates </h>
        <Button buttonStyle="btn--ADD" value="+ADD" />
      </div>
      <div className="cerificates-div">
        <div>
          <img src={certificate} alt="" />
          <p> UX Designer Certificate </p>
          <h> .PNG </h>
        </div>
        <div>
          <img src={certificate2} alt="" />
          <p> Developer Certificate </p>
          <h> .JPEG </h>
        </div>
      </div>
    </div>
  );
}
export default Certificate;
