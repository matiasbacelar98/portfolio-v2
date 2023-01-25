import styled from 'styled-components';

import { useCursor } from '@/hooks';
import { sideSpacing } from '@/styles';

//  Outer components
import Logo from '@/components/Logo';
import LangBtn from '@/components/LangBtn';

// Inner components
import DesktopLinks from './DesktopLinks';
import MobileBtn from './MobileBtn';

//----------- Main component -----------//
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--size-5);
  position: absolute;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  ${sideSpacing}
`;

const Header = () => {
  const { updateCursorType } = useCursor();

  //----- Utils -----//
  const handleMouseEnter = () => updateCursorType('hovered');
  const handleMouseLeave = () => updateCursorType('hovered');

  return (
    <StyledHeader onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Logo />
      <DesktopLinks />
      <LangBtn />
      <MobileBtn />
    </StyledHeader>
  );
};

export default Header;
