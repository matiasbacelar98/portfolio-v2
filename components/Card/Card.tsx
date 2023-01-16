import styled from 'styled-components';
import { ReactIcon, NodeIcon, TypescriptIcon } from '@/components/Icons';

//----------- Styles -----------//
const StyledCard = styled.article`
  width: var(--size-20);
  height: var(--size-20);

  display: grid;
  place-items: center;

  border: 2px solid ${props => props.theme.text};
  border-radius: var(--border-radius);
`;

//----------- Main component -----------//
type Technology = {
  type: 'react' | 'node' | 'typescript';
};

const Card = ({ type }: Technology) => {
  if (type === 'react')
    return (
      <StyledCard>
        <ReactIcon />
      </StyledCard>
    );

  if (type === 'node')
    return (
      <StyledCard>
        <NodeIcon />
      </StyledCard>
    );

  if (type === 'typescript')
    return (
      <StyledCard>
        <TypescriptIcon />
      </StyledCard>
    );

  return null;
};

export default Card;
