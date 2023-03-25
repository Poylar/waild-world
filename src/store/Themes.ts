// fix the type errors in this file
interface I_Color {
  background: string;
  textColor: string;
}

interface I_Theme {
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  colors: {
    dark: I_Color;
    light: I_Color;
  };
}
const theme: I_Theme = {
  breakpoints: {
    xs: '320px',
    sm: '556px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    xxl: '1920px',
  },
  colors: {
    dark: {
      background: '#101010',
      textColor: '#fff',
    },
    light: {
      background: '#fff',
      textColor: '#101010',
    },
  },
};

export type { I_Color, I_Theme };
export { theme };
