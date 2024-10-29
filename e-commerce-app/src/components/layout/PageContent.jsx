import React from "react";

const PageContent = ({ children }) => {
  return (
    <div className="px-10 md:px-40 lg:px-56 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};

export default PageContent;
