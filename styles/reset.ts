import { css } from 'styled-components';
import { breakpoints } from '@/constants';

const reset = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove horizontal scroll */
  html {
    overflow-x: hidden;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  // Add theme styles & defaults
  body {
    font-family: var(--font);
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bg};
    padding: var(--size-6) var(--size-5) var(--size-3);
    min-height: 100vh;
  }

  @media (min-width: ${breakpoints.md}) {
    body {
      padding: var(--size-6) var(--size-10) var(--size-3);
    }
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  picture,
  figure,
  blockquote,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  // Define line-height
  h1 {
    line-height: 1.6;
  }

  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  caption {
    line-height: 1.5;
  }

  /* Remove default list styles */
  ul,
  ol,
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
    height: auto;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people 
  that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default reset;
