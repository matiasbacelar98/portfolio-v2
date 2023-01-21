// CSS Media Queries breakpoints
export const breakpoints = {
  sm: '20em', // 320px
  md: '48em', // 768px
  lg: '59.375em', // 950px
  xl: '64rem', // 1024px
  xxl: '75em', // 1200px
  xxxl: '87.5em', // 1400px
};

// Theme values
export const themeValues = {
  headingXl: 'headingXl',
  headingLg: 'headingLg',
  headingSm: 'headingSm',

  textBase: 'textBase',
  textSm: 'textSm',
  textXs: 'textXs',

  lightWeight: 'lightWeight',
  regularWeight: 'regularWeight',
  mediumWeight: 'mediumWeight',
  semiBoldWeight: 'semiBoldWeight',
};

// Section names
type ValuesType = {
  [key: string]: string;
};

export const sectionNames: ValuesType = {
  home: 'home',
  projects: 'projects',
  experience: 'experience',
  about: 'about',
  contact: 'contact',
};

// Links urls
export const linkUrls = {
  linkedin: 'https://www.linkedin.com/in/matias-bacelar-371140199/',
  github: 'https://github.com/matiasbacelar98',
  mail: 'mailto:matiasbacelar@gmail.com',
};
