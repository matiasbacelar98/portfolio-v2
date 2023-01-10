import Test from '@/components/Test';

const Home = () => {
  const version = '12.2.0';

  return (
    <div>
      <h1>Custom Next JS & Typescript setup</h1>
      <p>Next Version: {version}</p>

      <Test />
    </div>
  );
};

export default Home;
