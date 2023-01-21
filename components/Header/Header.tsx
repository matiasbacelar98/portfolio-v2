import { MouseEvent } from 'react';
import styled from 'styled-components';

import { useCursor } from '@/hooks';
import { sideSpacing } from '@/styles';

//  Outer components
import Logo from '@/components/Logo';
import LangBtn from '@/components/LangBtn';

// Inner components
import Links from './DesktopLinks';
import MobileBtn from './MobileBtn';

//----------- Main component -----------//
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--size-5);

  ${sideSpacing}
`;

const Header = () => {
  const { updateCursorType } = useCursor();

  //----- Utils -----//
  const handleMouseEnter = (e: MouseEvent) => {
    // Ignore this event if preventDefault has been called.
    if (e.defaultPrevented) return;

    updateCursorType('hovered');
  };
  const handleMouseLeave = () => updateCursorType('hovered');

  return (
    <StyledHeader onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Logo />
      <Links />
      <LangBtn />
      <MobileBtn />
    </StyledHeader>
  );
};

export default Header;
