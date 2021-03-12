import React, { useState } from 'react'
import  "./ContactInfo.css"
import  "./ProfileSetting.css"
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Close';

export function ContactInfo(props) {
    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleSave = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div className="contact-information">
                <div className="ci-heading">
                    Account
                    <span>
                        <button onClick={handleShow}>Edit</button>
                    </span>
                </div>

                <Modal show={show}>
          <div className="container">
            <form>
              <div className="row pt-4 pb-3">
              <div className="form-header col-md-6 ">
                <p>Edit Account Details</p>
                </div>
                <div className="col-md-6">
                <CloseIcon onClick={handleClose} className="float-right" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputtext">Username</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputtext">Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputtext">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 pb-5 pt-4 pull-left">
                  <a href="#"  onClick={handleClose}>
                    Cancel
                  </a>
                  </div>
                  <div className="col-md-6 pb-5 pt-3">
                  <button type="button pull-right" className="form-btn btn btn-warning" onClick={handleSave}>
                    Save Changes
                  </button>
                  </div>
              </div>
            </form>
          </div>
        </Modal>
                
                    <div className="ci-account col-md-12">
                        <p>User ID<span>Pixelz-Warrios14</span></p>
                        <p>Name<span> Pixelz-Warrios</span></p>
                        <p>Email<span> PixelzWarrios14@gmail.com</span></p>
                    </div>

                    <div className="ci-heading">
                    Location
                    <span>
                        <button>Edit</button>
                    </span>
                </div>
                
                    <div className="ci-account col-md-12">
                        <p>Address<span>Pixelz-Warrios14</span></p>
                        <p>Phone<span> Pixelz-Warrios</span></p>
                    </div>
                            <div className="my-profile-links col-md-12">
                                  <a href="">discard changes</a>
                                  <button>save changes</button>
                            </div>
                    
            </div>
        )
    
}

export default ContactInfo;
