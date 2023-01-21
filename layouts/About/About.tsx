import styled from 'styled-components';
import { sideSpacing } from '@/styles';
import { sectionNames } from '@/constants';
import { useStoreDistance } from '@/hooks';

const Wrapper = styled.section`
  ${sideSpacing}
`;

const About = () => {
  const { ref } = useStoreDistance(sectionNames.about);

  return <Wrapper ref={ref}>About section</Wrapper>;
};

export default About;
