import styled from 'styled-components';
import { ES, US } from 'country-flag-icons/react/3x2';

import { themeValues as theme } from '@/constants';
import { Typography } from '@/styles';

import { SPANISH_OPTION } from './LangBtn.constants';

const StyledLangFlag = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 4px;
  }
`;

const USFlag = styled(US)`
  width: var(--size-3);
  height: var(--size-3);

  margin: 0;
  padding: 0;
`;

const ESFlag = styled(ES)`
  width: var(--size-3);
  height: var(--size-3);

  margin: 0;
  padding: 0;
`;

type FlagType = {
  lang: string;
};

const Flag = ({ lang }: FlagType) => {
  const flag = lang === SPANISH_OPTION ? <ESFlag /> : <USFlag />;

  return (
    <StyledLangFlag>
      {flag}

      <Typography size={theme.textBase} weight={theme.regularWeight} uppercase>
        {lang}
      </Typography>
    </StyledLangFlag>
  );
};

export default Flag;
