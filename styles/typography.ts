import styled, { css } from 'styled-components';
import { pixelsToRem } from '@/utils';

type TypographyType = {
  size: string;
  weight: string;
  highlighted?: boolean;
  mxWidth?: string;
  display?: string;
  hover?: boolean;
};

// Headings & Texts
export const Typography = styled.span<TypographyType>`
  font-size: ${props => props.theme[props.size]};
  font-weight: ${props => props.theme[props.weight]};

  color: ${props => (props.highlighted ? props.theme.accent : props.theme.text)};

  max-width: ${props => (!props.mxWidth ? 'none' : pixelsToRem(props.mxWidth))};
  display: ${props => (!props.display ? 'auto' : props.display)};

  transition: color 200ms ease-in-out;

  ${props =>
    props.hover &&
    css`
      &:hover {
        color: ${props => props.theme.text};
      }
    `}
`;

type ExternalLinkType = {
  size: string;
  weight: string;
};

// External links
export const OutterLink = styled.a<ExternalLinkType>`
  font-size: ${props => props.theme[props.size]};
  font-weight: ${props => props.theme[props.weight]};

  color: ${props => props.theme.accent};
  display: inline-block;

  transition: color 200ms ease-in-out;

  &:hover {
    color: ${props => props.theme.text};
  }
`;

type InternalLinkType = {
  size?: string;
  weight?: string;
  highlighted?: boolean;
  hover?: boolean;
  active?: boolean;
};

// Internal Links
export const InnerLink = styled.a<InternalLinkType>`
  font-size: ${props => (props.size ? props.theme[props.size] : props.theme.testBase)};
  font-weight: ${props => (props.weight ? props.theme[props.weight] : props.theme.regularWeight)};
  color: ${props => props.theme.text};

  display: inline-block;
  position: relative;

  transition: all 0.3s ease;

  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.accent};

      &:hover {
        color: ${props => props.theme.text};
      }
    `}
`;
