import styled from 'styled-components';
import { sideSpacing } from '@/styles';
import { sectionNames } from '@/constants';
import { useStoreDistance } from '@/hooks';

const Wrapper = styled.section`
  ${sideSpacing}
`;

const Experience = () => {
  const { ref } = useStoreDistance(sectionNames.experience);

  return <Wrapper ref={ref}>Experience section</Wrapper>;
};

export default Experience;
