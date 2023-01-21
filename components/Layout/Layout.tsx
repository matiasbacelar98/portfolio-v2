import { PropsWithChildren } from 'react';
import { ScrollerMotion } from 'scroller-motion';
import styled from 'styled-components';

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

  return (
    <ScrollerMotion spring={{ ...smoothScrollValues }}>
      <Spacing>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Spacing>
    </ScrollerMotion>
  );
};

export default Layout;
