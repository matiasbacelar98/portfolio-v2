import NextHead from 'next/head';

type HeadProps = {
  title: string;
  description: string;
};

const Head = ({ title, description }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
    </NextHead>
  );
};

export default Head;
