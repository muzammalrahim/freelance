import React from "react";
import "./certificate.css";
import Button from "../Button";
import certificate from "../../assets/certificate.png";
import certificate2 from "../../assets/certificate2.png";
export function Certificate(props) {
  return (
    <div className="Certifies">
       <div className="profile-inner">
        <h> Certificates </h>
        <Button buttonStyle="btn--ADD" value="+ADD" />
      </div>
      <div className="row Pic-tag">
        <div className="col-md-4 col-sm-4">
          <div>
            <div className="img-wraper">
              <img src={certificate} alt="/" />
            </div>
            <div className="img-des">
              <p> Ecomerce Project </p>
              <h>8 Artworks</h>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 ">
          <div>
            <div className="img-wraper">
              <img src={certificate2} alt="/" />
            </div>
            <div className="img-des">
              <p> Ecomerce Project </p>
              <h>8 Artworks</h>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certificate;
