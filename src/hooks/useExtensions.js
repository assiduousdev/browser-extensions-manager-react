
import React, { useEffect, useState } from 'react'

import data from "/src/data.json";

function useExtensions() {
  const [extensions, _] = useState(data);
  return extensions;
}

export default useExtensions