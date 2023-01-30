import { MouseEvent, useRef, useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

import { motion, useAnimationControls } from 'framer-motion';
import styled from 'styled-components';

import { HandIcon } from '@/components/Icons';

import { useCursor } from '@/hooks';
import { mouseLeaveFromTheTop, addScroll } from '@/utils';

import { sideSpacing, Typography, OutterLink, AccesibleText } from '@/styles';
import { themeValues as theme, linkUrls, breakpoints } from '@/constants';

//----------- Styles -----------//
const Wrapper = styled.section`
  ${sideSpacing}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  @media (max-height: ${breakpoints.sm}) {
    padding-top: 5rem;
  }
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

const LinkContent = styled.span`
  &::selection {
    color: ${props => props.theme.text};
    background: ${props => props.theme.accent};
  }
`;

//----------- Hooks -----------//
const useAnimateHero = () => {
  const controls = {
    salute: useAnimationControls(),
    title: useAnimationControls(),
    cta: useAnimationControls(),
  };

  useEffect(() => {
    const animate = (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: delay, type: 'tween', ease: 'circOut', duration: 0.2 },
    });

    const animateHero = async () => {
      const isMobileWidth = window.innerWidth < 768;
      const initialDelay = isMobileWidth ? 1.5 : 2.5;

      await controls.salute.start(animate(initialDelay));
      await controls.title.start(animate(0.2));
      await controls.cta.start(animate(0));
    };

    animateHero();
  }, [controls.cta, controls.salute, controls.title]);

  return controls;
};

//----------- Main component -----------//
const Hero = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { updateCursorType } = useCursor();
  const { t } = useTranslation();
  const controls = useAnimateHero();

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
    <Wrapper
      aria-labelledby="hero-title"
      id="hero"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TextWrapper>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={controls.salute}>
          <HeroFlexWrapper>
            <Typography
              as="span"
              display="inline-block"
              size={theme.headingXl}
              weight={theme.lightWeight}
              mxWidth={'720'}
            >
              {t('home:homeSection.title.salute')}
            </Typography>

            <HandIcon type="salute" size="lg" />
          </HeroFlexWrapper>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={controls.title}>
          <Typography
            as="h1"
            id="hero-title"
            size={theme.headingXl}
            weight={theme.lightWeight}
            mxWidth={'720'}
          >
            {t('home:homeSection.title.first')}
            <Typography as="span" size={theme.headingXl} weight={theme.semiBoldWeight} highlighted>
              &nbsp;Matias Bacelar
            </Typography>
            ,&nbsp;{t('home:homeSection.title.second')} <br /> {t('home:homeSection.title.third')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls.cta}
          onAnimationComplete={addScroll}
        >
          <ContactWrapper>
            <HeroFlexWrapper>
              <Typography as="h2" size={theme.headingSm} weight={theme.regularWeight}>
                {t('home:homeSection.cta')}
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
              <LinkContent aria-hidden="true">@matiasbacelar</LinkContent>
              <AccesibleText>{t('common:accesibility.heroLinkText')}</AccesibleText>
            </OutterLink>
          </ContactWrapper>
        </motion.div>
      </TextWrapper>
    </Wrapper>
  );
};

export default Hero;
