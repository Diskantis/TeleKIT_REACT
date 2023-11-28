import React from "react";

const FootBar = ({ children }) => {
  return (
    <div className={"footer"}>
      <div className={"wrapperFooter"}>{children}</div>
    </div>
  );
};

export default FootBar;
