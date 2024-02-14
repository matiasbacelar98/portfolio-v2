import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import Title from '@/components/Title';

import { useSectionAnim } from '@/hooks';

import { themeValues as theme, breakpoints, linkUrls } from '@/constants';
import { sideSpacing, Typography, AccesibleText } from '@/styles';

const Wrapper = styled(motion.section)`
  ${sideSpacing}

  display: grid;
  place-content: center;
  row-gap: var(--size-4);

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: var(--size-8);
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: var(--size-3);
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.accent};
  border-radius: 50%;
`;

const ContactLink = styled.a`
  &:active,
  &:focus {
    outline: 0.5px solid transparent;

    h2 {
      color: ${props => props.theme.text};
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const { initial, onScroll } = useSectionAnim();

  return (
    <Wrapper
      aria-labelledby="contact-title"
      id="contact"
      initial={initial}
      viewport={{ once: true, amount: 0.9 }}
      whileInView={onScroll}
    >
      <TitleWrapper>
        <Circle />

        <ContactLink target="_blank" href={linkUrls.mail} rel="noreferrer">
          <Title
            content={t('home:footerSection.title')}
            config={{ hover: true, highlighted: true, display: 'inline-block' }}
            accessibleId="contact-title"
          />
          <AccesibleText>{t('common:accesibility.links.email')}</AccesibleText>
        </ContactLink>
      </TitleWrapper>

      <Typography as="p" size={theme.textBase} weight={theme.regularWeight} mxWidth={'300'}>
        {t('home:footerSection.message')}
      </Typography>
    </Wrapper>
  );
};

export default Contact;
