import Image from 'next/image';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { ProjectIcon } from '@/components/Icons';

import { useCursor } from '@/hooks';
import { breakpoints, themeValues as theme } from '@/constants';
import { Typography } from '@/styles';

//-------------- ProjectImg --------------//
const ProjectImgWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: block;
    max-width: 31.25rem; // 500px
    height: 36.625rem; // 586px

    overflow: hidden;
  }
`;

const ImageWrapper = styled.a`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: none;

  &:focus {
    outline: 1px solid transparent;
    border: 2px solid ${props => props.theme.accent};
  }
`;

type ProjectImgProps = {
  liveUrl: string;
  img: string;
  name: string;
};

const ProjectImg = ({ liveUrl, img, name }: ProjectImgProps) => {
  const { updateCursorType } = useCursor();

  return (
    <Tilt scale={1.07} transitionSpeed={2000} tiltMaxAngleX={8.5} tiltMaxAngleY={8.5}>
      <ProjectImgWrapper
        onMouseEnter={() => updateCursorType('see')}
        onMouseLeave={() => updateCursorType('default')}
      >
        <ImageWrapper href={liveUrl} target="_blank" rel="noreferrer">
          <Image src={img} alt={`${name} cover`} layout="fill" objectFit="cover" />
        </ImageWrapper>
      </ProjectImgWrapper>
    </Tilt>
  );
};

//-------------- ProjectName --------------//
type ProjectNameProps = {
  name: string;
};

const ProjectName = ({ name }: ProjectNameProps) => {
  return (
    <Typography as="h3" size={theme.headingSm} weight={theme.mediumWeight} highlighted>
      {name}
    </Typography>
  );
};

//-------------- ProjectTechnologies --------------//
const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;

  & > * + * {
    margin-left: 4px;
  }
`;

const TechWrapper = styled.div`
  & > * + * {
    margin-left: 4px;
  }
`;

type ProjectTechnologiesProps = {
  technologies: string[];
};

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <TechnologiesWrapper>
      {technologies.map((tech, index) => (
        <TechWrapper key={tech}>
          <Typography
            as="p"
            display="inline-block"
            size={theme.textBase}
            weight={theme.regularWeight}
          >
            {tech}
          </Typography>

          {index !== technologies.length - 1 ? (
            <Typography
              display="inline-block"
              size={theme.textBase}
              weight={theme.regularWeight}
              as="span"
            >
              -
            </Typography>
          ) : null}
        </TechWrapper>
      ))}
    </TechnologiesWrapper>
  );
};

//-------------- ProjectInfo--------------//
type ProjectInfoProps = {
  info: string;
};

const ProjectInfo = ({ info }: ProjectInfoProps) => {
  return (
    <Typography as="p" size={theme.textBase} weight={theme.regularWeight} mxWidth={'450'}>
      {info}
    </Typography>
  );
};

//-------------- ProjectIcons--------------//
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: var(--size-3);
  }
`;

type ProjectIconsProps = {
  githubUrl: string;
  liveUrl: string;
};

const ProjectIcons = ({ githubUrl, liveUrl }: ProjectIconsProps) => {
  return (
    <IconsWrapper>
      <ProjectIcon type="github" url={githubUrl} />
      <ProjectIcon type="open" url={liveUrl} />
    </IconsWrapper>
  );
};

//-------------- Main component --------------//
const ProjectWrapper = styled(motion.article)`
  & > * + * {
    margin-top: var(--size-2);
  }
`;

type ProjectTypeProps = {
  data: {
    name: string;
    technologies: string[];
    info: string;
    liveUrl: string;
    githubUrl: string;
    id: string;
    img: string;
  };
};

const Project = ({ data }: ProjectTypeProps) => {
  const { name, technologies, info, liveUrl, githubUrl, img } = data;

  return (
    <ProjectWrapper
      initial={{ opacity: 0, y: 50 }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          type: 'tween',
        },
      }}
    >
      <ProjectImg name={name} liveUrl={liveUrl} img={img} />
      <ProjectName name={name} />
      <ProjectTechnologies technologies={technologies} />
      <ProjectInfo info={info} />
      <ProjectIcons githubUrl={githubUrl} liveUrl={liveUrl} />
    </ProjectWrapper>
  );
};

export default Project;
