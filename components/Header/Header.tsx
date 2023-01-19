import { MouseEvent } from 'react';
import styled from 'styled-components';

import { useCursor } from '@/hooks';
import { breakpoints } from '@/constants';

//  Outer components
import Logo from '@/components/Logo';
import LangBtn from '@/components/LangBtn';

// Inner components
import Links from './Links';
import MobileBtn from './MobileBtn';

//----------- Main component -----------//
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--size-5);
  padding-inline: var(--size-3);

  @media (min-width: ${breakpoints.md}) {
    padding-inline: var(--size-5);
  }
`;

const Header = () => {
  const { updateCursorType, resetCursorType } = useCursor();

  //----- Utils -----//
  const handleMouseMove = (e: MouseEvent) => {
    // Ignore this event if preventDefault has been called.
    if (e.defaultPrevented) return;

    updateCursorType('hovered');
  };
  const handleMouseLeave = () => resetCursorType();

  return (
    <StyledHeader onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Logo />
      <Links />
      <LangBtn />
      <MobileBtn />
    </StyledHeader>
  );
};

export default Header;
