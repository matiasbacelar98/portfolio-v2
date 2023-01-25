import { MouseEvent, useRef } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import Title from '@/components/Title';

import { useCursor } from '@/hooks';
import { mouseLeaveFromTheTop } from '@/utils';
import { themeValues as theme, breakpoints, linkUrls } from '@/constants';
import { sideSpacing, Typography } from '@/styles';

const Wrapper = styled.section`
  ${sideSpacing}

  display: grid;
  place-content: center;
  row-gap: var(--size-4);

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: var(--size-8);
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: var(--size-3);
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.accent};
  border-radius: 50%;
`;

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { updateCursorType } = useCursor();
  const { t } = useTranslation();

  //----- Utils -----//
  const handleMouseEnter = () => updateCursorType('hovered');

  const handleMouseLeave = (e: MouseEvent) => {
    // If reference is not ready don't execute
    if (!ref.current) return;

    // If mouse left from the top
    if (mouseLeaveFromTheTop(e, ref.current)) return updateCursorType('default');

    // If mouse left from the bottom
    return updateCursorType('small');
  };

  return (
    <Wrapper ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <TitleWrapper>
        <Circle />

        <a target="_blank" href={linkUrls.mail} rel="noreferrer">
          <Title
            content={t('common:footerSection.title')}
            config={{ hover: true, highlighted: true, display: 'inline-block' }}
          />
        </a>
      </TitleWrapper>

      <Typography as="p" size={theme.textBase} weight={theme.regularWeight} mxWidth={'300'}>
        {t('common:footerSection.message')}
      </Typography>
    </Wrapper>
  );
};

export default Contact;
