import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const Button_mui = styled(Button)(
  `
    width: 150px;
    font-size: 1rem;
    margin-top: 10px
  `
);

export default function ButtonMUI({ children }) {
  return <Button_mui variant="contained">{children}</Button_mui>;
}
