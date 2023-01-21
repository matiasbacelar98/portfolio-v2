import { MouseEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import { v4 as uuidv4 } from 'uuid';
import useTranslation from 'next-translate/useTranslation';

import { useCursor, useGetDistance } from '@/hooks';
import { breakpoints, sectionNames } from '@/constants';
import { InnerLink } from '@/styles';

//------------- Item -------------//
const StyledItem = styled.li`
  width: max-content;
`;

type ItemType = {
  content: {
    name: string;
    href: string;
    section: string;
  };
};

const Item = ({ content }: ItemType) => {
  const { href, name, section: sectionName } = content;

  // Url
  const { asPath } = useRouter();
  const isActive = asPath === content.href;

  // Scroll
  const { goToSection } = useGetDistance();

  return (
    <StyledItem>
      <Link href={href} passHref>
        <InnerLink active={isActive} onClick={() => goToSection(sectionNames[sectionName])}>
          {name}
        </InnerLink>
      </Link>
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

const Links = () => {
  const { t } = useTranslation();

  type LinkType = {
    name: string;
    href: string;
    section: string;
  };

  const linksArr: LinkType[] = t(
    'common:homeSection.links',
    { count: [] },
    { returnObjects: true }
  );

  //--------- Cursor animation ---------//
  const { updateCursorType } = useCursor();

  const handleMouseEnter = (e: MouseEvent) => {
    updateCursorType('small');
    e.preventDefault();
  };

  const handleMouseLeave = () => updateCursorType('hovered');

  return (
    <List onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {linksArr.map(link => (
        <Item key={uuidv4()} content={link} />
      ))}
    </List>
  );
};

export default Links;
