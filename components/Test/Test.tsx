import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme }) => theme.accent};
`;

const Test = () => (
  <div>
    <H1>Test</H1>
  </div>
);

export default Test;
