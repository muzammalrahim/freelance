import React, { useState } from "react";
import "./Education.css";
import Modal from "react-bootstrap/Modal";
export function Education(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="EDUC">
      <div className="container bg-white">
        <div className="row pt-4 pb-3 pl-3 pb-5">
          <div className="col-md-6">
            
              <h> Education </h>

          </div>
          <div className="col-md-6 pr-4">
            <button
              type="button"
              className="btn btn-primary btn-sm pull-right"
              onClick={handleShow}
            >
              +ADD
            </button>
          </div>
        </div>

        <Modal show={show}>
          <div className="container">
            <form>

            <div className="row pt-4 pb-3">
              <div className="form-header col-md-6 ">
                <p>Add Education Information</p>
                </div>
                <div className="col-md-6">
                <i className="fas fa-times pull-right" onClick={handleClose}></i>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputState">Country</label>
                  <select id="inputState" className="form-control">
                    <option selected>Select Country</option>
                    <option>Doha</option>
                    <option>Manila</option>
                    <option>Doha</option>
                    <option>Manila</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputtext">University</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Enter university"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputState">Period</label>
                  <select id="inputState" className="form-control">
                    <option selected>Year from</option>
                    <option>january</option>
                    <option>february</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>
                <div className="form-group col-md-6 pt-4">
                  <select id="inputState" className="form-control">
                    <option selected>Year to</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputState">Degree</label>
                  <select id="inputState" className="form-control">
                    <option selected>e.g. Engineering</option>
                    <option>january</option>
                    <option>february</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 pb-5 pt-4">
                  <a href="#" className="pull-right" onClick={handleClose}>
                    Cancel
                  </a>
                  </div>
                  <div className="col-md-6 pb-5 pt-3">
                  <button type="button" className="form-btn btn btn-warning">
                    Save
                  </button>
                  </div>
              </div>
            </form>
          </div>
        </Modal>

        <div>
          <div className="container">
            <div className="row pb-3">
            <div className="col-md-9">
                  <h>Engineering in science | Oxford Universal College</h>
                  </div>
                  <div className="col-md-3">
                  <a href="">
                    <i className="fas fa-trash pull-right"></i>
                  </a>
                  </div>

                  <div className="col-md-8">
                <h>20 Aug 2018 to 14 feb 2020</h>
              </div>

            </div>
            <div className="row pb-3">
              <div className="col-md-9">
              
                  <h>Engineering in science | Oxford Universal College</h>
                  </div>
                  <div className="col-md-3">
                  <a href="">
                    <i className="fas fa-trash pull-right"></i>
                  </a>
                  </div>
                  <div className="col-md-8">
                  <h>20 Aug 2018 to 14 feb 2020</h>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;
