import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    [bg]: string;
    [text]: string;
    [accent]: string;
    [headingXl]: string;
    [headingLg]: string;
    [headingSm]: string;
    [textBase]: string;
    [textSm]: string;
    [textXs]: string;
    [lightWeight]: number;
    [regularWeight]: number;
    [mediumWeight]: number;
    [semiBoldWeight]: number;
  }
}
