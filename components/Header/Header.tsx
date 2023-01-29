import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useDebounce } from 'usehooks-ts';

import SkipLink from '@/components/SkipLink';

import { useCursor, useTheme, useGetScrollbarWidth } from '@/hooks';

//  Outer components
import Logo from '@/components/Logo';
import LangBtn from '@/components/LangBtn';

// Inner components
import DesktopLinks from './DesktopLinks';
import MobileBtn from './MobileBtn';

import { breakpoints } from '@/constants';

//----------- Styles -----------//
const StyledHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  padding: var(--size-5) var(--size-3);
  padding-right: calc(var(--size-3) + var(--scrollbar-width)) !important;

  @media (min-width: ${breakpoints.md}) {
    padding-left: var(--size-5);
    padding-right: calc(var(--size-5) + var(--scrollbar-width)) !important;
  }
`;

//----------- Hooks -----------//
const useAnimateOnScroll = () => {
  const [prevYPos, setPrevYpos] = useState(0);
  const debouncePrevYPos = useDebounce(prevYPos, 20);
  const { theme } = useTheme();

  const headerRef = useRef<HTMLElement>(null);
  const animationControls = useAnimation();

  // Show/hide header on scroll
  useEffect(() => {
    const handleScrollAnim = () => {
      if (!headerRef.current) return;

      const currentYPos = window.scrollY;
      const headerHeight = headerRef.current.offsetHeight;

      // Show header when scroll up
      if (currentYPos < debouncePrevYPos) {
        animationControls.start({
          y: 0,
          backgroundColor: theme === 'dark' ? '#121212' : '#FFF',
          boxShadow: '0px 10px 10px -15px #000',
          opacity: 0.95,
          transition: {
            duration: 0.25,
            ease: [0.1, 0.25, 0.3, 1],
          },
        });
      }

      // Hide header when scroll down
      if (currentYPos > headerHeight / 2 && currentYPos > debouncePrevYPos) {
        animationControls.start({
          y: -headerHeight,
          boxShadow: 'none',
          transition: {
            duration: 0.25,
            ease: [0.1, 0.25, 0.3, 1],
          },
        });
      }

      if (currentYPos === 0) {
        animationControls.start({
          y: 0,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          transition: {
            duration: 0.3,
            ease: [0.1, 0.25, 0.3, 1],
          },
        });
      }

      // Save current yPos
      setPrevYpos(currentYPos);
    };

    // Add event
    window.addEventListener('scroll', handleScrollAnim);

    // Clear event
    return () => window.removeEventListener('scroll', handleScrollAnim);
  }, [debouncePrevYPos, animationControls, theme]);

  // If scroll is bigger than 0 when mounting add black bg
  useEffect(() => {
    if (window.scrollY > 0) {
      animationControls.start({
        backgroundColor: 'transparent',
      });
    }
  }, [animationControls]);

  return {
    ref: headerRef,
    controls: animationControls,
  };
};

//----------- Main component -----------//
const Header = () => {
  const { updateCursorType } = useCursor();
  const { ref, controls } = useAnimateOnScroll();

  useGetScrollbarWidth();

  //----- Utils -----//
  const handleMouseEnter = () => updateCursorType('hovered');
  const handleMouseLeave = () => updateCursorType('hovered');

  return (
    <StyledHeader
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      ref={ref}
    >
      <SkipLink />
      <Logo />
      <DesktopLinks />
      <LangBtn mobile={false} />
      <MobileBtn />
    </StyledHeader>
  );
};

export default Header;
