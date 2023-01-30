import { useRef } from 'react';
import styled, { css } from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import { useCursor } from '@/hooks';
import { getBoundingBox } from '@/utils';
import { linkUrls } from '@/constants';
import { AccesibleText } from '@/styles';

//----------------- Types -----------------//
type Social = {
  type: 'github' | 'linkedin' | 'mail';
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

const SocialIconWrapper = styled.div`
  display: grid;
  place-items: center;

  width: var(--size-6);
  height: var(--size-6);

  border: 2px solid ${props => props.theme.accent};
  border-radius: 50%;

  transition: border 150ms ease-in;

  &:hover {
    border: 2px solid ${props => props.theme.text};
    cursor: pointer;

    // Change icon
    & svg {
      color: ${props => props.theme.text};
    }
  }
`;

const SocialIconLink = styled.a`
  &:focus,
  &:active {
    outline: 1px solid transparent;
    border-radius: 50%;

    & div {
      border-color: ${props => props.theme.text};

      & svg {
        color: ${props => props.theme.text};
      }
    }
  }
`;

//----------------- Hooks -----------------//
const useAnimateCursor = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCursorPos, resetCursorPos, updateCursorType } = useCursor();

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
    updateCursorType('small');
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

//----------------- Main component -----------------//
export const SocialIcon = ({ type }: Social) => {
  const { ref, handleMouseMove, handleMouseLeave } = useAnimateCursor();
  const { t } = useTranslation();

  const types = {
    github: (
      <SocialIconLink target="_blank" href={linkUrls.github} rel="noreferrer">
        <SocialIconWrapper ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <StyledGithubIcon aria-hidden="true" focusable="false" />
          <AccesibleText>{t('common:accesibility.links.github')}</AccesibleText>
        </SocialIconWrapper>
      </SocialIconLink>
    ),
    linkedin: (
      <SocialIconLink target="_blank" href={linkUrls.linkedin} rel="noreferrer">
        <SocialIconWrapper ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <StyledLinkedinIcon aria-hidden="true" focusable="false" />
          <AccesibleText>{t('common:accesibility.links.linkedin')}</AccesibleText>
        </SocialIconWrapper>
      </SocialIconLink>
    ),
    mail: (
      <SocialIconLink target="_blank" href={linkUrls.mail} rel="noreferrer">
        <SocialIconWrapper ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <StyledMailIcon aria-hidden="true" focusable="false" />
          <AccesibleText>{t('common:accesibility.links.email')}</AccesibleText>
        </SocialIconWrapper>
      </SocialIconLink>
    ),
  };

  const socialTypeNotFound = !types[type];

  if (socialTypeNotFound) throw new Error('SocialIcon type doesnt exist');
  return types[type];
};
