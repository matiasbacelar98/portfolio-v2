import { useRef } from 'react';
import styled, { css } from 'styled-components';

import { FaReact, FaNodeJs, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';

import { useCursor } from 'hooks';
import { getBoundingBox } from '@/utils';

//------------- HandIcon -------------//
// Types
type SizesType = {
  [key: string]: string;
};

type HandImageType = {
  size: string;
};

type Hand = {
  type: 'salute' | 'point' | 'cool';
  size: 'lg' | 'md' | 'sm';
};

// Styles
const sizes: SizesType = {
  lg: 'var(--size-6)',
  md: 'var(--size-4)',
  sm: 'var(--size-3)',
};

const HandImage = styled.img<HandImageType>`
  max-width: ${props => `${sizes[props.size]}`};
`;

// Main component
export const HandIcon = ({ type, size }: Hand) => {
  if (type === 'salute') return <HandImage src="/icons/waving-hand.png" alt="waving hand" size={size} />;
  if (type === 'point') return <HandImage src="/icons/pointright-hand.png" alt="waving hand" size={size} />;
  if (type === 'cool') return <HandImage src="/icons/cool-hand.png" alt="waving hand" size={size} />;
  return null;
};

//------------- SocialIcon -------------//
// Types
type SocialIconType = {
  isCard?: boolean;
};

type Social = {
  type: 'github' | 'linkedin' | 'mail' | 'open';
  isCard?: boolean;
};

// Styles
const socialIconStyles = css`
  font-size: var(--size-3);
  color: ${props => props.theme.accent};
  transition: color 150ms ease-in-out;
`;

const StyledGithubIcon = styled(FiGithub)`
  ${socialIconStyles}
`;

const StyledLinkedinIcon = styled(FaLinkedinIn)`
  ${socialIconStyles}
`;

const StyledMailIcon = styled(AiOutlineMail)`
  ${socialIconStyles}
`;

const StyledOpenIcon = styled(HiOutlineExternalLink)`
  ${socialIconStyles}
`;

const SocialIconWrapper = styled.div<SocialIconType>`
  display: grid;
  place-items: center;

  width: var(--size-6);
  height: var(--size-6);

  border: 2px solid ${props => (props.isCard ? 'transparent' : props.theme.accent)};
  border-radius: 50%;

  transition: border 150ms ease-in;

  &:hover {
    border: 2px solid ${props => props.theme.text};

    // Change icon
    & svg {
      color: ${props => props.theme.text};
    }
  }
`;

// Hooks
const useAnimateCursor = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCursorPos, resetCursorPos, updateCursorType, resetCursorType } = useCursor();

  //----- Utils -----//
  const handleMouseMove = () => {
    // Change cursor style
    updateCursorType('hovered');

    // Use this because i'am sure the value is of the expected type.
    const element: HTMLDivElement = ref.current as HTMLDivElement;
    const coordinates = getBoundingBox(element);

    // Take element coordinates
    const { xCenter, yCenter } = coordinates;

    // Center custom_cursor relative to the element
    return updateCursorPos(xCenter, yCenter);
  };

  const handleMouseLeave = () => {
    resetCursorPos();
    resetCursorType();
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

// Main component
export const SocialIcon = ({ type, isCard = false }: Social) => {
  const { ref, handleMouseMove, handleMouseLeave } = useAnimateCursor();

  if (type === 'github')
    return (
      <SocialIconWrapper isCard={isCard} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <StyledGithubIcon />
      </SocialIconWrapper>
    );

  if (type === 'linkedin')
    return (
      <SocialIconWrapper isCard={isCard} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <StyledLinkedinIcon />
      </SocialIconWrapper>
    );

  if (type === 'mail')
    return (
      <SocialIconWrapper isCard={isCard} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <StyledMailIcon />
      </SocialIconWrapper>
    );

  if (type === 'open')
    return (
      <SocialIconWrapper isCard={isCard} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <StyledOpenIcon />
      </SocialIconWrapper>
    );

  return null;
};

//------------- Technologies Icons -------------//
// Styles
const techIconStyles = css`
  font-size: var(--size-6);
  color: ${props => props.theme.text};
`;

const StyledReactIcon = styled(FaReact)`
  ${techIconStyles}
`;

const StyledNodeIcon = styled(FaNodeJs)`
  ${techIconStyles}
`;

const StyledTypescriptIcon = styled.span`
  font-size: var(--size-5);
  color: ${props => props.theme.text};
  text-transform: uppercase;
`;

// Components
export const ReactIcon = () => <StyledReactIcon />;
export const NodeIcon = () => <StyledNodeIcon />;
export const TypescriptIcon = () => <StyledTypescriptIcon>ts</StyledTypescriptIcon>;
