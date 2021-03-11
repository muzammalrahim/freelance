import React, { Component } from "react";
import Switch from "react-switch";
import  "./ToggleSwitch.css"



class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {

    
    return (
      <div className="example">
      <label>
        <span>{this.state.checked ? "On" : "Off"}</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} onColor={'#1DA799'} offColor={'#d3d3d2'} uncheckedIcon={false}
            checkedIcon={false} height={13.5}
            width={20} handleDiameter={8}/>
      </label>
     </div>
    );
  }

}

export default ToggleSwitch 