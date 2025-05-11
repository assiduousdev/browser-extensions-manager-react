import React from 'react'

import "./ExtensionCardHeader.css";

function ExtensionCardHeader({ children }) {
  return (
    <header class="ExtensionCard__Header">
      { ...children }
    </header>
  )
}

export default ExtensionCardHeader