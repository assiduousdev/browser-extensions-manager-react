import React from 'react'

import "./SwitchToggle.css";

function SwitchToggle({ id, label, onChange }) {
  return (
    <label htmlFor={id}>
      <span className="sr-only">{ label }</span>
      <input
        id={id} 
        type="checkbox"
        className="Toggle Toggle--switch"
        
        onChange={onChange}

        role="switch"
      />
    </label>
  )
}

export default SwitchToggle