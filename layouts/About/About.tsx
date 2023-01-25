import { MouseEvent } from 'react';
import styled from 'styled-components';

import useTranslation from 'next-translate/useTranslation';

import AboutContent from './AboutContent';
import AboutIcons from './AboutIcons';

import Title from '@/components/Title';

import { sideSpacing } from '@/styles';
import { sectionNames, breakpoints } from '@/constants';
import { useStoreDistance, useCursor } from '@/hooks';
import { mouseLeaveFromTheTop } from '@/utils';

const Wrapper = styled.section`
  ${sideSpacing}

  & > * + * {
    margin-top: var(--size-5);
  }
`;

const SectionsWrapper = styled.div`
  display: grid;
  row-gap: var(--size-5);

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--size-6);
    row-gap: 0;
  }
`;

const About = () => {
  const { t } = useTranslation();
  const { ref } = useStoreDistance(sectionNames.about);
  const { updateCursorType } = useCursor();

  //----- Utils -----//
  const handleMouseEnter = () => updateCursorType('default');

  const handleMouseLeave = (e: MouseEvent) => {
    // If reference is not ready don't execute
    if (!ref.current) return;

    // If mouse left from the top
    if (mouseLeaveFromTheTop(e, ref.current)) return updateCursorType('hovered');

    // If mouse left from the bottom
    return updateCursorType('default');
  };

  return (
    <Wrapper ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Title content={t('common:aboutSection.title')} line />

      <SectionsWrapper>
        <AboutContent />
        <AboutIcons />
      </SectionsWrapper>
    </Wrapper>
  );
};

export default About;
