import { DefaultTheme } from 'styled-components';
import { fluidValues } from '@/utils';

const minWidth = 320;
const maxWidth = 1200;

const defaults = {
  headingXl: fluidValues(minWidth, maxWidth, 24, 40),
  headingLg: fluidValues(minWidth, maxWidth, 22, 32),
  headingSm: fluidValues(minWidth, maxWidth, 18, 24),
  textBase: 'var(--size-2)', // 16px
  textSm: '0.875rem', // 14px
  textXs: '0.75rem', // 12px
  lightWeight: 300,
  regularWeight: 400,
  mediumWeight: 500,
  semiBoldWeight: 600,
};

export const lightTheme: DefaultTheme = {
  ...defaults,
  bg: 'hsl(0, 0%, 100%)',
  text: 'hsl(0, 0%, 7%)',
  accent: 'hsl(0, 91%, 60%)',
};

export const darkTheme: DefaultTheme = { ...defaults, text: 'hsl(0, 0%, 100%)', bg: 'hsl(0, 0%, 7%)', accent: 'hsl(0, 91%, 60%)' };
