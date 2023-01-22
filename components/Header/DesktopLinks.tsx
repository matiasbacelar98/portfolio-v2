import useTranslation from 'next-translate/useTranslation';

import styled from 'styled-components';

import { useCursor, useGetDistance } from '@/hooks';
import { breakpoints, sectionNames, themeValues as theme } from '@/constants';
import { Typography } from '@/styles';

//------------- Item -------------//
const StyledItem = styled.li`
  width: max-content;

  button {
    padding: 4px var(--size-1);
    background-color: transparent;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

type ItemType = {
  content: {
    name: string;
    section: string;
    id: number;
  };
};

const Item = ({ content }: ItemType) => {
  const { name, section: sectionName } = content;

  const { goToSection } = useGetDistance();

  const handleClick = () => goToSection(sectionNames[sectionName]);

  return (
    <StyledItem>
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

  const linksArr: LinkType[] = t(
    'common:homeSection.links',
    { count: [] },
    { returnObjects: true }
  );

  //--------- Cursor animation ---------//
  const { updateCursorType } = useCursor();

  const handleMouseLeave = () => updateCursorType('hovered');
  const handleMouseEnter = () => updateCursorType('small');

  return (
    <List onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      {linksArr.map(link => (
        <Item content={link} key={link.id} />
      ))}
    </List>
  );
};

export default DesktopLinks;
