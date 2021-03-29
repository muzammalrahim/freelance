import React, { useState,useEffect } from 'react'
import  "./ContactInfo.css"
import  "./ProfileSetting.css"
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Close';
import list from '../helper/api';
import { useHistory, useParams } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";


export default function ContactInfo(props) {
  
  const [data, setData] = useState('');
  const [id, setId] = useState(null);
  const [user, setUser] = useState({
    first_name  : "" ,
    street :  "",
    mobile_no : ''
  });

  const getData = () =>{
    list('api/v1/accounts/profile/')
    .then((response)=>{
      console.log("show response data:",response.data);
      const data = response.data;
      // var  getid = JSON.parse(response.data.id);
      // setId(getid)
      setData(data);
            })
  }
   const getUser = () => {
  
    list("api/v1/accounts/profile/id/")
   .then((response) => {
      console.log("janter" ,response.data);
      const data= response.data;
      setUser(data);
    })
   }


  useEffect(() => {
    getData();

    getUser();
  
  }, [])

    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleSave = () => setShow(false);
        const handleShow = () => setShow(true);

// export default class ContactInfo extends Component {

//   constructor(props){
//       super(props);
      
//       this.state = {
//       show: false,
//        user : ''
//       }


//       this.dropDownHandler = this.dropDownHandler.bind(this);
//       this.handleClose = this.handleClose.bind(this);
//       this.handleSave = this.handleSave.bind(this);
//       this.handleShow = this.handleShow.bind(this);

      
//   }

  // dropDownHandler (provideService2)
  //    {
  //       this.setState({provideService:provideService2})
  //     }

  //     handleClose (event){
  //       this.setState({show:false})
  //     }

  //     handleSave (event){
  //       this.setState({show:false})
  //     }

  //     handleShow (event){
  //       this.setState({show:true})
  //     }

//       componentDidMount() {
//         list('/api/v1/profile/')
//         .then((res)=> {
//           console.log("response" ,res)
//           this.setState({...user});
//         })
//       }


// render() {
        return (
            <div className="contact-information">
              {console.log("id",id)}
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
                        <p>User ID<span>{data.username}</span></p>
                        <p>Name<span> {data.first_name} {data.last_name}</span></p>
                        <p>Email<span>{data.email}</span></p>
                    </div>

                    <div className="ci-heading">
                    Location
                    <span>
                        <button>Edit</button>
                    </span>
                </div>
                
                    <div className="ci-account col-md-12">
                        <p>Address<span>{user.street}</span></p>
                        <p>Phone<span>{user.mobile_no}</span></p>
                    </div>
                            <div className="my-profile-links col-md-12">
                                  <a href="">discard changes</a>
                                  <button>save changes</button>
                            </div>
                    
            </div>
        )
}




