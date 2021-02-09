import React from "react";
import "./BioGraphy.css";
import Button from "../Button";
function BioGraphy() {
  return (
    <div className="ui-comments">
      <div className="comment">
        <div className="btn-edit">
          <h>Personal Profile</h>
          <Button buttonStyle="btn--ADD" value="EDIT" />
        </div>
        <address className="paRagraph">
          <div className="tst">
            {/* <div className="bio-text">
              <p>BIO </p>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div> */}
            <div className="contac-main">

             <div className="contact-info row">

              <div className="col-md-3">
              <p>BIO</p>
              </div>
              <div className="col-md-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
               make a type specimen book.
              </div>
              </div>


            <div className="contact-info row">

              <div className="col-md-3">
              <p>Email</p>
              </div>
              <div className="col-md-9"><a href="jack14@gmail.com ">jack14@gmail.com </a></div>
            </div>
            <div className="contact-info row">
              <div className="col-md-3">
              <p>Mobile Number</p>
              </div>
              <div className="col-md-9"><a href="97787879879767 ">97787879879767</a></div>
            </div>
            <div className="contact-info row">
              <div className="col-md-3">
              <p>Address</p>
              </div>
              <div className="col-md-9"><a href="jack14@gmail.com ">Lorem Ipsum is simply dummy text of the printing.</a></div>
            </div>
            </div>
          </div>
        </address>

        <div>
          <div>
            <p> Skills</p>
          </div>
          <ul className="lanuage-tag">
            <li>
              <a href="#">PHP</a>
            </li>
            <li>
              <a href="#">Website design</a>
            </li>
            <li>
              <a href="#">Wordpress</a>
            </li>
            <li>
              <a href="#">Java</a>
            </li>
            <li>
              <a href="#"> UIUX</a>
            </li>
            <li>
              <a href="#"> Branding</a>
            </li>
            <li>
              <a href="#"> Logo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default BioGraphy;
