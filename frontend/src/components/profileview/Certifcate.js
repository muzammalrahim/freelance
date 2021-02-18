import React, { useState } from "react";
import "./certificate.css";
import certificate from "../../assets/certificate.png";
import certificate2 from "../../assets/certificate2.png";
import Modal from "react-bootstrap/Modal";
import GetImage from "../../App/pages/registration/GetImage";
export function Certificate(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Certifies">
      <div class="container bg-white">
        <div class="row pt-4 pb-3 pl-3">
          <div class="col-md-6">
              <h>Certificates </h>
          </div>
          <div class="col-md-6 pr-4">
            <button
              type="button"
              class="btn btn-primary btn-sm float-right"
              onClick={handleShow}
            >
              +ADD
            </button>
          </div>
        </div>

        <Modal show={show}>
          <div class="container">
            <form>
              <div class="row pt-4 pb-3">
              <div class="form-header col-md-6 ">
                <p>Add Certificate</p>
                </div>
                <div class="col-md-6">
                <i class="fas fa-times float-right" onClick={handleClose}></i>
                </div>
              </div>
              
              
              
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputtext">Certificate Title</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputtext"
                    placeholder="Title"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputtext">Publisher</label>
                  <select id="inputState" class="form-control">
                    <option selected>Select</option>
                    <option>......</option>
                    <option>......</option>
                    <option>......</option>
                    <option>......</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p className="">Upload Images</p>
                  <GetImage />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 pb-5 pt-4">
                  <a href="#" class="float-right" onClick={handleClose}>
                    Cancel
                  </a>
                  </div>
                  <div class="col-md-6 pb-5 pt-3">
                  <button type="button" class="form-btn btn btn-warning">
                    Save
                  </button>
                  </div>
              </div>
            </form>
          </div>
        </Modal>

        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="img-wraper pt-3 pb-3">
                <img src={certificate} alt="/" />
              </div>
              <div class="img-des pb-3">
                <p> Ecomerce Project </p>
                <h>8 Artworks</h>
              </div>
            </div>
            <div class="col-md-9">
              <div class="img-wraper pt-3 pb-3">
                <img src={certificate2} alt="/" />
              </div>
              <div class="img-des pb-3">
                <p> Ecomerce Project </p>
                <h>8 Artworks</h>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certificate;
