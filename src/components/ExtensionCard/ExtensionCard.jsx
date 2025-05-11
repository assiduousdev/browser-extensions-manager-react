import React from 'react'

import "./ExtensionCard.css";

function ExtensionCard({ ariaLabelledBy, children }) {
  return (
    <article className="ExtensionCard shadow-400" aria-labelledby={ariaLabelledBy} tabIndex={0}>
       { children }
    </article>
  )
}

export default ExtensionCard