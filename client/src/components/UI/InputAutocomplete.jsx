import React, { useState } from "react";

const InputSelectAutocomplete = ({
  children,
  options,
  className,
  create,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const itemClickHandler = e => {
    setValue(e.target.textContent);
    setIsOpen(false);
  };

  create(value);

  const arr_depart = Array.from(
    new Set(options.map(depart => depart.department))
  );
  console.log(arr_depart);

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="form">
      <form className="search_form">
        <label className={"label-create"}>{children}</label>
        <input
          type="text"
          value={value}
          className={`input-create ${className}`}
          onChange={e => setValue(e.target.value)}
          onClick={inputClickHandler}
          {...props}
        />
        <ul className="autocomplete">
          {value && isOpen
            ? arr_depart.map(depart => (
                <li
                  className="autocomplete_item"
                  key={depart.id}
                  onClick={itemClickHandler}
                >
                  {depart}
                </li>
              ))
            : null}
        </ul>
      </form>
    </div>
  );
};

export default InputSelectAutocomplete;
