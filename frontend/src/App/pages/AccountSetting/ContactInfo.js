import React, { Component } from 'react'
import  "./ContactInfo.css"
import  "./ProfileSetting.css"
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Close';
import Dropdown from "../../../components/Dropdown";


// export function ContactInfo(props) {
    
//         const [show, setShow] = useState(false);
//         const handleClose = () => setShow(false);
//         const handleSave = () => setShow(false);
//         const handleShow = () => setShow(true);
export default class ContactInfo extends Component {

  constructor(props){
      super(props);
      
      this.state = {
      show: false,
      }

      this.dropDownHandler = this.dropDownHandler.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleShow = this.handleShow.bind(this);

      
  }

  dropDownHandler (provideService2)
     {
        this.setState({provideService:provideService2})
      }

      handleClose (event){
        this.setState({show:false})
      }

      handleSave (event){
        this.setState({show:false})
      }

      handleShow (event){
        this.setState({show:true})
      }


render() {
        return (
            <div className="contact-information">
                <div className="ci-heading">
                    Account
                    <span>
                        <button onClick={this.handleShow}>Edit</button>
                    </span>
                </div>

                <Modal show={this.state.show}>
          <div className="container">
            <form>
              <div className="row pt-4 pb-3">
              <div className="form-header col-md-6 ">
                <p>Edit Account Details</p>
                </div>
                <div className="col-md-6">
                <CloseIcon onClick={this.handleClose} className="float-right" />
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
                  <a href="#"  onClick={this.handleClose}>
                    Cancel
                  </a>
                  </div>
                  <div className="col-md-6 pb-5 pt-3">
                  <button type="button pull-right" className="form-btn btn btn-warning" onClick={this.handleSave}>
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

}

