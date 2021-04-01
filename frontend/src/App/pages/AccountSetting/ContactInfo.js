import React, { useState,useEffect } from 'react'
import "./ContactInfo.css"
import "./ProfileSetting.css"
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Close';
import list from '../helper/api';
import {put, patch} from '../helper/api';
import { useHistory , useParams } from 'react-router-dom';

export default function ContactInfo(props) {
const [data, setData] = useState('');
const [save, setSave] = useState('');
const [id, setId] = useState();
const [user, setUser] = useState({
first_name : "" ,
street : "",
mobile_no : '',
email: '',
username:'',
avatar:''

});
// setUser({ avatar: "http://127.0.0.1:8000/media/1-01_H7pzMtG.png" });
let history = useHistory();

const getData = () =>{
let getid = null
list('api/v1/accounts/profile/')
.then((response)=>{
const data = response.data;
getid = response.data.id
setData(data);
setId(getid)
})
}

const getUser = () => {
list(`api/v1/freelancer_profile/${24}/`)
.then((response) => {
const data= response.data;
var id = JSON.parse(response.data.id);
console.log("freelancerd id:",id);
setUser(data);
})
}

const onInputChange = e =>
{
setData({...data ,
[e.target.name]: e.target.value
})
}

const handleSave = (e) => {
e.preventDefault();
setShow(false)
patch("api/v1/accounts/profile/",data)
.then((response) => {
const data= response.data;
var id = JSON.parse(response.data.id);
history.push(`/account-setting`);
})
setSave(data)
}


useEffect(() => {
getData();
getUser();
}, [])

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

const handleShow = () => setShow(true);

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
<div className="form-group col-md-12">
<label for="inputtext">Username</label>
<input
type="email"
className="form-control"
id="inputtext"
value={data.username}
name="username"
onChange={e => onInputChange(e)}
// placeholder="Username"
/>
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">First Name</label>
<input
type="email"
className="form-control"
id="inputtext"
name="first_name"
value={data.first_name}
onChange={e => onInputChange(e)}
/>
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">Last Name</label>
<input
type="email"
className="form-control"
id="inputtext"
name="last_name"
value={data.last_name}
onChange={e => onInputChange(e)}
/>
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">Email</label>
<input
type="email"
className="form-control"
id="inputtext"
name="email"
value={data.email}
onChange={e => onInputChange(e)}
placeholder="Email"
/>
</div>
</div>

<div className="form-row">
<div className="col-md-6 pb-5 pt-4 pull-left">
<a href="#" onClick={handleClose}>
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
<p>Name<span> {data.first_name} { data.last_name}</span></p>
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
<div className="col-md-12">
    {user.avatar}
    
</div>
<div className="my-profile-links col-md-12">
<a href="">discard changes</a>
<button>save changes</button>
</div>

</div>
)
}