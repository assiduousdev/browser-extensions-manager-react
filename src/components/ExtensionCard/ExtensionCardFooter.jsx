import React from 'react'

import "./ExtensionCardFooter.css";

function ExtensionCardFooter({ children }) {
  return (
    <footer className="ExtensionCard__Footer">
      { ...children }
    </footer>
  )
}

export default ExtensionCardFooter