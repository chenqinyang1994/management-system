import React from "react";

export default function lazyComponent(importCom) {
  return React.lazy(() => importCom);
}
