import { MouseEvent, useRef } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { HandIcon } from '@/components/Icons';

import { useCursor } from '@/hooks';
import { mouseLeaveFromTheTop } from '@/utils';

import { sideSpacing, Typography, OutterLink } from '@/styles';
import { themeValues as theme, linkUrls, breakpoints } from '@/constants';

const Wrapper = styled.section`
  ${sideSpacing}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`;

const TextWrapper = styled.div`
  max-width: 28.125rem; // 450px

  & > * + * {
    margin-top: var(--size-5);
  }

  @media (min-width: 40.625em /* 650px */) {
    max-width: 37.5rem; // 600px
  }

  @media (min-width: 50em /* 800px */) {
    max-width: 43.75rem; // 700px
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 53.125rem; // 850px

    padding-top: var(--size-7);
    padding-left: var(--size-15);
  }
`;

type HeroWrapperType = {
  spacing?: string;
};

const HeroFlexWrapper = styled.div<HeroWrapperType>`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: ${props => (!props.spacing ? 'var(--size-2)' : props.spacing)};
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & div:first-child {
    margin-right: var(--size-2);
  }
`;

const Hero = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { updateCursorType } = useCursor();
  const { t } = useTranslation();

  //----- Utils -----//
  const handleMouseEnter = () => updateCursorType('hovered');

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
      <TextWrapper>
        <HeroFlexWrapper>
          <Typography as="h1" size={theme.headingXl} weight={theme.lightWeight} mxWidth={'720'}>
            {t('common:homeSection.title.salute')}
          </Typography>

          <HandIcon type="salute" size="lg" />
        </HeroFlexWrapper>

        <Typography as="h1" size={theme.headingXl} weight={theme.lightWeight} mxWidth={'720'}>
          {t('common:homeSection.title.first')}
          <Typography as="span" size={theme.headingXl} weight={theme.semiBoldWeight} highlighted>
            &nbsp;Matias Bacelar
          </Typography>
          ,&nbsp;{t('common:homeSection.title.second')} <br /> {t('common:homeSection.title.third')}
        </Typography>

        <ContactWrapper>
          <HeroFlexWrapper>
            <Typography as="h2" size={theme.headingSm} weight={theme.regularWeight}>
              {t('common:homeSection.cta')}
            </Typography>

            <HandIcon type="point" size="md" />
          </HeroFlexWrapper>

          <OutterLink
            size={theme.headingSm}
            weight={theme.regularWeight}
            href={linkUrls.mail}
            target="_blank"
            rel="noreferrer"
          >
            @matiasbacelar
          </OutterLink>
        </ContactWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

export default Hero;
