import { PropsWithChildren } from 'react';

import styled from 'styled-components';
import { ScrollerMotion } from 'scroller-motion';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import useTranslation from 'next-translate/useTranslation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from '@/components/Head';

import { spacingFlow } from '@/styles';

//----------- Hooks -----------//
const useRemoveScroll = () => {
  // Remove scroll when mount
  useIsomorphicLayoutEffect(() => {
    const htmlNode = document.querySelector('html');
    if (htmlNode) htmlNode.classList.add('remove-scroll');
  }, []);
};

const useHomeLocaleMetadata = () => {
  const { t } = useTranslation();

  const title = t('common:homeMetaData.title');
  const description = t('common:homeMetaData.description');

  return { title, description };
};

//----------- Styles -----------//
const Main = styled.main`
  ${spacingFlow}
`;

const Spacing = styled.div`
  ${spacingFlow}
`;

//----------- Main Component -----------//
const Layout = ({ children }: PropsWithChildren) => {
  const smoothScrollValues = { damping: 120, mass: 1, stiffness: 800 };

  // Locale metadata
  const { title, description } = useHomeLocaleMetadata();

  // Remove scroll when mounts
  useRemoveScroll();

  return (
    <>
      <Head title={title} description={description} />
      <Header />

      <ScrollerMotion spring={{ ...smoothScrollValues }}>
        <Spacing>
          <Main>{children}</Main>
          <Footer />
        </Spacing>
      </ScrollerMotion>
    </>
  );
};

export default Layout;
