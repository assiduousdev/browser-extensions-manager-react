
import React, { useState } from 'react'

import data from "/src/data.json";

function useExtensions(filter) {
  const [extensions, setExtensions] = useState(data);

  
  const filterExtensions = (filter) => {
    if (filter === "Active") {
      return extensions.filter(e => e.isActive);
    } else if (filter === "Inactive") {
      return extensions.filter(e => !e.isActive);
    } else {
      return extensions;
    }
  }
  const filteredExtensions = filterExtensions(filter);

  const removeExtension = (id) => {
    setExtensions((prev) => prev.filter((e) => e.id !== id));
  }

  const toggleExtension = (id) => {
    const updatedData = extensions.map(e => {
      if (e.id === id) {
        return {
          ...e,
          isActive: !e.isActive, 
        }
      }

      return e;
    });

    setExtensions(updatedData);
  }

  return [filteredExtensions, toggleExtension, removeExtension];
}

export default useExtensions