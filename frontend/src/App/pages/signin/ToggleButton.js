import React, { useState, Component } from "react";
import "./ToogleButton.css";
import InputField from '../../../components/InputField'
 function App () {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return(
          <div  id="show_hide_password">
            <InputField 
               type={passwordShown ? "text" : "password"}
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
export default App
