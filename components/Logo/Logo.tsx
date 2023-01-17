import { useRef } from 'react';
import styled from 'styled-components';
import { useTheme, useCursor } from '@/hooks';
import { getBoundingBox } from '@/utils';

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

const DotArea = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & button {
    background-color: transparent;
    display: grid;
    place-items: center;
    border: 0;
    padding-top: var(--size-1);
  }
`;

const Circle = styled.circle`
  fill: ${props => props.theme.accent};
`;

//---------- Hooks ----------//
const useAnimateCursor = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCursorPos, resetCursorPos, updateCursorType, resetCursorType } = useCursor();

  //----- Utils -----//
  const handleMouseMove = () => {
    // Use this because i'am sure the value is of the expected type.
    const element: HTMLDivElement = ref.current as HTMLDivElement;
    const coordinates = getBoundingBox(element);

    // Take element coordinates
    const { xCenter, yCenter } = coordinates;

    // Center custom_cursor relative to the element
    updateCursorPos(xCenter, yCenter);

    // Change cursor style
    updateCursorType('logo');
  };

  const handleMouseLeave = () => {
    resetCursorPos();
    resetCursorType();
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

//---------- Main component ----------//
const Logo = () => {
  const { ref, handleMouseMove, handleMouseLeave } = useAnimateCursor();
  const { toggleTheme } = useTheme();

  return (
    <LogoWrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <LogoText>Mat</LogoText>
      <DotArea ref={ref}>
        <button onClick={toggleTheme}>
          <svg
            width="9"
            height="9"
            overflow="visible"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx="4" cy="4" r="4" />
          </svg>
        </button>
      </DotArea>
      <LogoText>as</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
