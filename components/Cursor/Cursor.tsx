import { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@/styles';
import { useCursor } from '@/hooks';
import { themeValues as theme, breakpoints } from '@/constants';

//----------- Styles -----------//
const emptyCursor = (clr: string) => css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid ${props => props.theme[clr]};
  }
`;

type StyledCursorType = {
  type: string;
};

const StyledCursor = styled.div<StyledCursorType>`
  display: none;
  position: fixed;
  top: var(--size-41);
  left: var(--size-41);
  background-color: ${props => props.theme.accent};
  width: var(--size-4);
  height: var(--size-4);
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  transition: all 0.1s ease-out;

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }

  // Styles
  ${props =>
    props.type === 'small' &&
    css`
      background-color: transparent;

      // Empty cursor styles
      ${emptyCursor('accent')}
    `}

  ${props =>
    props.type === 'hovered' &&
    css`
      width: var(--size-7);
      height: var(--size-7);
      background-color: transparent;

      // Empty cursor styles
      ${emptyCursor('accent')}
    `}

  ${props =>
    props.type === 'logo' &&
    css`
      width: var(--size-7);
      height: var(--size-7);
      background-color: transparent;

      // Empty cursor styles
      ${emptyCursor('text')}
    `}

  ${props =>
    props.type === 'see' &&
    css`
      width: var(--size-15);
      height: var(--size-15);
      display: grid !important;
      place-items: center;
    `}
`;

const StyledTextWrapper = styled.div<StyledCursorType>`
  display: ${props => (props.type === 'see' ? 'inline-block' : 'none')};
`;

//----------- Hooks -----------//
const useMouseMove = () => {
  const { positions } = useCursor();

  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Passed cursor pos to custom_cursor
  useEffect(() => {
    const xPos = positions[0];
    const yPos = positions[1];
    const isCursorPosForce = xPos !== 0 && yPos !== 0;

    // Force cursor to be in wanted pos
    if (isCursorPosForce) {
      const forceCursorPos = () => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${xPos}px`;
          cursorRef.current.style.top = `${yPos}px`;
        }
      };

      return forceCursorPos();
    }

    // Let user control the cursor pos
    const onMouseMove = (event: MouseEvent): void => {
      const { clientX, clientY } = event;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    // Add event to make custom_cursor follow the cursor
    document.addEventListener('mousemove', onMouseMove);

    // Clean up event
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [positions]);

  return cursorRef;
};

//----------- Main component -----------//
const Cursor = () => {
  const { cursorType } = useCursor();
  const cursorRef = useMouseMove();

  return (
    <StyledCursor ref={cursorRef} type={cursorType}>
      <StyledTextWrapper type={cursorType}>
        <Typography as="span" size={theme.textBase} weight={theme.regularWeight}>
          See
        </Typography>
      </StyledTextWrapper>
    </StyledCursor>
  );
};

export default Cursor;
