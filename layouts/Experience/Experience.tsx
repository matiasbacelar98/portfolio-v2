import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import Job from './Job';
import Resume from './Resume';
import Title from '@/components/Title';

import { sideSpacing } from '@/styles';
import { sectionNames } from '@/constants';
import { useStoreDistance, useCursor } from '@/hooks';

//----------- Main component -----------//
const Wrapper = styled.section`
  ${sideSpacing}

  & > * + * {
    margin-top: var(--size-5);
  }
`;

type JobType = {
  id: string;
  position: string;
  company: string;
  time: string;
  firstItem: string;
  secondItem: string;
  link: string;
};

const Experience = () => {
  const { updateCursorType } = useCursor();
  const { ref } = useStoreDistance(sectionNames.experience);
  const { t } = useTranslation();

  const jobsArr: JobType[] = t(
    'common:experienceSection.info',
    { count: [] },
    { returnObjects: true }
  );

  return (
    <Wrapper
      ref={ref}
      onMouseEnter={() => updateCursorType('default')}
      onMouseLeave={() => updateCursorType('default')}
    >
      <Title content={t('common:experienceSection.title')} line />

      {jobsArr.map(job => (
        <Job key={job.id} data={job} />
      ))}

      <Resume />
    </Wrapper>
  );
};

export default Experience;
