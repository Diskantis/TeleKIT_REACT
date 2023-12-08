import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { Popper } from "@mui/base/Popper";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";
import {
  StyledAutocompleteRoot,
  StyledClearIndicator,
  StyledInput,
  StyledListbox,
  StyledNoOptions,
  StyledOption,
  StyledPopper,
  StyledPopupIndicator
} from "../../style/modules/autocomplete.module";

export const Autocomplete = React.forwardRef(function Autocomplete(props, ref) {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    ...other
  } = props;

  const {
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    dirty,
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

  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <React.Fragment>
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
        {hasClearIcon && (
          <StyledClearIndicator {...getClearProps()}>
            <ClearIcon />
          </StyledClearIndicator>
        )}

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
          <StyledListbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => {
              const optionProps = getOptionProps({ option, index });

              return (
                <StyledOption {...optionProps}>{option.label}</StyledOption>
              );
            })}

            {groupedOptions.length === 0 && (
              <StyledNoOptions>No results</StyledNoOptions>
            )}
          </StyledListbox>
        </Popper>
      ) : null}
    </React.Fragment>
  );
});

Autocomplete.propTypes = {
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: PropTypes.oneOf([false]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: PropTypes.bool
};
