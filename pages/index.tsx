import Layout from '@/components/Layout';

// Layouts/Sections
import Hero from '@/layouts/Hero';
import About from '@/layouts/About';
import Experience from '@/layouts/Experience';
import Projects from '@/layouts/Projects';
import Contact from '@/layouts/Contact';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
