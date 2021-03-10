import React from 'react';
import Switch from '@material-ui/core/Switch';
import './ToggleSwitch.css'

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  console.log("abdullah:",state.checkedA)
  
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /><span>
     <p> {state.checkedA ? "ON" : "OFF"}</p></span>
    </div>
  );
}
