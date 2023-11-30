import Form from "react-bootstrap/Form";
import React from "react";

function InputSelect({ children, className, ...props }) {
  return (
    <div>
      <label className={"label-create"}>{children}</label>
      <Form.Select className={`input-create ${className}`} {...props}>
        <option value="Штатный сотрудник">Штатный сотрудник</option>
        <option value="Договор подряда">Договор подряда</option>
      </Form.Select>
    </div>
  );
}

export default InputSelect;
