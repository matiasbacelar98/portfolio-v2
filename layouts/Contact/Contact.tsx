import styled from 'styled-components';
import { sideSpacing, Typography } from '@/styles';
import { themeValues as theme, breakpoints, linkUrls } from '@/constants';

const Wrapper = styled.section`
  ${sideSpacing}

  display: grid;
  place-content: center;
  row-gap: var(--size-4);

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: var(--size-8);
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: var(--size-3);
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.accent};
  border-radius: 50%;
`;

const Contact = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Circle />

        <a target="_blank" href={linkUrls.mail} rel="noreferrer">
          <Typography
            as="h2"
            size={theme.headingLg}
            weight={theme.regularWeight}
            display="inline-block"
            highlighted
            hover
          >
            Let&apos;s talk +
          </Typography>
        </a>
      </TitleWrapper>

      <Typography as="p" size={theme.textBase} weight={theme.regularWeight} mxWidth={'300'}>
        If you want to contact me to ask me something my inbox is always open.
      </Typography>
    </Wrapper>
  );
};

export default Contact;
