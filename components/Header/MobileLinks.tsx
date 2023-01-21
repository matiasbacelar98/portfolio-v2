import Link from 'next/link';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { v4 as uuidv4 } from 'uuid';
import useTranslation from 'next-translate/useTranslation';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from '@/components/Logo';
import LangBtn from '@/components/LangBtn';
import { SocialIcon } from '@/components/Icons';

import { useGetDistance } from 'hooks';
import { formatSectionName } from '@/utils';
import { breakpoints, themeValues as theme, sectionNames } from '@/constants';
import { InnerLink } from '@/styles';

type ClosedMenuType = {
  closedMenu: () => void;
};

//------------- Heading -------------//
const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled(AiOutlineClose)`
  color: ${props => props.theme.text};
  font-size: var(--size-3);
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Heading = ({ closedMenu }: ClosedMenuType) => {
  return (
    <StyledHeading>
      <Logo closedMenu={closedMenu} />

      <CloseBtn onClick={closedMenu}>
        <CloseIcon />
      </CloseBtn>
    </StyledHeading>
  );
};

//------------- Item -------------//
const ItemContent = styled.span`
  color: ${props => props.theme.text};
  font-weight: ${props => props.theme.mediumWeight};
  font-size: var(--size-3);
`;

type ItemType = {
  content: {
    name: string;
    href: string;
  };
  closedMenu: () => void;
};

const Item = ({ content, closedMenu }: ItemType) => {
  const { href, name } = content;

  // Scroll
  const { goToSection } = useGetDistance();
  const sectionName = formatSectionName(name);

  //------ Utils ------//
  const handleClick = () => {
    closedMenu();
    goToSection(sectionNames[sectionName]);
  };

  return (
    <li>
      <Link href={href} passHref>
        <InnerLink size={theme.headingXl} onClick={handleClick}>
          <ItemContent>{name}</ItemContent>
        </InnerLink>
      </Link>
    </li>
  );
};

//------------- List-------------//
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  margin-top: var(--size-5);

  & > * + * {
    margin-top: var(--size-3);
  }
`;

const List = ({ closedMenu }: ClosedMenuType) => {
  const { t } = useTranslation();

  type LinkType = {
    name: string;
    href: string;
  };

  const linksArr: LinkType[] = t(
    'common:homeSection.links',
    { count: [] },
    { returnObjects: true }
  );

  return (
    <StyledList>
      {linksArr.map(link => (
        <Item key={uuidv4()} content={link} closedMenu={closedMenu} />
      ))}
    </StyledList>
  );
};

//------------- SocialIcons -------------//
const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: var(--size-1);
  }
`;

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <StyledIconsWrapper>
        <SocialIcon type="github" isCard />
        <SocialIcon type="linkedin" isCard />
        <SocialIcon type="mail" isCard />
      </StyledIconsWrapper>

      <LangBtn mobile />
    </StyledSocialIcons>
  );
};

//------------- Main component -------------//
const StyledWrapper = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--size-5) var(--size-3);
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  opacity: 0.96;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const MobileLinks = ({ closedMenu }: ClosedMenuType) => {
  const animate = {
    from: () => ({ x: '-100vw' }),
    to: () => ({ x: 0 }),
    exit: () => ({ x: '-100vw' }),
    transition: () => ({ duration: 0.7, type: 'tween', ease: [0.08, 0.82, 0.17, 1] }),
  };

  return (
    <StyledWrapper
      initial={animate.from()}
      animate={animate.to()}
      exit={animate.exit()}
      transition={animate.transition()}
      key="mobile-menu"
    >
      <Heading closedMenu={closedMenu} />
      <List closedMenu={closedMenu} />
      <SocialIcons />
    </StyledWrapper>
  );
};

export default MobileLinks;
