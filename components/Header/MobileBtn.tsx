import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import { useIsomorphicLayoutEffect } from 'usehooks-ts';

import Show from '@/components/Show';
import MobileLinks from './MobileLinks';

import { breakpoints } from '@/constants';
import { keyboardStyles } from '@/styles';

//-------- Styles --------//
const StyledBtn = styled(motion.button)`
  background-color: transparent;
  border: 0;
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
  }

  ${keyboardStyles}

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const HamburguerIcon = styled(HiOutlineMenuAlt4)`
  color: ${props => props.theme.text};
  font-size: var(--size-3);
`;

//-------- Hooks --------//
type ToggleMenuType = (isOpen: boolean) => void;

const useToggleWindowScroll: ToggleMenuType = isOpen => {
  useIsomorphicLayoutEffect(() => {
    const htmlNode = document.querySelector('html');

    if (htmlNode && !isOpen) htmlNode.classList.remove('remove-scroll');
    if (htmlNode && isOpen) htmlNode.classList.add('remove-scroll');
  }, [isOpen]);
};

type CloseMenuType = (isOpen: boolean, setIsOpen: (val: boolean) => void) => void;

const useCloseMenuOnDesktop: CloseMenuType = (isOpen, setIsOpen) => {
  useEffect(() => {
    const closeMobileMenu = () => {
      const isMobileRes = window.innerWidth < 768;
      if (isMobileRes) return;

      // Close menu and apply scroll
      const htmlNode = document.querySelector('html');

      if (htmlNode && isOpen) {
        htmlNode.classList.remove('remove-scroll');
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', closeMobileMenu, false);

    return () => window.removeEventListener('resize', closeMobileMenu, false);
  }, [isOpen, setIsOpen]);
};

//-------- Main component --------//
const MobileBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle scroll when menu opens or close
  useToggleWindowScroll(isOpen);

  // Close menu if screen is bigger than tablet
  useCloseMenuOnDesktop(isOpen, setIsOpen);

  //----- Utils -----//
  const openMenu = () => setIsOpen(true);
  const closedMenu = () => setIsOpen(false);

  return (
    <>
      <StyledBtn
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, ease: 'circOut', duration: 0.2 }}
        onClick={openMenu}
      >
        <HamburguerIcon />
      </StyledBtn>

      {/*------ MobileLinks ------*/}
      <Show show={isOpen}>
        <MobileLinks closedMenu={closedMenu} />
      </Show>
    </>
  );
};

export default MobileBtn;
