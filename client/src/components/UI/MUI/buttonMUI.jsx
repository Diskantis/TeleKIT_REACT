import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const Button_mui = styled(Button)(
  `
    width: 150px;
    font-size: 0.8rem;
    margin-top: 10px
  `
);

export default function ButtonMUI({ children, click }) {
  return <Button_mui variant="contained" onClick={click}>{children}</Button_mui>;
}
