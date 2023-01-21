import styled from 'styled-components';
import { sideSpacing } from '@/styles';

const Wrapper = styled.section`
  ${sideSpacing}
  padding-bottom: var(--size-20);
  text-align: center;

  border: 1px solid blue;
`;

const Contact = () => {
  return <Wrapper>contact section</Wrapper>;
};

export default Contact;
