import { FaReact, FaNodeJs, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import styled, { css } from 'styled-components';

//------------- HandIcon -------------//
type SizesType = {
  [key: string]: string;
};
const sizes: SizesType = {
  lg: 'var(--size-6)',
  md: 'var(--size-4)',
  sm: 'var(--size-3)',
};

type HandImageType = {
  size: string;
};
const HandImage = styled.img<HandImageType>`
  max-width: ${props => `${sizes[props.size]}`};
`;

type Hand = {
  type: 'salute' | 'point' | 'cool';
  size: 'lg' | 'md' | 'sm';
};

export const HandIcon = ({ type, size }: Hand) => {
  if (type === 'salute') return <HandImage src="/icons/waving-hand.png" alt="waving hand" size={size} />;
  if (type === 'point') return <HandImage src="/icons/pointright-hand.png" alt="waving hand" size={size} />;
  if (type === 'cool') return <HandImage src="/icons/cool-hand.png" alt="waving hand" size={size} />;
  return null;
};

//------------- SocialIcon -------------//
const socialIconStyles = css`
  font-size: var(--size-3);
  color: ${props => props.theme.accent};
  transition: color 150ms ease-in-out;
`;

const StyledGithubIcon = styled(FiGithub)`
  ${socialIconStyles}
`;
const StyledLinkedinIcon = styled(FaLinkedinIn)`
  ${socialIconStyles}
`;
const StyledMailIcon = styled(AiOutlineMail)`
  ${socialIconStyles}
`;
const StyledOpenIcon = styled(HiOutlineExternalLink)`
  ${socialIconStyles}
`;

type SocialIconType = {
  isCard?: boolean;
};

const SocialIconWrapper = styled.div<SocialIconType>`
  display: grid;
  place-items: center;

  width: var(--size-6);
  height: var(--size-6);

  border: 1px solid ${props => (props.isCard ? 'transparent' : props.theme.accent)};
  border-radius: 50%;

  transition: border 150ms ease-in;

  &:hover {
    border: 1px solid ${props => props.theme.text};

    // Change icon
    & svg {
      color: ${props => props.theme.text};
    }
  }
`;

type Social = {
  type: 'github' | 'linkedin' | 'mail' | 'open';
  isCard?: boolean;
};

export const SocialIcon = ({ type, isCard = false }: Social) => {
  if (type === 'github')
    return (
      <SocialIconWrapper isCard={isCard}>
        <StyledGithubIcon />
      </SocialIconWrapper>
    );

  if (type === 'linkedin')
    return (
      <SocialIconWrapper isCard={isCard}>
        <StyledLinkedinIcon />
      </SocialIconWrapper>
    );

  if (type === 'mail')
    return (
      <SocialIconWrapper isCard={isCard}>
        <StyledMailIcon />
      </SocialIconWrapper>
    );

  if (type === 'open')
    return (
      <SocialIconWrapper isCard={isCard}>
        <StyledOpenIcon />
      </SocialIconWrapper>
    );

  return null;
};

//------------- Technologies Icons -------------//
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

export const ReactIcon = () => <StyledReactIcon />;
export const NodeIcon = () => <StyledNodeIcon />;
export const TypescriptIcon = () => <StyledTypescriptIcon>ts</StyledTypescriptIcon>;
