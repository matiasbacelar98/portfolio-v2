import { css } from 'styled-components';
import { breakpoints } from '@/constants';

export const sideSpacing = css`
  padding-inline: var(--size-3);

  @media (min-width: ${breakpoints.md}) {
    padding-inline: var(--size-5);
  }
`;
