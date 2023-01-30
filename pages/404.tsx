import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Layout from '@/components/Layout';

import { fluidValues, addScroll } from '@/utils';
import { Typography, InnerLink, sideSpacing } from '@/styles';
import { themeValues as theme } from '../constants';

//----------- Styles -----------//
const Wrapper = styled(motion.section)`
  display: grid;
  place-content: center;
  min-height: 100vh;

  ${sideSpacing}
  padding-right: calc(var(--size-5) + var(--scrollbar-width)) !important;
`;

const ErrorText = styled.h1`
  font-weight: ${props => props.theme.semiBoldWeight};
  font-size: ${fluidValues(320, 1200, 108, 208)};
  color: ${props => props.theme.accent};
  line-height: 1.2;
  text-align: center;

  &::selection {
    color: ${props => props.theme.text};
    background: ${props => props.theme.accent};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * + * {
    margin-top: var(--size-5);
  }
`;

const LinkContent = styled.span`
  &::selection {
    color: ${props => props.theme.text};
    background: ${props => props.theme.accent};
  }

  &:focus {
    color: ${props => props.theme.text};
  }
`;

//------------ Main component ------------//
const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Layout page="notFound">
      <Wrapper
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          duration: 0.3,
          delay: 2.3,
        }}
        onAnimationComplete={addScroll}
      >
        <ErrorText>404</ErrorText>

        <TextWrapper>
          <Typography as="h2" size={theme.headingXl} weight={theme.semiBoldWeight} center>
            {t('notFound:title')}
          </Typography>

          <Link href="/" passHref>
            <InnerLink size={theme.headingSm} weight={theme.regularWeight} highlighted hover>
              <LinkContent>{t('notFound:cta')}</LinkContent>
            </InnerLink>
          </Link>
        </TextWrapper>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;
