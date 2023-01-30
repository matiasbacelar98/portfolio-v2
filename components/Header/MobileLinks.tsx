import { motion } from 'framer-motion';
import styled from 'styled-components';

import useTranslation from 'next-translate/useTranslation';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from '@/components/Logo';
import LangBtn from '@/components/LangBtn';
import { SocialIcon } from '@/components/Icons';

import { useGetDistance } from 'hooks';
import { breakpoints, sectionNames } from '@/constants';
import { keyboardStyles, AccesibleText } from '@/styles';

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

  ${keyboardStyles}
`;

type HeadingPropsType = {
  closedMenu: () => void;
  isMenuOpen: boolean;
};

const Heading = ({ closedMenu, isMenuOpen }: HeadingPropsType) => {
  return (
    <StyledHeading>
      <Logo closedMenu={closedMenu} />

      <CloseBtn aria-expanded={isMenuOpen} aria-label="Closed navigation menu" onClick={closedMenu}>
        <CloseIcon aria-hidden="true" focusable="false" />
      </CloseBtn>
    </StyledHeading>
  );
};

//------------- Item -------------//
type ItemContentType = {
  isActive?: boolean;
};

const StyledItemLink = styled.a`
  ${keyboardStyles}
`;

const ItemContent = styled.span<ItemContentType>`
  color: ${props => (props.isActive ? props.theme.accent : props.theme.text)};
  font-weight: ${props => props.theme.mediumWeight};
  font-size: var(--size-3);
`;

type ItemType = {
  content: {
    name: string;
    section: string;
    id: string;
  };
  closedMenu: () => void;
};

const Item = ({ content, closedMenu }: ItemType) => {
  const { name, section: sectionName } = content;

  // Scroll
  const { goToSection } = useGetDistance();

  //------ Utils ------//
  const handleClick = () => {
    closedMenu();
    goToSection(sectionNames[sectionName]);
  };

  return (
    <li>
      <StyledItemLink href={`#${sectionName}`} onClick={handleClick}>
        <ItemContent aria-hidden="true">{name}</ItemContent>
        <AccesibleText>{`go to section ${sectionName}`}</AccesibleText>
      </StyledItemLink>
    </li>
  );
};

//------------- List-------------//
const StyledNav = styled.nav`
  flex-grow: 2;
  margin-top: var(--size-5);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: var(--size-3);
  }
`;

type ListPropsType = {
  closedMenu: () => void;
};

const List = ({ closedMenu }: ListPropsType) => {
  const { t } = useTranslation();

  type LinkType = {
    name: string;
    section: string;
    id: string;
  };

  const linksArr: LinkType[] = t('common:header.links', { count: [] }, { returnObjects: true });

  return (
    <StyledNav>
      <StyledList>
        {linksArr.map(link => (
          <Item key={link.id} content={link} closedMenu={closedMenu} />
        ))}
      </StyledList>
    </StyledNav>
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
        <SocialIcon type="github" />
        <SocialIcon type="linkedin" />
        <SocialIcon type="mail" />
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
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--size-5) var(--size-3);
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  opacity: 0.9;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

type MobileLinksProps = {
  closedMenu: () => void;
  isMenuOpen: boolean;
};

const MobileLinks = ({ closedMenu, isMenuOpen }: MobileLinksProps) => {
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
      <Heading closedMenu={closedMenu} isMenuOpen={isMenuOpen} />
      <List closedMenu={closedMenu} />
      <SocialIcons />
    </StyledWrapper>
  );
};

export default MobileLinks;
