import { AnimatePresence } from 'framer-motion';

type ShowType = {
  children: React.ReactNode;
  show: boolean;
};

const Show = ({ children, show }: ShowType) => {
  return <AnimatePresence>{show ? children : null}</AnimatePresence>;
};

export default Show;
