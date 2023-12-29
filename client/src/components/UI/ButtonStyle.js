import { styled } from "styled-components";
import { mixinFont, mixinFontPrimary } from "../base/mixin";
import { Color } from "../base/constants";

export const ButtonSubmit = styled.button`
  display: inline-block;
  height: 36px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  ${mixinFontPrimary("Roboto")}
  ${mixinFont({ size: "0.9rem", spacing: "0.1rem" })}
  text-transform: uppercase;
  color: ${Color.bodyText};
  background-color: ${Color.btnSubmit};
  padding: 0 20px;
  margin-bottom: 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${Color.btnSubmit_hover};
  }
`;

export const ButtonEditDel = `
  display: flex;
  align-items: center;
  --bs-btn-padding-x: 0.5em;
  --bs-btn-padding-y: 0.5em;
  --bs-btn-color: ${Color.tableText};
  --bs-btn-border-color: ${Color.tableText};
  --bs-btn-hover-color: ${Color.bodyText};
  --bs-btn-hover-bg: ${Color.tableText};
  --bs-btn-hover-border-color: ${Color.tableText};
`;

export const ButtonGroup = `
  display: flex;
`;

export const ColorSuccess = `
  --bs-btn-hover-bg: #198754;
`;

export const ColorDanger = `
  --bs-btn-hover-bg: #dc3545;
`;