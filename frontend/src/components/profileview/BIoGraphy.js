import React from "react";
import "./BioGraphy.css";
import Button from '../Button'
function BioGraphy() {
  return (
    <div className="ui-comments">
      <div className="comment">
      <div className="btn-edit">
        <Button buttonStyle="btn--ADD" value="EDIT" />
       <p>Personal Profile</p>
     </div>
        <div className="paRagraph">
        <h>BIO </h>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h> Email   </h>
        <p>jack14@gmail.com </p>
        <h>Mobile Number</h>
        <p>97787879879767</p>
        <h> Address</h>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
   
        </div>
    </div>
  );
}
export default BioGraphy;
