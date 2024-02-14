import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ScrollerMotion } from 'scroller-motion';

import useTranslation from 'next-translate/useTranslation';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from '@/components/Head';
import Show from '@/components/Show';

import { spacingFlow } from '@/styles';

//----------- Hooks -----------//
const useRemoveScroll = () => {
  // Remove scroll when mount
  useIsomorphicLayoutEffect(() => {
    const htmlNode = document.querySelector('html');
    if (htmlNode) htmlNode.classList.add('remove-scroll');
  }, []);
};

const useLocaleMetadata = (page: string) => {
  const { t } = useTranslation();

  type PageType = {
    [key: string]: string;
  };

  const pages: PageType = {
    home: 'home',
    notFound: 'notFound',
  };

  if (!pages[page]) throw new Error('The metadata for this page doesnt exists');

  const title = t(`${pages[page]}:metadata.title`);
  const description = t(`${pages[page]}:metadata.description`);

  return { title, description };
};

const useIsHomePage = () => {
  const { pathname } = useRouter();
  const isHomePath = pathname === '/' || pathname === '/es' || pathname === '/en';
  return isHomePath;
};

//----------- Styles -----------//
const Main = styled.main`
  ${spacingFlow}
`;

const Spacing = styled.div`
  ${spacingFlow}
`;

//----------- Main Component -----------//
type LayoutProps = {
  children: React.ReactNode;
  page: string;
};

const Layout = ({ children, page }: LayoutProps) => {
  const smoothScrollValues = { damping: 120, mass: 1, stiffness: 800 };
  const isHomePath = useIsHomePage();

  // Locale metadata
  const { title, description } = useLocaleMetadata(page);

  // Remove scroll when mounts
  useRemoveScroll();

  return (
    <React.Fragment>
      <Head title={title} description={description} />

      <Header />

      <ScrollerMotion spring={{ ...smoothScrollValues }}>
        <Spacing>
          <div id="content">
            <Main>{children}</Main>
          </div>

          <Show show={isHomePath}>
            <Footer />
          </Show>
        </Spacing>

        {/*-------- Footer for 404 -------- */}
        <Show show={!isHomePath}>
          <Footer />
        </Show>
      </ScrollerMotion>
    </React.Fragment>
  );
};

export default Layout;
