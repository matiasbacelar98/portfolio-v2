import styled from 'styled-components';
import { TechIcon } from '@/components/Icons';

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
  const types = {
    react: <TechIcon type="react" />,
    node: <TechIcon type="node" />,
    typescript: <TechIcon type="typescript" />,
  };

  const cardNotFound = !types[type];

  if (cardNotFound) throw new Error('Card type doesnt exist');
  return <StyledCard>{types[type]}</StyledCard>;
};

export default Card;
