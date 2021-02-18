import React from "react";
import "./detailpreview.css";
import preview1 from "../../../assets/preview1.png";
import preview2 from "../../../assets/preview2.png";
import preview3 from "../../../assets/preview3.png";
const DetailsPreview = () => {
  return (
    <div className="detail-preview pb-5">
      <div className="container bg-white">
        <div className="row">
          <div className="col-md-12 pt-4 pb-5">
            <p className="preview-heading">Preview</p>
          </div>
        </div>
        <div className="row">
          <div className="image-wrap col-md-4">
            <img src={preview1} alt="/" />
          </div>
          <div className=" image-wrap col-md-4">
            <img src={preview2} alt="/" />
          </div>
          <div className=" image-wrap col-md-4">
            <img src={preview3} alt="/" />
          </div>
        </div>

        <address>
          <div className="tst">
            <div className="container">
              <div className="contact-info row pt-3">
                <div className="col-md-3 pl-4">
                  <p>Description</p>
                </div>
                <div className="col-md-9">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                </div>
              </div>
              <div className="contact-info row">
                <div className="col-md-3 pl-4">
                  <p>Role</p>
                </div>
                <div className="col-md-9">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="contact-info row">
                <div className="col-md-3 pl-4">
                  <p>Start Date</p>
                </div>
                <div className="col-md-9">
                  <a href="24-12-2019">24-12-2019 </a>
                </div>
              </div>
              <div className="contact-info row">
                <div className="col-md-3 pl-4">
                  <p>Completion Date</p>
                </div>
                <div className="col-md-9">
                  <a href="30-06-2020">30-06-2020</a>
                </div>
              </div>
            </div>
          </div>
        </address>
        <div className="row pl-4">
          <div className="col-md-3">
          <p>Work Platform</p>

          </div> 
          <div className="col-md-9">

          </div>
          <div className="col-md-3">
          <p>Deliverable In</p>

          </div> 
          <div className="col-md-9">

          </div>
          <div className="col-md-3">
          <p>Skills</p>

          </div> 
          <div className="col-md-9">

          </div>
          <div className="col-md-3">
          <p>Business Size</p>

          </div> 
          <div className="col-md-9">

          </div>

        </div>
        <div className="row pt-5 pl-3 pb-5">
          <div className="col-md-6">
            <a href="/portfoliodetails"> Previous</a>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-primary pull-right">
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPreview;
