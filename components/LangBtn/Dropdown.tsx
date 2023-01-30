import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import Flag from './Flag';

import { AccesibleText } from '@/styles';
import { ENGLISH_OPTION } from './LangBtn.constants';

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

  &:focus {
    border-color: ${props => props.theme.accent};
    outline: 0.5px solid ${props => props.theme.accent};
    border-radius: 4px;
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
  const { t } = useTranslation();
  const openLabel = t('common:accesibility.langBtn.dropdownLabel.open');
  const closedLabel = t('common:accesibility.langBtn.dropdownLabel.close');

  return (
    <StyledDropdownHeader
      onClick={toggleList}
      aria-expanded={isOpen}
      aria-label={isOpen ? closedLabel : openLabel}
    >
      <Flag lang={content} />
      <ArrowIcon aria-hidden="true" focusable="false" turn={isOpen ? 'open' : 'closed'} />
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

  &:focus {
    border-color: ${props => props.theme.accent};
    outline: 0.5px solid ${props => props.theme.accent};
    border-radius: 4px;
  }
`;

type DropdownListType = {
  toggleLang(lang: string): void;
  toggleList: () => void;
  locale: string;
};

export const DropdownList = ({ toggleList, toggleLang, locale }: DropdownListType) => {
  const { t } = useTranslation();

  const langText = {
    es: t('common:accesibility.langBtn.langOptions.spanish'),
    en: t('common:accesibility.langBtn.langOptions.english'),
  };

  const animation = {
    from: () => ({ opacity: 0, y: 5 }),
    to: () => ({ opacity: 1, y: 0, transition: { type: 'tween', duration: 0.2 } }),
  };

  const handleClick = (locale: string) => {
    toggleLang(locale);
    toggleList();
  };

  return (
    <StyledDropdownList initial={animation.from()} animate={animation.to()}>
      <li>
        <DropdownBtn type="button" onClick={() => handleClick(locale)}>
          <Flag lang={locale} />
          <AccesibleText>{locale === ENGLISH_OPTION ? langText.en : langText.es}</AccesibleText>
        </DropdownBtn>
      </li>
    </StyledDropdownList>
  );
};
