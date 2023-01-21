import styled, { css } from 'styled-components';
import { pixelsToRem } from '@/utils';

//--------- Headings & Texts ---------//
type TypographyType = {
  size: string;
  weight: string;
  highlighted?: boolean;
  mxWidth?: string;
  display?: string;
  hover?: boolean;
  uppercase?: boolean;
};

export const Typography = styled.span<TypographyType>`
  font-size: ${props => props.theme[props.size]};
  font-weight: ${props => props.theme[props.weight]};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};

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

//--------- OutterLink ---------//
type OutterLinkType = {
  size: string;
  weight: string;
};

export const OutterLink = styled.a<OutterLinkType>`
  font-size: ${props => props.theme[props.size]};
  font-weight: ${props => props.theme[props.weight]};

  color: ${props => props.theme.accent};
  display: inline-block;

  transition: color 200ms ease-in-out;

  &:hover {
    color: ${props => props.theme.text};
  }
`;

//--------- InnerLink ---------//
type InnerLinkType = {
  size?: string;
  weight?: string;
  highlighted?: boolean;
  hover?: boolean;
  active?: boolean;
};

export const InnerLink = styled.a<InnerLinkType>`
  font-size: ${props => (props.size ? props.theme[props.size] : props.theme.testBase)};
  font-weight: ${props => (props.weight ? props.theme[props.weight] : props.theme.regularWeight)};
  color: ${props => (props.active ? props => props.theme.accent : props.theme.text)};
  display: inline-block;
  position: relative;
`;
