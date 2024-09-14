import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { nanoid } from 'nanoid';

import { Typography } from '@/styles';
import { breakpoints, themeValues as theme } from '@/constants';

//------------- TechnologiesGrid -------------//
const StyledTechGrid = styled.div`
  max-width: var(--size-75); // 600px

  & > * + * {
    margin-top: var(--size-1);
  }

  @media (min-width: ${breakpoints.sm}) {
    & > * + * {
      margin-top: 0;
    }

    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--size-1);
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, max-content);
    row-gap: var(--size-1);
    column-gap: var(--size-5);
  }
`;

const technologies = [
  { id: nanoid(), text: '- HTML' },
  { id: nanoid(), text: '- Typescript' },
  { id: nanoid(), text: '- Node' },
  { id: nanoid(), text: '- Vite/Webpack' },
  { id: nanoid(), text: '- CSS' },
  { id: nanoid(), text: '- React' },
  { id: nanoid(), text: '- Docker' },
  { id: nanoid(), text: '- Linux' },
  { id: nanoid(), text: '- JavaScript' },
  { id: nanoid(), text: '- Next' },
  { id: nanoid(), text: '- GIT' },
  { id: nanoid(), text: '- Figma' },
];

const TechnologiesGrid = () => {
  return (
    <StyledTechGrid>
      {technologies.map(item => (
        <Typography
          key={item.id}
          as="p"
          size={theme.textBase}
          weight={theme.regularWeight}
          mxWidth={'600'}
        >
          {item.text}
        </Typography>
      ))}
    </StyledTechGrid>
  );
};

//------------- ContentList -------------//
const StyledContentList = styled.div`
  & > * + * {
    margin-top: var(--size-2);
  }
`;

type ContentType = {
  text: string;
  id: string;
};

const ContentList = () => {
  const { t } = useTranslation();

  const contentArr: ContentType[] = t(
    'home:aboutSection.content',
    { count: [] },
    { returnObjects: true }
  );

  return (
    <StyledContentList>
      {contentArr.map(item => (
        <Typography
          key={item.id}
          as="p"
          size={theme.textBase}
          weight={theme.regularWeight}
          mxWidth={'600'}
        >
          {item.text}
        </Typography>
      ))}
    </StyledContentList>
  );
};

//------------- Main component -------------//
const StyledAboutContent = styled.div`
  & > * + * {
    margin-top: var(--size-3);
  }
`;

const AboutContent = () => {
  return (
    <StyledAboutContent>
      <ContentList />
      <TechnologiesGrid />
    </StyledAboutContent>
  );
};

export default AboutContent;
