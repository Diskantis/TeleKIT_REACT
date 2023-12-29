export const mixinFont = ({ size, height, weight, style, spacing }) => `
  font-size: ${size || "1rem"};
  line-height: ${height || "normal"};
  font-weight: ${weight || 400};
  font-style: ${style || 'normal'};
  letter-spacing: ${spacing || 0};
`;

export const mixinFontPrimary = ({ family }) => `
  font-family: ${family || 'Roboto, sans-serif'};
`;

export const mixinFontTime = ({ family }) => `
  font-family: ${family || 'Arial-MT, sans-serif'};
`;