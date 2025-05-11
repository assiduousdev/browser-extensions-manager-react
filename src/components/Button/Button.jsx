import React from 'react'

import "./Button.css";

const ButtonVariants = {
  "default" : "Button shadow-400",
  "active" : "Button active shadow-400", 
  "primary" : "Button button--primary shadow-400"
}

function Button({ variant = "default", onClick, children }) {
  return (
    <button className={ ButtonVariants[variant] ?? "default" } type="button" onClick={onClick}>
      { children }
    </button>
  )
}

export default Button