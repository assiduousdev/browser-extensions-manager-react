import React from 'react'

import "./SwitchToggle.css";

function SwitchToggle({ id, label, onChange }) {
  return (
    <label for={id}>
      <span class="sr-only">{ label }</span>
      <input
        id={id} 
        type="checkbox"
        class="Toggle Toggle--switch"
        
        onChange={onChange}

        role="switch"
      />
    </label>
  )
}

export default SwitchToggle