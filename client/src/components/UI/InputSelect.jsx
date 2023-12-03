import Form from "react-bootstrap/Form";
import React from "react";

function InputSelect({options, defaultValue, children, className, ...props }) {
  return (
    <div>
      <label className={"label-create"}>{children}</label>
      <Form.Select className={`input-create ${className}`} {...props}>
        {options.map((option) => (
          <option key={option.value}>
            {option.value}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default InputSelect;