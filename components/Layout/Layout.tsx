import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/constants';
import { ScrollerMotion } from 'scroller-motion';

const AppWrapper = styled.div`
  min-height: 100vh;
  padding: var(--size-5) var(--size-5) var(--size-3);

  @media (min-width: ${breakpoints.md}) {
    padding: var(--size-5) var(--size-10) var(--size-3);
  }
`;

const Layout = ({ children }: PropsWithChildren) => {
  const smoothScrollValues = { damping: 120, mass: 1, stiffness: 800 };

  return (
    <ScrollerMotion spring={{ ...smoothScrollValues }}>
      <AppWrapper>
        {/* HEADER */}
        <main>{children}</main>
        {/* FOOTER */}
      </AppWrapper>
    </ScrollerMotion>
  );
};

export default Layout;
