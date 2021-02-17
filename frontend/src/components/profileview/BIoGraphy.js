import React from "react";
import "./BioGraphy.css";
function BioGraphy() {
  return (
    <div className="ui-comments">
      <div class="container bg-white">
        <div class="row pt-4 pb-3">
          <div className="btn-edit col-md-6 pl-4">
            <h>Personal Profile</h>
          </div>
          <div class="col-md-6 pr-4">
            <button type="button" class="btn btn-primary btn-sm pull-right">
              EDIT
            </button>
          </div>
          <address>
            <div className="tst">
              <div className="container">
                <div className="contact-info row pt-3">
                  <div className="col-md-3 pl-4">
                    <p>BIO</p>
                  </div>
                  <div className="col-md-9">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                    </p>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Email</p>
                  </div>
                  <div className="col-md-9">
                    <a href="jack14@gmail.com ">jack14@gmail.com </a>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Mobile Number</p>
                  </div>
                  <div className="col-md-9">
                    <a href="97787879879767 ">97787879879767</a>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Address</p>
                  </div>
                  <div className="col-md-9">
                    <a href="jack14@gmail.com ">
                      Lorem Ipsum is simply dummy text of the printing.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </address>
          <div class="container">
            <div class="row">
              <div class="col-md-12 pl-4">
              <p> Skills</p>
              </div>
           
            </div>
            
              <div class="container">
                <div class="row">
                  <div class="col-md-1">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#">PHP</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#">Website design</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-2">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#">Wordpress</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-1">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#">Java</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-1">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#">UIUX</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-2">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#">Branding</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-2">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#">Logo</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BioGraphy;
