import { useRef } from 'react';
import styled, { css } from 'styled-components';

import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import { useCursor } from 'hooks';
import { getBoundingBox } from '@/utils';

//----------------- Types -----------------//
type SocialIconType = {
  isCard?: boolean;
};

type Social = {
  type: 'github' | 'linkedin' | 'mail' | 'open';
  isCard?: boolean;
};

//----------------- Styles -----------------//
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

//----------------- Hooks -----------------//
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

//----------------- Main component -----------------//
export const SocialIcon = ({ type, isCard = false }: Social) => {
  const { ref, handleMouseMove, handleMouseLeave } = useAnimateCursor();

  const types = {
    github: (
      <SocialIconWrapper
        isCard={isCard}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <StyledGithubIcon />
      </SocialIconWrapper>
    ),
    linkedin: (
      <SocialIconWrapper
        isCard={isCard}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <StyledLinkedinIcon />
      </SocialIconWrapper>
    ),
    mail: (
      <SocialIconWrapper
        isCard={isCard}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <StyledMailIcon />
      </SocialIconWrapper>
    ),
    open: (
      <SocialIconWrapper
        isCard={isCard}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <StyledOpenIcon />
      </SocialIconWrapper>
    ),
  };

  const socialTypeNotFound = !types[type];

  if (socialTypeNotFound) throw new Error('SocialIcon type doesnt exist');
  return types[type];
};
