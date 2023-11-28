import React from "react";

const InputAuth = ({ children, name, value, selectedInput, ...props }) => {
  let rootClassesInput = ["input"];
  let rootClassesLabel = ["label"];

  if (selectedInput === "") {
    rootClassesInput = ["input"];
    rootClassesLabel = ["label"];
  }

  if (name === selectedInput || value !== "") {
    rootClassesInput.push("no_empty");
    rootClassesLabel.push("no_empty");
  }

  return (
    <div className={"inputAuth"}>
      <input
        className={rootClassesInput.join(" ")}
        value={value}
        {...props}
      ></input>
      <label className={rootClassesLabel.join(" ")}>{children}</label>;
    </div>
  );
};

export default InputAuth;
