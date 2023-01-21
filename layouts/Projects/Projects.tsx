import styled from 'styled-components';
import { sideSpacing } from '@/styles';
import { sectionNames } from '@/constants';
import { useStoreDistance } from '@/hooks';

const Wrapper = styled.section`
  ${sideSpacing}
`;

const Projects = () => {
  const { ref } = useStoreDistance(sectionNames.projects);

  return <Wrapper ref={ref}>Projects section</Wrapper>;
};

export default Projects;
