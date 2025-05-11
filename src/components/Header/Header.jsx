import React from 'react'

import "./Header.css";

function Header({ children }) {
  return (
    <header className="container">
      <section className="Header shadow-400">
        { children }
      </section>
    </header>
  )
}

export default Header