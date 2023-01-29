import Image from 'next/image';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

import { ProjectIcon } from '@/components/Icons';

import { useCursor } from '@/hooks';
import { breakpoints, themeValues as theme } from '@/constants';
import { Typography } from '@/styles';

const ProjectWrapper = styled.article`
  & > * + * {
    margin-top: var(--size-2);
  }
`;

const TiltWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const ProjectImg = styled.div`
  position: relative;
  cursor: none;
  max-width: 31.25rem; // 500px
  height: 36.625rem; // 586px
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: hsl(0, 0%, 0%);
    z-index: 2;
    opacity: 0;
    transition: opacity 500ms ease;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;

  & > * {
    margin-right: var(--size-1);
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: var(--size-3);
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
  const { updateCursorType } = useCursor();
  const { name, technologies, info, liveUrl, githubUrl, img } = data;

  return (
    <ProjectWrapper>
      <TiltWrapper>
        <Tilt scale={1.07} transitionSpeed={2000} tiltMaxAngleX={8.5} tiltMaxAngleY={8.5}>
          <ProjectImg
            onMouseEnter={() => updateCursorType('see')}
            onMouseLeave={() => updateCursorType('default')}
          >
            <ImageWrapper>
              <Image src={img} alt={`${name} cover`} layout="fill" objectFit="cover" />
            </ImageWrapper>
          </ProjectImg>
        </Tilt>
      </TiltWrapper>

      <Typography as="h3" size={theme.headingSm} weight={theme.mediumWeight} highlighted>
        {name}
      </Typography>

      <TechnologiesWrapper>
        {technologies.map(tech => (
          <Typography
            key={tech}
            as="p"
            display="inline-block"
            size={theme.textBase}
            weight={theme.regularWeight}
          >
            {tech}
          </Typography>
        ))}
      </TechnologiesWrapper>

      <Typography as="p" size={theme.textBase} weight={theme.regularWeight} mxWidth={'450'}>
        {info}
      </Typography>

      <IconsWrapper>
        <ProjectIcon type="github" url={githubUrl} />
        <ProjectIcon type="open" url={liveUrl} />
      </IconsWrapper>
    </ProjectWrapper>
  );
};

export default Project;
