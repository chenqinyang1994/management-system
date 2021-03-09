import React from "react";

const Helmet = ({ title, ...props }) => {
  document.title = title || "LIKEJS";
  return <></>;
};

export default Helmet;
