import React from 'react'

import "./Header.css";

function Header({ children }) {
  return (
    <header class="Header shadow-400">
      {...children}
    </header>
  )
}

export default Header