import styled, { css } from 'styled-components';
import { FaReact, FaNodeJs } from 'react-icons/fa';

//------------- Styles -------------//
const techIconStyles = css`
  font-size: var(--size-6);
  color: ${props => props.theme.text};
`;

const StyledReactIcon = styled(FaReact)`
  ${techIconStyles}
`;

const StyledNodeIcon = styled(FaNodeJs)`
  ${techIconStyles}
`;

const StyledTypescriptIcon = styled.span`
  font-size: var(--size-5);
  color: ${props => props.theme.text};
  text-transform: uppercase;
`;

//------------- Main component -------------//
type TechIconType = {
  type: 'react' | 'node' | 'typescript';
};

export const TechIcon = ({ type }: TechIconType) => {
  const types = {
    react: <StyledReactIcon />,
    node: <StyledNodeIcon />,
    typescript: <StyledTypescriptIcon>ts</StyledTypescriptIcon>,
  };

  const techIconNotFound = !types[type];

  if (techIconNotFound) throw new Error('TechIcon type doesnt exist');
  return types[type];
};
