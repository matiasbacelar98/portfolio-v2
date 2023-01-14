import { useTheme } from '@/hooks';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  width: max-content;
  height: var(--size-5);
`;

const LogoText = styled.span`
  font-size: ${props => props.theme.headingLg};
  font-weight: ${props => props.theme.semiBoldWeight};
  color: ${props => props.theme.text};
`;

const DotArea = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & button {
    background-color: transparent;
    display: grid;
    place-items: center;
    border: 0;
    padding-top: var(--size-1);
  }
`;

const Circle = styled.circle`
  fill: ${props => props.theme.accent};
`;

const Logo = () => {
  const { toggleTheme } = useTheme();

  return (
    <LogoWrapper>
      <LogoText>Mat</LogoText>
      <DotArea>
        <button onClick={toggleTheme}>
          <svg width="9" height="9" overflow="visible" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="4" cy="4" r="4" />
          </svg>
        </button>
      </DotArea>
      <LogoText>as</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
