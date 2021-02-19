import React from "react";
import "./ProfileView.css";
import Navbar from "../Navbar";
import Menuebar from "./Menuebar";
import BioGraphy from "./BIoGraphy";
import PortFolio from "./PortFolio";
import Reviews from "./Reviews";
import Experience from "./Experience";
import Education from "./Education";

function Profileview() {
  return (
    <>
      <div className="main-profile-page">
        <div className="post">
          <Navbar value="Post a Project" className="btn-project" />
        </div>
        <div className="design">
          <Menuebar />
        </div>
        <div className="p1">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
             
              </div>
              <div className="col-md-9">
                <div className="personal-prfile-main">
                  <BioGraphy />
                  <PortFolio />
                  <Reviews />
               
                  <Experience />
                  <Education />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profileview;
