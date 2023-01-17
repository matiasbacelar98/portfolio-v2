import { useState, useRef } from 'react';
import styled from 'styled-components';

import { useOnClickOutside } from 'usehooks-ts';
import { useCurrentLocale, useCursor } from '@/hooks';

import Show from '@/components/Show';
import { DropdownHeader, DropdownList } from './Dropdown';

import { SPANISH_OPTION, ENGLISH_OPTION } from './LangBtn.constants';

//---------- Styles ----------//
const Wrapper = styled.div`
  width: max-content;
`;

//---------- Main component----------//
const LangBtn = () => {
  const [selectedLang, setSelectedLang] = useState(ENGLISH_OPTION);
  const [isOpen, setIsOpen] = useState(false);

  const elementRef = useRef<HTMLDivElement | null>(null);

  // Cursor info
  const { updateCursorType, resetCursorType } = useCursor();

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

  return (
    <Wrapper
      ref={elementRef}
      onMouseMove={() => updateCursorType('small')}
      onMouseLeave={resetCursorType}
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
