import { useState, useRef, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

import { useOnClickOutside } from 'usehooks-ts';
import { useCurrentLocale, useCursor } from '@/hooks';

import { DropdownHeader, DropdownList } from './Dropdown';
import Show from '@/components/Show';

import { breakpoints } from '@/constants';

import { SPANISH_OPTION, ENGLISH_OPTION } from './LangBtn.constants';

//---------- Styles ----------//
type WrapperType = {
  mobile: boolean;
};

const Wrapper = styled.div<WrapperType>`
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

//---------- Main component----------//
type LangBtnType = {
  mobile?: boolean;
};

const LangBtn = ({ mobile }: LangBtnType) => {
  const [selectedLang, setSelectedLang] = useState(ENGLISH_OPTION);
  const [isOpen, setIsOpen] = useState(false);

  const elementRef = useRef<HTMLDivElement | null>(null);

  // Cursor info
  const { updateCursorType } = useCursor();

  // Get current locale
  const { changeLocale } = useCurrentLocale();

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

  const handleMouseEnter = (e: MouseEvent) => {
    updateCursorType('small');
    e.preventDefault();
  };

  const handleMouseLeave = () => updateCursorType('hovered');

  return (
    <Wrapper
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      mobile={mobile || false}
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
