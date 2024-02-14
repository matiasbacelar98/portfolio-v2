import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useTheme, useGetDistance, useCurrentLocale } from '@/hooks';
import { sectionNames } from '@/constants';
import { keyboardStyles, AccesibleText } from '@/styles';

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

  &:focus {
    outline: 1px solid ${props => props.theme.accent};
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
  const { t } = useTranslation();

  const { toggleTheme } = useTheme();
  const { currentLocale } = useCurrentLocale();

  // Scroll
  const { goToSection } = useGetDistance();

  //------- Utils -------//
  const handleClick = () => {
    // Scroll to section
    goToSection(sectionNames.home);

    // If mobile then close menu
    if (closedMenu) closedMenu();
  };

  return (
    <LogoWrapper
      tabIndex={0}
      href={`/${currentLocale === 'en' ? '' : 'es'}#hero`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'circOut', delay: 0.8 }}
      onClick={handleClick}
    >
      <AccesibleText>{t('common:accesibility.logo.title')}</AccesibleText>

      <LogoText aria-hidden="true">Mat</LogoText>

      <DotArea
        onClick={e => {
          toggleTheme();
          e.preventDefault();
        }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          overflow="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <Circle cx="5" cy="5" r="5" />
        </svg>

        <AccesibleText>{t('common:accesibility.logo.theme')}</AccesibleText>
      </DotArea>

      <LogoText aria-hidden="true">as</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
