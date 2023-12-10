import { styled } from "@mui/system";
import { Button } from "@mui/base/Button";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75"
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025"
};

const color_const = {
  color_text: "#ffffff",
  color_input_bg: "#212529",
  color_input_border: "#495057",
  color_input_shadow: "#003a6e",
  color_label_text: "#adb5bd"
};

export const StyledAutocomplete = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledAutocompleteRoot = styled("div")(
  ({ theme }) => `
  font-size: 1rem;
  font-weight: 400;
  border-radius: 0.375rem;
  color: ${theme.palette.mode === "dark" ? color_const["color_text"] : color_const["color_text"]};
  background: ${theme.palette.mode === "dark" ? color_const["color_input_bg"] : color_const["color_input_bg"]};
  border: 1px solid ${theme.palette.mode === "dark" ? color_const["color_input_border"] : color_const["color_input_border"]};

  width: 500px;
  height: 38px;
  display: flex;
  gap: 5px;
  padding: 0.375rem 0.75rem;
  overflow: hidden;
  // text-overflow: ellipsis;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &.focused {
    outline: none;
    border: 1px solid  ${color_const["color_label_text"]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark"
    ? color_const["color_input_shadow"]
    : color_const["color_input_shadow"]};
  }

  &:focus-visible {
    outline: none;
  }
`
);

export const StyledLabel = styled("label")`
  font-size: inherit;
  font-family: inherit;
  color: ${color_const["color_label_text"]};
  margin-bottom: 0.3rem;
`;

export const StyledInput = styled("input")(
  ({ theme }) => `
  font-size: inherit;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? color_const["color_label_text"] : color_const["color_label_text"]};
  background: inherit;
  border: none;
  border-radius: inherit;
  // padding: 8px 12px;
  outline: none;
  flex: 1 0 auto;
`
);

// ComponentPageTabs has z-index: 1000
export const StyledPopper = styled("div")`
  position: relative;
  z-index: 1001;
  width: 500px;
`;

export const StyledListBox = styled("ul")(
  ({ theme }) => `
  // font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 500px;
  border-radius: 6px;
  overflow: auto;
  outline: 0px;
  max-height: 300px;
  z-index: 1;
  color: ${theme.palette.mode === "dark" ? color_const["color_text"] : color_const["color_text"]};
  background: ${theme.palette.mode === "dark" ? color_const["color_input_bg"] : color_const["color_input_bg"]};
  border: 1px solid ${theme.palette.mode === "dark" ? color_const["color_input_border"] : color_const["color_input_border"]};
  // background: inherit;
  // border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  // color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  `
);

// box-shadow: 0px 4px 6px ${
//     theme.palette.mode === "dark" ? "rgba(0,0,0, 0.3)" : "rgba(0,0,0, 0.05)"
//   };

export const StyledOption = styled("li")(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  // padding: 5px 0.75rem;
  border-radius: 4px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    cursor: pointer;
  }

  &[aria-selected=true] {
    background: ${theme.palette.mode === "dark" ? color_const["color_input_bg"] : color_const["color_input_bg"]};
    color: ${theme.palette.mode === "dark" ? color_const["color_text"] : color_const["color_text"]};
    // color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]}
    // background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
;
  }

  &.Mui-focused,
  &.Mui-focusVisible {
    background: ${theme.palette.mode === "dark" ? color_const["color_input_border"] : color_const["color_input_border"]};
    color: ${theme.palette.mode === "dark" ? color_const["color_text"] : color_const["color_text"]};
    // background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    // color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &[aria-selected=true].Mui-focused,
  &[aria-selected=true].Mui-focusVisible {
    background: ${theme.palette.mode === "dark" ? color_const["color_input_border"] : color_const["color_input_border"]};
    color: ${theme.palette.mode === "dark" ? color_const["color_text"] : color_const["color_text"]};
    // background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    // color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }
  `
);

export const StyledPopupIndicator = styled(Button)(
  ({ theme }) => `
    outline: 0;
    box-shadow: none;
    border: 0;
    border-radius: 4px;
    background-color: transparent;
    align-self: center;
    padding: 0 2px;

    &:hover {
      background-color: ${
    theme.palette.mode === "dark" ? grey[700] : blue[100]
  };
      cursor: pointer;
    }

    & > svg {
      transform: translateY(2px);
    }

    &.popupOpen > svg {
      transform: translateY(2px) rotate(180deg);
    }
  `
);

export const StyledClearIndicator = styled(Button)(
  ({ theme }) => `
    outline: 0;
    box-shadow: none;
    border: 0;
    border-radius: 4px;
    background-color: transparent;
    align-self: center;
    padding: 0 2px;

    &:hover {
      background-color: ${
    theme.palette.mode === "dark" ? grey[700] : blue[100]
  };
      cursor: pointer;
    }

    & > svg {
      transform: translateY(2px) scale(0.9);
    }
  `
);

export const StyledNoOptions = styled("li")`
  list-style: none;
  padding: 8px;
  cursor: default;
`;
