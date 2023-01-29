import { motion } from 'framer-motion';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import Project from './Project';
import Title from '@/components/Title';

import { sideSpacing } from '@/styles';
import { sectionNames, breakpoints } from '@/constants';
import { useStoreDistance } from '@/hooks';

const Wrapper = styled(motion.section)`
  ${sideSpacing}

  & > * + * {
    margin-top: var(--size-5);
  }

  @media (min-width: ${breakpoints.md}) {
    & > * + * {
      margin-top: var(--size-13);
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  row-gap: var(--size-3);

  @media (min-width: ${breakpoints.md}) {
    place-content: center;
    row-gap: var(--size-5);
  }

  @media (min-width: ${breakpoints.xxl}) {
    width: 95%;
    margin-inline: auto;

    place-content: initial;
    grid-template-columns: repeat(2, 1fr);
    row-gap: var(--size-13);
    column-gap: var(--size-30);

    & article:nth-child(2) {
      padding-top: var(--size-22);
    }
  }
`;

type ProjectType = {
  name: string;
  technologies: string[];
  info: string;
  liveUrl: string;
  githubUrl: string;
  id: string;
  img: string;
};

const Projects = () => {
  const { t } = useTranslation();
  const { ref } = useStoreDistance(sectionNames.projects);

  const projectsArr: ProjectType[] = t(
    'home:projectsSection.projects',
    { count: [] },
    { returnObjects: true }
  );

  return (
    <Wrapper aria-labelledby="projects-title" ref={ref}>
      <Title content={t('home:projectsSection.title')} accessibleId="projects-title" line />

      <ProjectGrid>
        {projectsArr.map(project => (
          <Project key={project.id} data={project} />
        ))}
      </ProjectGrid>
    </Wrapper>
  );
};

export default Projects;
