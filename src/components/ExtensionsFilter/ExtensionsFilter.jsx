import React from 'react'

import Button from "../Button/Button";

import "./ExtensionsFilter.css";

function ExtensionsFilter({ activeFilter, onClick }) {

  const filters = [
    "All",
    "Active",
    "Inactive"
  ];

  return (
    <div className="flex" role="group" aria-label="Filter extensions by">
      {
        filters.map((f) => (
          <Button
            key={f} 
            variant={ activeFilter === f ? "active" : "default" } 
            onClick={ () => onClick(f) }
          >
            {f}
          </Button>
        ))
      }
    </div>
  )
}

export default ExtensionsFilter