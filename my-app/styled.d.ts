import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      onBackground: string;
      primary: string;
    };
    space: {
      default: number;
    };
  }
}
