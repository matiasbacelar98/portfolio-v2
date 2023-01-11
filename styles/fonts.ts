import { css } from 'styled-components';

const familyAndStyle = css`
  font-family: 'HK Grotesk';
  font-style: normal;
`;

const hkGroteskFont = css`
  @font-face {
    ${familyAndStyle};
    font-weight: 300;
    font-display: auto;
    src: local('HK Grotesk Light'), url('/fonts/HKGrotesk-Light.ttf');
  }

  @font-face {
    ${familyAndStyle};
    font-weight: 400;
    font-display: auto;
    src: local('HK Grotesk Regular'), url('/fonts/HKGrotesk-Regular.ttf');
  }

  @font-face {
    ${familyAndStyle};
    font-weight: 500;
    font-display: auto;
    src: local('HK Grotesk Medium'), url('/fonts/HKGrotesk-Medium.ttf');
  }

  @font-face {
    ${familyAndStyle};
    font-weight: 600;
    font-display: auto;
    src: local('HK Grotesk SemiBold'), url('/fonts/HKGrotesk-SemiBold.ttf');
  }
`;

export default hkGroteskFont;
