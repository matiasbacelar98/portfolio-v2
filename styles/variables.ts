import { css } from 'styled-components';

type ValuesType = {
  [key: string]: string;
};

const generateSpacingValues = (levels: number, base = 8) => {
  const values: ValuesType = {};

  for (let i = 0; i <= levels; i++) {
    values[`--sp-${i + 1}`] = `${(base * (i + 1)) / 16}rem`;
  }

  return values;
};

//------- Variables -------//
const variables = css`
  :root {
    // Fonts
    --font: 'HK Grotesk', sans-serif;
    // Spacing
    ${generateSpacingValues(40)}
    // Others
    --border-radius: 0.5rem;
    --box-shadow: -2px 2px 15px -2px rgba(0, 0, 0, 0.3);
  }
`;

export default variables;
