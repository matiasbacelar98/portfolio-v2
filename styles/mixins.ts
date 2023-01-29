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

export const keyboardStyles = css`
  &:focus,
  &:active {
    border-color: ${props => props.theme.accent};
    outline: 0.5px solid ${props => props.theme.accent};
    border-radius: 4px;
  }
`;
