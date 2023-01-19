import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Flag from './Flag';

//------------ DropdownHeader ------------//
const StyledDropdownHeader = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  width: var(--size-10);

  &:hover {
    cursor: pointer;
  }
`;

type ArrowIconType = {
  turn: string;
};

const ArrowIcon = styled(MdOutlineKeyboardArrowDown)<ArrowIconType>`
  position: relative;
  color: ${props => props.theme.text};
  margin-left: 0.25rem; // 4px
  transition: all 150ms ease-out;
  transform: ${props => (props.turn === 'open' ? 'rotate(180deg)' : 'rotate(0)')};
`;

type DropdownHeaderType = {
  toggleList(): void;
  content: string;
  isOpen: boolean;
};

export const DropdownHeader = ({ toggleList, content, isOpen }: DropdownHeaderType) => {
  return (
    <StyledDropdownHeader onClick={toggleList}>
      <Flag lang={content} />
      <ArrowIcon turn={isOpen ? 'open' : 'closed'} />
    </StyledDropdownHeader>
  );
};

//------------ DropdownList ------------//
const StyledDropdownList = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  width: var(--size-10);

  & > * + * {
    margin-top: var(--size-1);
  }
`;

const DropdownBtn = styled.button`
  background-color: transparent;
  color: ${props => props.theme.text};
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

type DropdownListType = {
  toggleLang(lang: string): void;
  locale: string;
};

export const DropdownList = ({ toggleLang, locale }: DropdownListType) => {
  const animation = {
    from: () => ({ opacity: 0, y: 5 }),
    to: () => ({ opacity: 1, y: 0, transition: { type: 'tween', duration: 0.2 } }),
  };

  return (
    <StyledDropdownList initial={animation.from()} animate={animation.to()}>
      <li>
        <DropdownBtn type="button" onClick={() => toggleLang(locale)}>
          <Flag lang={locale} />
        </DropdownBtn>
      </li>
    </StyledDropdownList>
  );
};
