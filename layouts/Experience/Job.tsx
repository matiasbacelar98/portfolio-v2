import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import { themeValues as theme } from '@/constants';
import { Typography, OutterLink, AccesibleText } from '@/styles';

//---------------- JobRole ----------------//
const JobRoleWrapper = styled.div`
  & > * + * {
    margin-top: 4px;
  }
`;

const JobRoleTitle = styled.h3`
  & span:first-child {
    margin-right: 4px;
  }
`;

const JobCompany = styled.span`
  &::selection {
    color: ${props => props.theme.text};
    background: ${props => props.theme.accent};
  }
`;

type JobRoleProps = {
  company: string;
  role: string;
  time: string;
  link: string;
};

const JobRole = ({ role, company, time, link }: JobRoleProps) => {
  const { t } = useTranslation();

  const accesibleCompanyText = `${t('common:accesibility.experienceLinks.company')} ${company}`;

  return (
    <JobRoleWrapper>
      <JobRoleTitle>
        <Typography size={theme.headingSm} weight={theme.regularWeight}>
          {role}
        </Typography>

        <OutterLink
          size={theme.headingSm}
          weight={theme.regularWeight}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <JobCompany aria-hidden="true">{company}</JobCompany>
          <AccesibleText>{accesibleCompanyText}</AccesibleText>
        </OutterLink>
      </JobRoleTitle>

      <Typography as="span" size={theme.textBase} weight={theme.regularWeight}>
        ({time})
      </Typography>
    </JobRoleWrapper>
  );
};

//---------------- JobInfo ----------------//
const JobInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 51.25rem; // 820px
  margin-top: var(--size-3);

  & > * + * {
    margin-top: var(--size-2);
  }
`;

const JobItemWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const JobInfoLine = styled.span`
  height: 2px;
  width: var(--size-1);
  background-color: ${props => props.theme.accent};
  margin-top: 0.75rem; // 12px
  margin-right: var(--size-1);
`;

type JobInfoProps = {
  first: string;
  second: string;
};

const JobInfo = ({ first, second }: JobInfoProps) => {
  return (
    <JobInfoWrapper>
      <JobItemWrapper>
        <JobInfoLine />

        <Typography as="span" size={theme.textBase} weight={theme.regularWeight}>
          {first}
        </Typography>
      </JobItemWrapper>

      <JobItemWrapper>
        <JobInfoLine />

        <Typography as="span" size={theme.textBase} weight={theme.regularWeight}>
          {second}
        </Typography>
      </JobItemWrapper>
    </JobInfoWrapper>
  );
};

//---------------- Main component ----------------//
type JobTypeProps = {
  data: {
    id: string;
    position: string;
    company: string;
    time: string;
    firstItem: string;
    secondItem: string;
    link: string;
  };
};

const Job = ({ data }: JobTypeProps) => {
  const { position, company, time, firstItem, secondItem, link } = data;

  return (
    <div>
      <JobRole role={position} company={company} time={time} link={link} />
      <JobInfo first={firstItem} second={secondItem} />
    </div>
  );
};

export default Job;
