import styled from 'styled-components';

import { useTheme, useCursor, useGetDistance } from '@/hooks';
import { sectionNames } from '@/constants';

//---------- Styles ----------//
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  width: max-content;
  height: var(--size-5);

  &:hover {
    cursor: pointer;
  }
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

  // Scroll
  const { goToSection } = useGetDistance();

  //------- Utils -------//
  const handleMouseEnter = () => updateCursorType('logo');
  const handleMouseLeave = () => updateCursorType('hovered');

  const handleClick = () => {
    goToSection(sectionNames.home);

    // If mobile then close menu
    if (closedMenu) closedMenu();
  };

  return (
    <LogoWrapper onClick={handleClick} tabIndex={0}>
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
