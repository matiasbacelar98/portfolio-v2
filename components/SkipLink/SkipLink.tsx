import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

const StyledSkipLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${props => props.theme.textBase};
  font-weight: ${props => props.theme.lightWeight};
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.text};
  padding: var(--size-2) var(--size-3);
  border-radius: 4px;
  z-index: 10;
  transform: translateY(-120%);
  transition: transform 220ms ease-in;

  &:focus {
    transform: translateY(0);
    outline: 0.1px solid transparent;
  }
`;

const SkipLink = () => {
  const { t } = useTranslation();
  return <StyledSkipLink href="#content">{t('common:skipLink')}</StyledSkipLink>;
};

export default SkipLink;
