import { useState } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { HandIcon } from '@/components/Icons';

import { themeValues as theme } from '@/constants';
import { Typography, AccesibleText } from '@/styles';

const ResumeWrapper = styled.a`
  display: flex;
  align-items: center;
  width: max-content;

  & > * + * {
    margin-left: var(--size-2);
  }

  &:focus,
  &:active {
    outline: 0.5px solid transparent;

    h3 {
      color: ${props => props.theme.text};
    }
  }
`;

const Resume = () => {
  const [isHighlightedActive, setIsHighlightedActive] = useState(true);
  const { t } = useTranslation();

  return (
    <ResumeWrapper
      href={'/CV-Matias-Bacelar.pdf'}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setIsHighlightedActive(false)}
      onMouseLeave={() => setIsHighlightedActive(true)}
    >
      <Typography
        as="h3"
        size={theme.headingSm}
        weight={theme.regularWeight}
        highlighted={isHighlightedActive}
        hover
        aria-hidden="true"
      >
        {t('home:experienceSection.resume')}
      </Typography>

      <HandIcon type="point" size="sm" />

      <AccesibleText>{t('common:accesibility.experienceLinks.resume')}</AccesibleText>
    </ResumeWrapper>
  );
};

export default Resume;
