import styled from 'styled-components';

//------------- Styles -------------//
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

//------------- HandIcon -------------//
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

//------------- TechnologyIcon -------------//
type Technology = {
  type: 'react' | 'node' | 'typescript';
};

export const TechnologyIcon = ({ type }: Technology) => {
  if (type === 'react') return <div>react icon</div>;
  if (type === 'node') return <div>node icon</div>;
  if (type === 'typescript') return <div>typescriptIcon</div>;
  return null;
};
