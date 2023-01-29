import { useState } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { HandIcon } from '@/components/Icons';

import { useCursor } from '@/hooks';
import { themeValues as theme } from '@/constants';
import { Typography } from '@/styles';

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
  const { updateCursorType } = useCursor();
  const { t } = useTranslation();

  //------ Utils ------//
  type handleAnimationType = (cursorType: string, hoverStatus: boolean) => void;

  const handleAnimation: handleAnimationType = (cursorType, hoverStatus) => {
    updateCursorType(cursorType);
    setIsHighlightedActive(hoverStatus);
  };

  return (
    <ResumeWrapper
      href={'/CV-Matias-Bacelar.pdf'}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => handleAnimation('hovered', false)}
      onMouseLeave={() => handleAnimation('default', true)}
    >
      <Typography
        as="h3"
        size={theme.headingSm}
        weight={theme.regularWeight}
        highlighted={isHighlightedActive}
        hover
      >
        {t('home:experienceSection.resume')}
      </Typography>

      <HandIcon type="point" size="sm" />
    </ResumeWrapper>
  );
};

export default Resume;
