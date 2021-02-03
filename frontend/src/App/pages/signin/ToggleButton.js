import React, { Component } from "react";
import "./ToogleButton.css";
import $ from 'jquery';
import InputField from '../../../components/InputField'

class App extends Component {

 componentDidMount() {
$(document).ready(function () {
  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    $("#show_hide_password i").toggleClass('fa-eye fa-eye-slash');
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
    }
  });
});
  }
render() {
  return(
 
          <div  id="show_hide_password">
            <InputField 
             
                  type="password"
                  heading="Password"
                  value="hidden"
                  Placeholder=" Enter Password"
           />
            <div class="text">
              <a href="" ><i class="fa fa-eye-slash" aria-hidden="true" ></i></a>
            </div>
        </div>
    )
  }
}
export default App
