import { motion } from 'framer-motion';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import Job from './Job';
import Resume from './Resume';
import Title from '@/components/Title';

import { sideSpacing } from '@/styles';
import { sectionNames } from '@/constants';
import { useStoreDistance, useSectionAnim } from '@/hooks';

//----------- Main component -----------//
const Wrapper = styled(motion.section)`
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
  const { ref } = useStoreDistance(sectionNames.experience);
  const { t } = useTranslation();
  const { initial, onScroll, viewport } = useSectionAnim();

  const jobsArr: JobType[] = t(
    'home:experienceSection.info',
    { count: [] },
    { returnObjects: true }
  );

  return (
    <Wrapper
      aria-labelledby="experience-title"
      id="experience"
      initial={initial}
      whileInView={onScroll}
      viewport={viewport}
      ref={ref}
    >
      <Title content={t('home:experienceSection.title')} accessibleId="experience-title" line />

      {jobsArr.map(job => (
        <Job key={job.id} data={job} />
      ))}

      <Resume />
    </Wrapper>
  );
};

export default Experience;
