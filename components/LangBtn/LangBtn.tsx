import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { useOnClickOutside } from 'usehooks-ts';
import { useCurrentLocale, useCursor } from '@/hooks';

import { DropdownHeader, DropdownList } from './Dropdown';
import Show from '@/components/Show';

import { breakpoints } from '@/constants';

import { SPANISH_OPTION, ENGLISH_OPTION } from './LangBtn.constants';

//---------- Main component----------//
type WrapperType = {
  mobile: boolean | undefined;
};

const Wrapper = styled(motion.div)<WrapperType>`
  display: ${props => (props.mobile ? 'block' : 'none')};

  ${props =>
    props.mobile &&
    css`
      position: relative;
      width: max-content;
    `}

  @media (min-width: ${breakpoints.md}) {
    display: block;
    position: relative;
    width: max-content;
  }
`;

type LangBtnType = {
  mobile: boolean;
};

const LangBtn = ({ mobile }: LangBtnType) => {
  // Get current locale
  const { changeLocale, currentLocale } = useCurrentLocale();

  const [selectedLang, setSelectedLang] = useState(currentLocale || ENGLISH_OPTION);
  const [isOpen, setIsOpen] = useState(false);

  const elementRef = useRef<HTMLDivElement | null>(null);

  // Cursor info
  const { updateCursorType } = useCursor();

  // Closed dropdown
  useOnClickOutside(elementRef, () => setIsOpen(false));

  //-------- Utils --------//
  // Open lang options
  const toggleList = () => setIsOpen(prev => !prev);

  // Change language
  const toggleLang = (lang: string): void => {
    changeLocale(lang);
    setSelectedLang(lang);
  };

  const handleMouseEnter = () => updateCursorType('small');
  const handleMouseLeave = () => updateCursorType('hovered');

  return (
    <Wrapper
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      mobile={mobile ? true : undefined}
      initial={{ opacity: mobile ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'circOut', delay: 2 }}
    >
      <DropdownHeader content={selectedLang} toggleList={toggleList} isOpen={isOpen} />

      <Show show={isOpen}>
        <DropdownList
          toggleLang={toggleLang}
          locale={selectedLang === ENGLISH_OPTION ? SPANISH_OPTION : ENGLISH_OPTION}
        />
      </Show>
    </Wrapper>
  );
};

export default LangBtn;
