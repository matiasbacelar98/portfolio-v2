import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useGetDistance } from '@/hooks';
import { breakpoints, sectionNames, themeValues as theme } from '@/constants';
import { Typography, keyboardStyles, AccesibleText } from '@/styles';

//------------- Item -------------//
const StyledItem = styled(motion.li)`
  width: max-content;
`;

const StyledItemLink = styled.a`
  padding: 4px var(--size-1);
  transition: color 150ms ease-in-out;
  ${keyboardStyles}

  &:hover {
    cursor: pointer;

    span:first-child {
      color: ${props => props.theme.accent};
    }
  }
`;

type ItemType = {
  content: {
    name: string;
    section: string;
    id: number;
    accesibleText: string;
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
  const { name, section: sectionName, accesibleText } = content;
  const router = useRouter();

  //------- Utils -------//
  const { goToSection } = useGetDistance();

  const isHomePath = () =>
    router.pathname === '/' || router.pathname === '/en' || router.pathname === 'es';

  const redirectToHome = () => {
    return router.push('/');
  };

  const handleClick = (sectionName: string) => {
    if (isHomePath()) return goToSection(sectionNames[sectionName]);
    return redirectToHome();
  };

  return (
    <StyledItem custom={index} initial="hidden" animate="visible" variants={variants}>
      <StyledItemLink href={`#${sectionName}`} onClick={() => handleClick(sectionName)}>
        <Typography aria-hidden="true" size={theme.textBase} weight={theme.regularWeight}>
          {name}
        </Typography>

        <AccesibleText>{accesibleText}</AccesibleText>
      </StyledItemLink>
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
    accesibleText: string;
  };

  const linksArr: LinkType[] = t('common:header.links', { count: [] }, { returnObjects: true });

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
      <List>
        {linksArr.map((link, index) => (
          <Item key={link.id} content={link} index={index} variants={variants} />
        ))}
      </List>
    </nav>
  );
};

export default DesktopLinks;
