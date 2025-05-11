import React from 'react'

import "./ExtensionCardHeader.css";

function ExtensionCardHeader({ children }) {
  return (
    <header className="ExtensionCard__Header">
      { children }
    </header>
  )
}

export default ExtensionCardHeader