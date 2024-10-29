import React from "react";

const PageContent = ({ children }) => {
  return (
    <div className="px-8 md:px-20 lg:px-32 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};

export default PageContent;
