import { PropsWithChildren } from 'react';
import { ScrollerMotion } from 'scroller-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }: PropsWithChildren) => {
  const smoothScrollValues = { damping: 120, mass: 1, stiffness: 800 };

  return (
    <ScrollerMotion spring={{ ...smoothScrollValues }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ScrollerMotion>
  );
};

export default Layout;
