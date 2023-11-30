import React from "react";

const InputCreate = ({ children, value, type, className, ...props }) => {
  if (type === "tel") value = value.replace(/[^+\d]/g, "");
  return (
    <div>
      <label className={"label-create"}>{children}</label>
      <input
        className={`input-create ${className}`}
        title={value}
        value={value}
        {...props}
      />
    </div>
  );
};

export default InputCreate;
