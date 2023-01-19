import { MouseEvent } from 'react';
import styled from 'styled-components';
import { useTheme, useCursor } from '@/hooks';

//---------- Styles ----------//
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  width: max-content;
  height: var(--size-5);
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
const Logo = () => {
  const { toggleTheme } = useTheme();
  const { updateCursorType, resetCursorType } = useCursor();

  const handleMouseMove = (e: MouseEvent) => {
    updateCursorType('logo');
    e.preventDefault();
  };
  const handleMouseLeave = () => resetCursorType();

  return (
    <LogoWrapper>
      <LogoText>Mat</LogoText>
      <DotArea onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={toggleTheme}>
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
