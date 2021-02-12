import React,{ useState} from "react";
import "./Experience.css";
import Button from "../Button";
import AddWork from './popupscreens/AddWork'
function Experience() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Experr">
     <div className="profile-inner">
        <h> Experience </h>
        <Button buttonStyle="btn--ADD" value="+ADD"  onClick={() => setIsOpen(true)} />
        <AddWork   trigger={isOpen} setTrigger={setIsOpen}>

        </AddWork>
      </div>
      <div className="experince">
        <div className="delete-button">
          <h>Wordpress developer | Company pvt ltd</h>

          <a href="">

            <i class="fas fa-trash"></i>
          </a>
        </div>
        <div className="dlt-icon">
          <h>20 Aug 2018 to 14 feb 2020</h>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          <br/>
          has been the industry's standard .
        </p>
      </div>
    </div>
  );
}
export default Experience;
