import { css } from 'styled-components';
import { breakpoints } from '@/constants';
import { fluidValues } from '@/utils';

export const sideSpacing = css`
  padding-inline: var(--size-3);

  @media (min-width: ${breakpoints.md}) {
    padding-inline: var(--size-5);
  }
`;

export const spacingFlow = css`
  & > * + * {
    padding-top: ${fluidValues(320, 1200, 80, 160)};
  }
`;
