import React from "react";

const InputSelectAutocomplete = ({
  children,
  value,
  options,
  className,
  ...props
}) => {
  return (
    <div className="form">
      <form className="search_form">
        <label className={"label-create"}>{children}</label>
        <input
          type="text"
          value={value}
          placeholder="search department"
          className={`input-create ${className}`}
          {...props}
        />
        <ul className="autocomplete">
          {options.map(depart => (
            <li className="autocomplete_item" key={depart.id}>
              {depart.department}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default InputSelectAutocomplete;
