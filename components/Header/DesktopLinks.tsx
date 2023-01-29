import useTranslation from 'next-translate/useTranslation';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useCursor, useGetDistance } from '@/hooks';
import { breakpoints, sectionNames, themeValues as theme } from '@/constants';
import { Typography, keyboardStyles } from '@/styles';

//------------- Item -------------//
const StyledItem = styled(motion.li)`
  width: max-content;

  button {
    padding: 4px var(--size-1);
    background-color: transparent;
    border: 0;

    &:hover {
      cursor: pointer;
    }

    ${keyboardStyles}
  }
`;

type ItemType = {
  content: {
    name: string;
    section: string;
    id: number;
  };
  index: number;
  variants: {
    visible: (custom: number) => {
      opacity: number;
      y: number;
      transition: { delay: number };
    };
    hidden: () => {
      opacity: number;
      y: number;
    };
  };
};

const Item = ({ content, index, variants }: ItemType) => {
  const { name, section: sectionName } = content;

  //------- Utils -------//
  const { goToSection } = useGetDistance();
  const handleClick = () => goToSection(sectionNames[sectionName]);

  return (
    <StyledItem custom={index} initial="hidden" animate="visible" variants={variants}>
      <button onClick={handleClick}>
        <Typography size={theme.textBase} weight={theme.regularWeight}>
          {name}
        </Typography>
      </button>
    </StyledItem>
  );
};

//------------- Main component -------------//
const List = styled.ul`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    width: max-content;

    & > * + * {
      margin-left: var(--size-4);
    }
  }
`;

const DesktopLinks = () => {
  const { t } = useTranslation();

  type LinkType = {
    name: string;
    section: string;
    id: number;
  };

  const linksArr: LinkType[] = t('common:header.links', { count: [] }, { returnObjects: true });

  //--------- Cursor animation ---------//
  const { updateCursorType } = useCursor();

  const handleMouseLeave = () => updateCursorType('hovered');
  const handleMouseEnter = () => updateCursorType('small');

  const variants = {
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.12 + 1.1, duration: 0.4, ease: 'circOut' },
    }),
    hidden: () => ({
      y: -35,
      opacity: 0,
    }),
  };

  return (
    <nav>
      <List onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        {linksArr.map((link, index) => (
          <Item key={link.id} content={link} index={index} variants={variants} />
        ))}
      </List>
    </nav>
  );
};

export default DesktopLinks;
