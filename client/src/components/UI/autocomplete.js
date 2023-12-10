import React, {useState} from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { Popper } from "@mui/base/Popper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  StyledAutocompleteRoot,
  StyledLabel,
  StyledInput,
  StyledListBox,
  StyledNoOptions,
  StyledOption,
  StyledPopper,
  StyledPopupIndicator, StyledAutocomplete
} from "../../style/modules/autocomplete.module";

export const Autocomplete = React.forwardRef(function Autocomplete(props, ref) {
   const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    options,
    create,
    children,
    ...other
  } = props;

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const {
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getListboxProps,
    getOptionProps,
    id,
    popupOpen,
    focused,
    anchorEl,
    setAnchorEl,
    groupedOptions
  } = useAutocomplete({
    id: 'autocomplete-department',
    options,
    onChange: (event, newValue) => setValue(newValue),
    onInputChange: (event, newInputValue) => setInputValue(newInputValue),
    ...props
  });

  create(inputValue);

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <StyledAutocomplete>
      <StyledLabel>{children}</StyledLabel>
      <StyledAutocompleteRoot
        {...getRootProps(other)}
        ref={rootRef}
        className={focused ? "focused" : undefined}
      >
        <StyledInput
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          {...getInputProps()}
        />
        <StyledPopupIndicator
          {...getPopupIndicatorProps()}
          className={popupOpen ? "popupOpen" : undefined}
        >
          <ArrowDropDownIcon />
        </StyledPopupIndicator>
      </StyledAutocompleteRoot>
      {anchorEl ? (
        <Popper
          open={popupOpen}
          anchorEl={anchorEl}
          slots={{
            root: StyledPopper
          }}
          modifiers={[
            { name: "flip", enabled: false },
            { name: "preventOverflow", enabled: false }
          ]}
        >
          <StyledListBox {...getListboxProps()}>
            {groupedOptions.map((option, index) => {
              const optionProps = getOptionProps({ option, index });

              return (
                <StyledOption {...optionProps}>{option}</StyledOption>
              );
            })}

            {groupedOptions.length === 0 && (
              <StyledNoOptions>No results</StyledNoOptions>
            )}
          </StyledListBox>
        </Popper>
      ) : null}
    </StyledAutocomplete>
  );
});

Autocomplete.propTypes = {
  disableClearable: PropTypes.oneOf([false]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool
};