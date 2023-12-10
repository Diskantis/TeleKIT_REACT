import React, { useState } from "react";

import { useAutocomplete } from "@mui/base/useAutocomplete";

import {
  StyledLabel,
  StyledAutocompleteRoot,
  StyledInput,
  StyledListbox,
  StyledOption,
} from "../../style/modules/autocomplete_hook.module";

export default function UseAutocomplete({ children, create, options}) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
  } = useAutocomplete({
    options,
    value,
    inputValue,
    onChange: (event, newValue) => setValue(newValue),
    onInputChange: (event, newInputValue) => setInputValue(newInputValue),
    id: 'use-autocomplete-demo',
  });

  create(inputValue);

  return (
    <div style={{ marginBottom: 24 }}>
      <StyledLabel {...getInputLabelProps()}>{children}</StyledLabel>
      <StyledAutocompleteRoot
        {...getRootProps()}
        className={focused ? 'focused' : ''}
      >
        <StyledInput {...getInputProps()} />
      </StyledAutocompleteRoot>
      {groupedOptions.length > 0 && (
        <StyledListbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <StyledOption {...getOptionProps({ option, index })}>
              {option}
            </StyledOption>
          ))}
        </StyledListbox>
      )}
    </div>
  );
}
