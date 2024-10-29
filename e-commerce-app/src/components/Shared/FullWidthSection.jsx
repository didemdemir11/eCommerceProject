import React from "react";

const FullWidthSection = ({ children, bgColor }) => {
  return <div className={`w-full ${bgColor}`}>{children}</div>;
};

export default FullWidthSection;
