type ShowType = {
  children: React.ReactNode;
  show: boolean;
};

const Show = ({ children, show }: ShowType) => {
  if (!show) return null;
  return <>{children}</>;
};

export default Show;
