import styled from 'styled-components';
import { Typography } from '@/styles';
import { themeValues as theme, breakpoints } from '@/constants';

const TitleWrapper = styled.article`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 32px;
  height: 2px;
  background-color: ${props => props.theme.text};
  margin-right: var(--size-2);

  @media (min-width: ${breakpoints.md}) {
    width: 40px;
  }
`;

type TitleType = {
  content: string;
  line?: boolean;
  config?: {
    display?: string;
    highlighted?: boolean;
    hover?: boolean;
  };
  accessibleId: string;
};

const Title = ({ content, config, line, accessibleId }: TitleType) => {
  return (
    <TitleWrapper>
      {line ? <Line /> : null}

      <Typography
        as="h2"
        id={accessibleId}
        size={theme.headingLg}
        weight={theme.regularWeight}
        highlighted={!config?.highlighted ? false : true}
        hover={!config?.hover ? false : true}
        display={config?.display}
      >
        {content}
      </Typography>
    </TitleWrapper>
  );
};

export default Title;
