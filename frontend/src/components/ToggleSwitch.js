import React from 'react';
import Switch from '@material-ui/core/Switch';
import './ToggleSwitch.css'

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /><span>
     <p> {state.checkedA ? "on" : "off"}</p></span>
    </div>
  );
}
