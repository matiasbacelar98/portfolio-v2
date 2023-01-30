import { useRef } from 'react';
import styled, { css } from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

import { getBoundingBox } from '@/utils';
import { useCursor } from '@/hooks';
import { AccesibleText } from '@/styles';

const socialIconStyles = css`
  font-size: var(--size-3);
  color: ${props => props.theme.accent};
  transition: color 150ms ease-in-out;
`;

const SocialIconWrapper = styled.div`
  display: grid;
  place-items: center;
  height: var(--size-6);
  border-radius: 50%;
  transition: border 150ms ease-in;

  &:hover {
    cursor: pointer;

    // Change icon
    & svg {
      color: ${props => props.theme.text};
    }
  }
`;

const StyledGithubIcon = styled(FiGithub)`
  ${socialIconStyles}
`;

const StyledOpenIcon = styled(HiOutlineExternalLink)`
  ${socialIconStyles}
`;

const StyledIconLink = styled.a`
  &:focus,
  &:active {
    outline: 0.5px solid transparent;

    & div svg {
      color: ${props => props.theme.text};
    }
  }
`;

type ProjectIconProps = {
  type: 'github' | 'open';
  url: string;
};

export const ProjectIcon = ({ type, url }: ProjectIconProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCursorType, updateCursorPos, resetCursorPos } = useCursor();
  const { t } = useTranslation();

  //----- Utils -----//
  const handleMouseMove = () => {
    // Change cursor style
    updateCursorType('small');

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
    updateCursorType('default');
  };

  const types = {
    github: (
      <StyledIconLink target="_blank" href={url} rel="noreferrer">
        <SocialIconWrapper ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <StyledGithubIcon aria-hidden="true" focusable="false" />
          <AccesibleText>{t('common:accesibility.linksProjects.github')}</AccesibleText>
        </SocialIconWrapper>
      </StyledIconLink>
    ),
    open: (
      <StyledIconLink target="_blank" href={url} rel="noreferrer">
        <SocialIconWrapper ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <StyledOpenIcon aria-hidden="true" focusable="false" />
          <AccesibleText>{t('common:accesibility.linksProjects.live')}</AccesibleText>
        </SocialIconWrapper>
      </StyledIconLink>
    ),
  };

  const socialTypeNotFound = !types[type];

  if (socialTypeNotFound) throw new Error('ProjectIcon type doesnt exist');
  return types[type];
};
