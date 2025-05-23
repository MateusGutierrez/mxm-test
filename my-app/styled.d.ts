import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      foreground: string;
      onBackground?: string; // pode remover se não estiver mais usando
      primary: string;
      primaryForeground: string;
      secondary: string;
      secondaryForeground: string;
      muted: string;
      mutedForeground: string;
      accent: string;
      accentForeground: string;
      destructive: string;
      warn: string;
      success: string;
      destructiveForeground: string;
      border: string;
      input: string;
      ring: string;
      card: string;
      cardForeground: string;
      popover: string;
      popoverForeground: string;
      sidebar: string;
      sidebarForeground: string;
      sidebarPrimary: string;
      sidebarPrimaryForeground: string;
      sidebarAccent: string;
      sidebarAccentForeground: string;
      sidebarBorder: string;
      sidebarRing: string;
    };
    space: {
      default: number;
    };
    radii: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      full: number;
    };
  }
}
