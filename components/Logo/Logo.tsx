import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useTheme, useCursor, useGetDistance, useCurrentLocale } from '@/hooks';
import { sectionNames } from '@/constants';
import { keyboardStyles } from '@/styles';

//---------- Styles ----------//
const LogoWrapper = styled(motion.a)`
  display: flex;
  align-items: center;
  user-select: none;
  width: max-content;
  height: var(--size-5);

  &:hover {
    cursor: pointer;
  }

  ${keyboardStyles}
`;

const LogoText = styled.span`
  font-size: ${props => props.theme.headingLg};
  font-weight: ${props => props.theme.semiBoldWeight};
  color: ${props => props.theme.text};
`;

const DotArea = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: transparent;
  display: grid;
  place-items: center;
  border: 0;
  padding-top: 0.375rem; // 6px

  &:hover {
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: 1px solid transparent;

    circle {
      fill: ${props => props.theme.text};
    }
  }
`;

const Circle = styled.circle`
  fill: ${props => props.theme.accent};
`;

//---------- Main component ----------//
type LogoType = {
  closedMenu?: { (): void } | null;
};

const Logo = ({ closedMenu = null }: LogoType) => {
  const { toggleTheme } = useTheme();
  const { updateCursorType } = useCursor();
  const { currentLocale } = useCurrentLocale();

  // Scroll
  const { goToSection } = useGetDistance();

  //------- Utils -------//
  const handleMouseEnter = () => updateCursorType('logo');
  const handleMouseLeave = () => updateCursorType('hovered');

  const handleClick = () => {
    // Scroll to section
    goToSection(sectionNames.home);

    // If mobile then close menu
    if (closedMenu) closedMenu();
  };

  return (
    <LogoWrapper
      onClick={handleClick}
      tabIndex={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'circOut', delay: 0.8 }}
      href={`/${currentLocale === 'en' ? '' : 'es'}#hero`}
    >
      <LogoText>Mat</LogoText>

      <DotArea
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleTheme}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          overflow="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle cx="5" cy="5" r="5" />
        </svg>
      </DotArea>

      <LogoText>as</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
