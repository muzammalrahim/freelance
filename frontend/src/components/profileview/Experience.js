import React, { useState } from "react";
import "./Experience.css";
import Button from "../Button";
import Modal from "react-bootstrap/Modal";
function Experience() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Experr">
      <div class="container">
        <div class="row pt-4 pb-3 pl-3 bg-white pb-4">
          <div class="col-md-6">
              <h>Experience </h>
          </div>
          <div class="col-md-6 pr-4">
            <button
              type="button"
              class="btn btn-primary btn-sm pull-right"
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
                <p>Add Work Experience</p>
                </div>
                <div class="col-md-6">
                <i class="fas fa-times pull-right" onClick={handleClose}></i>
                </div>
              </div>

              {/* <div class="form-header pt-4 pb-3">
                <p>Add Work Experience</p>
                <i class="fas fa-times" onClick={handleClose}></i>
              </div> */}
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputtext">Company</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputtext"
                    placeholder="Enter Company"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputtext">Your Role</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputtext"
                    placeholder="Enter Role"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputState">Location</label>
                  <select id="inputState" class="form-control">
                    <option selected>City</option>
                    <option>Doha</option>
                    <option>Manila</option>
                    <option>Doha</option>
                    <option>Manila</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputState">Country</label>
                  <select id="inputState" class="form-control">
                    <option selected>Select</option>
                    <option>Pakistan</option>
                    <option>Dubai</option>
                    <option>Qatar</option>
                    <option>Iran</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputState">Period</label>
                  <select id="inputState" class="form-control">
                    <option selected>Month</option>
                    <option>january</option>
                    <option>february</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>
                <div class="form-group col-md-6 pt-4">
                  <select id="inputState" class="form-control">
                    <option selected>Year</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputState">Through</label>
                  <select id="inputState" class="form-control">
                    <option selected>Month</option>
                    <option>january</option>
                    <option>february</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>
                <div class="form-group col-md-6 pt-4">
                  <select id="inputState" class="form-control">
                    <option selected>Year</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <label>
                    <input type="checkbox" value="" /> Currently work here
                  </label>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 pt-4">
                  <div class="form-group">
                    <label for="description"> Description</label>
                    <textarea
                      class="form-control"
                      id="description"
                      placeholder="Text"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 pb-5 pt-4">
                  <a href="#" class="pull-right" onClick={handleClose}>
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

      </div>
      <div class="container">
        <div class="row bg-white pl-3">
              <div class="col-md-8 pb-1">
                <h>Wordpress developer | Company pvt ltd</h>
              </div>
              <div class="col-md-4 pr-4">
              <a href="#">
                  <i class="fas fa-trash pull-right"></i>
                </a>
              </div>
              <div class="col-md-7 pb-2">
                <h>20 Aug 2018 to 14 feb 2020</h>
              </div>
              <div class="col-md-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
                <br />
                has been the industry's standard .
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Experience;
