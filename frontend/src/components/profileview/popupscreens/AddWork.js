import React from 'react'
import './addwork.css'
import Button from '../../Button'
import {InputField5} from '../../../../src/components/InputField'
const AddWork = (props) => {
    return (props.trigger) ? (
        
           <div className="work-conatiner body">
               <div className="header"> 
                    <p>Add Work Experience</p>
                 <i class="fas fa-times pull-right"  onClick={() => props.setTrigger(false)}></i>
                 </div>
                 {/* <div className="fields">
                        <InputField5 heading="Company" Placeholder=" Enter Company"/> 
                        <InputField5 heading="Your Role" Placeholder=" Enter Role"/>
                 </div>

                    
                 <div className="footer">
                 <Button buttonStyle="btn--cancel" value="Cancel"  onClick={() => props.setTrigger(false)} />
                 <Button buttonStyle="btn--ADD" value="save"/>
                 </div> */}
      <div class="container">
                                 <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Company</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Company"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Your Role</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Enter Role"/>
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
      <label for="inputState">Conutry</label>
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
        <option>...</option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-6">
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
    <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>Year</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
      </select>
    </div>
  </div>
</form>

                      

            {props.children}
        </div>
        </div> 
    ): "";
    
}

export default AddWork

