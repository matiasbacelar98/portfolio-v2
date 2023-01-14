import { FaReact, FaNodeJs } from 'react-icons/fa';
import styled, { css } from 'styled-components';

//------------- HandIcon -------------//
type SizesType = {
  [key: string]: string;
};
const sizes: SizesType = {
  lg: 'var(--size-6)',
  md: 'var(--size-4)',
  sm: 'var(--size-3)',
};

type HandImageType = {
  size: string;
};
const HandImage = styled.img<HandImageType>`
  max-width: ${props => `${sizes[props.size]}`};
`;

type Hand = {
  type: 'salute' | 'point' | 'cool';
  size: 'lg' | 'md' | 'sm';
};

export const HandIcon = ({ type, size }: Hand) => {
  if (type === 'salute') return <HandImage src="/icons/waving-hand.png" alt="waving hand" size={size} />;
  if (type === 'point') return <HandImage src="/icons/pointright-hand.png" alt="waving hand" size={size} />;
  if (type === 'cool') return <HandImage src="/icons/cool-hand.png" alt="waving hand" size={size} />;
  return null;
};

//------------- SocialIcon -------------//
type Social = {
  type: 'github' | 'linkedin' | 'mail';
};

export const SocialIcon = ({ type }: Social) => {
  if (type === 'github') return <div>Github icon</div>;
  if (type === 'linkedin') return <div>Linkedin icon</div>;
  if (type === 'mail') return <div>EmailIcon</div>;
  return null;
};

//------------- Technologies Icons -------------//
const baseIconStyles = css`
  font-size: var(--size-6);
  color: ${props => props.theme.text};
`;

const StyledReactIcon = styled(FaReact)`
  ${baseIconStyles}
`;

const StyledNodeIcon = styled(FaNodeJs)`
  ${baseIconStyles}
`;

const StyledTypescriptIcon = styled.span`
  font-size: var(--size-5);
  color: ${props => props.theme.text};
  text-transform: uppercase;
`;

export const ReactIcon = () => <StyledReactIcon />;
export const NodeIcon = () => <StyledNodeIcon />;
export const TypescriptIcon = () => <StyledTypescriptIcon>ts</StyledTypescriptIcon>;
