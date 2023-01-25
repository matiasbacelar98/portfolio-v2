import styled from 'styled-components';
import Card from '@/components/Card';
import { breakpoints } from '@/constants';

const AboutIconsWrapper = styled.div`
  display: grid;
  row-gap: var(--size-4);
  width: max-content;
  height: max-content;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--size-6);

    // TS card
    & article:nth-last-child(1) {
      grid-column: 1/-1;
      justify-self: center;
    }
  }
`;

const AboutIcons = () => {
  return (
    <AboutIconsWrapper>
      <Card type="react" />
      <Card type="node" />
      <Card type="typescript" />
    </AboutIconsWrapper>
  );
};

export default AboutIcons;
