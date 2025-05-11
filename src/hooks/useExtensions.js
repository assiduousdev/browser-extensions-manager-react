
import React, { useEffect, useState } from 'react'

import data from "/src/data.json";

function useExtensions(filter) {
  const [extensions, setExtensions] = useState(data);

  useEffect(() => {
    if (filter === "Active") {
      setExtensions(data.filter(e => e.isActive));
    } else if (filter === "Inactive") {
      setExtensions(data.filter(e => !e.isActive));
    } else {
      setExtensions(data);
    }
  }, [filter])

  return extensions;
}

export default useExtensions