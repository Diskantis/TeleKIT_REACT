import { styled } from "@mui/system";

const colorConst = {
  color_body_bg: "#111111ff",
  colorBodyText: "#ffffff",
  color_btn_submit: "#2196f3"
};

export const formRecipient = styled()(
  () => `
  display: flex;
  flex-direction: column;
  `
);

export const formRecipientTitle = styled()(
  () => `
  color: ${colorConst["colorBodyText"]};
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
  `
);
