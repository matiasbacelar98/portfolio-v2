import { PropsWithChildren } from 'react';

import styled from 'styled-components';
import { ScrollerMotion } from 'scroller-motion';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { spacingFlow } from '@/styles';

//----------- Main Component -----------//
const Main = styled.main`
  ${spacingFlow}
`;

const Spacing = styled.div`
  ${spacingFlow}
`;

const Layout = ({ children }: PropsWithChildren) => {
  const smoothScrollValues = { damping: 120, mass: 1, stiffness: 800 };

  // Remove scroll when mount
  useIsomorphicLayoutEffect(() => {
    const htmlNode = document.querySelector('html');
    if (htmlNode) htmlNode.classList.add('remove-scroll');
  }, []);

  return (
    <>
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
