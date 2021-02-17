import React from "react";
import './addportfolio.css'
import Navbar from "../Navbar";
import Menuebar from "./Menuebar";
import { Link } from  'react-router-dom';
const AddPortfolio = () => {
  return (
    <div className="add-portfolio">
      <div className="post">
        <Navbar value="Post a Project" className="btn-project" />
      </div>
      <div className="design">
        <Menuebar />
      </div>
      <div className="addportfolio-box pb-5">

      
      <div className="container">
        <div className="row bg-white">
          <div className="col-md-3">

          </div>

          <div className="col-md-9">
            <form action="required">
              <h5 className="pt-4">Add project</h5>
              <div className="row pt-3">
                <div className="form-group col-md-6 ">
                  <label for="inputtext">Project Title</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Enter title brief"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputtext">Specialized In</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Developing"
                  />
                </div>
              </div>
              <div className="row pt-3">
                <div className="form-group col-md-6">
                  <label for="inputtext">Start Date</label>
                  <input
                    type="digit"
                    className="form-control"
                    id="inputnumber"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputtext">Completion date</label>
                  <input
                    type="digit"
                    className="form-control"
                    id="inputnumber"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>
              <div className="row pt-5 pb-3">
                  <div className="col-md-6">
                      <a href="/profileview"> Cancel</a>
                  </div>
                  <div className="col-md-6">
                    <Link to="/PortfolioDetails">
                   
                  <button type="button" className="btn btn-primary pull-right" >Next Step</button>
                  </Link>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddPortfolio;
