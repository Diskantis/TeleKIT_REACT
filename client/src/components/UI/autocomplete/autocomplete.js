// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { useAutocomplete } from "@mui/base/useAutocomplete";
// import { unstable_useForkRef as useForkRef } from "@mui/utils";
// import { Popper } from "@mui/base/Popper";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
//
// import {
//   StyledAutocompleteRoot,
//   StyledLabel,
//   StyledInput,
//   StyledListBox,
//   StyledNoOptions,
//   StyledOption,
//   StyledPopper,
//   StyledPopupIndicator,
//   StyledAutocomplete
// } from "../../../style/modules/autocomplete.module";
//
// const Autocomplete = React.forwardRef(function Autocomplete(props, ref) {
//   const {
//     disableClearable = false,
//     disabled = false,
//     readOnly = false,
//     ...other
//   } = props;
//
//   const {
//     getRootProps,
//     getInputProps,
//     getPopupIndicatorProps,
//     getClearProps,
//     getListboxProps,
//     getOptionProps,
//     dirty,
//     id,
//     popupOpen,
//     focused,
//     anchorEl,
//     setAnchorEl,
//     groupedOptions,
//   } = useAutocomplete({
//     ...props,
//     componentName: 'BaseAutocompleteIntroduction',
//   });
//
//   const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
//
//   const rootRef = useForkRef(ref, setAnchorEl);
//
//   return (
//     <React.Fragment>
//       <StyledAutocompleteRoot
//         {...getRootProps(other)}
//         ref={rootRef}
//         className={focused ? 'focused' : undefined}
//       >
//         <StyledInput
//           id={id}
//           disabled={disabled}
//           readOnly={readOnly}
//           {...getInputProps()}
//         />
//         {hasClearIcon && (
//           <StyledClearIndicator {...getClearProps()}>
//             <ClearIcon />
//           </StyledClearIndicator>
//         )}
//
//         <StyledPopupIndicator
//           {...getPopupIndicatorProps()}
//           className={popupOpen ? 'popupOpen' : undefined}
//         >
//           <ArrowDropDownIcon />
//         </StyledPopupIndicator>
//       </StyledAutocompleteRoot>
//       {anchorEl ? (
//         <Popper
//           open={popupOpen}
//           anchorEl={anchorEl}
//           slots={{
//             root: StyledPopper,
//           }}
//           modifiers={[
//             { name: 'flip', enabled: false },
//             { name: 'preventOverflow', enabled: false },
//           ]}
//         >
//
// Autocomplete.propTypes = {
//   disableClearable: PropTypes.oneOf([false]),
//   disabled: PropTypes.bool,
//   readOnly: PropTypes.bool
// };
//
// export default function AutocompleteIntroduction() {
//   return;
//   <Autocomplete
//     inputValue={inputValue}
//     onInputChange={(event, newInputValue) => {
//       setInputValue(newInputValue);
//     }}
//     id="manageable-states-demo"
//     options={options}
//   />;
// }

import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { Button } from "@mui/base/Button";
import { Popper } from "@mui/base/Popper";
// import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";

import {
  StyledAutocomplete,
  StyledAutocompleteRoot,
  StyledLabel,
  StyledInput,
  StyledPopper,
  StyledListBox,
  StyledOption,
  StyledPopupIndicator,
  StyledClearIndicator,
  StyledNoOptions
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
    // getClearProps,
    getListboxProps,
    getOptionProps,
    // dirty,
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

  // const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

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
      // inputValue={inputValue}
      // onInputChange={(event, newInputValue) => {
      //   setInputValue(newInputValue);
      // }}
      renderInput={params => <TextField {...params} label="Manage State" />}
      {...props}
    >
      {children}
    </Autocomplete>
  );
}
