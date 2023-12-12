import React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { Popper } from "@mui/base/Popper";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  StyledAutocomplete,
  StyledAutocompleteRoot,
  StyledLabel,
  StyledInput,
  StyledPopper,
  StyledListBox,
  StyledOption,
  StyledPopupIndicator,
} from "../../../style/modules/autocomplete.module";

import TextField from "@mui/material/TextField";

const Autocomplete = React.forwardRef(function Autocomplete(props, ref) {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    children,
    ...other
  } = props;

  const {
    getRootProps,
    getInputProps,
    getInputLabelProps,
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
    ...props,
    componentName: "BaseAutocompleteIntroduction"
  });

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <StyledAutocomplete>
      <StyledLabel {...getInputLabelProps()}>{children}</StyledLabel>
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
              return <StyledOption {...optionProps}>{option}</StyledOption>;
            })}
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

export default function AutocompleteStyleMUI({
  children,
  options,
  inputValue,
  setInputValue,
  ...props
}) {
  return (
    <Autocomplete
      id="manageable-states-demo"
      options={options}
      renderInput={params => <TextField {...params} label="Manage State" />}
      {...props}
    >
      {children}
    </Autocomplete>
  );
}
