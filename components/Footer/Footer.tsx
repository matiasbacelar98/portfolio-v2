import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { SocialIcon, HandIcon } from '../Icons';
import { Typography, sideSpacing } from '@/styles';
import { themeValues as theme, breakpoints } from '@/constants';

//------- Copyright -------//
const StyledCopyright = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-top: var(--size-3);

  @media (min-width: ${breakpoints.md}) {
    padding-top: 0;
  }
`;

const YearWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HandIconWrapper = styled.div`
  padding: 0 4px;
`;

const InfoWrapper = styled.div`
  padding-right: 4px;
`;

const Copyright = () => {
  const { t } = useTranslation();

  return (
    <StyledCopyright>
      <InfoWrapper>
        <Typography as="span" size={theme.textBase} weight={theme.regularWeight} highlighted>
          {t('common:footerSection.copyright')}
        </Typography>
      </InfoWrapper>

      <YearWrapper>
        <Typography as="span" size={theme.textBase} weight={theme.regularWeight} highlighted hover>
          Matias Bacelar
        </Typography>

        <HandIconWrapper>
          <HandIcon type="cool" size="sm" />
        </HandIconWrapper>

        <Typography as="span" size={theme.textBase} weight={theme.regularWeight} highlighted>
          2023
        </Typography>
      </YearWrapper>
    </StyledCopyright>
  );
};

//---------- Main component ----------//
const StyledFooter = styled.footer`
  ${sideSpacing}
  padding-bottom: var(--size-4);
`;

const ContentWrapper = styled.div`
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LinksWrapper = styled.div`
  display: flex;

  & > * + * {
    margin-left: var(--size-3);
  }
`;

const StyledLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${props => props.theme.text};
  margin-bottom: var(--size-3);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLine />

      <ContentWrapper>
        <LinksWrapper>
          <SocialIcon type="linkedin" />
          <SocialIcon type="mail" />
          <SocialIcon type="github" />
        </LinksWrapper>

        <Copyright />
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;
