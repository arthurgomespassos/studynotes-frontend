// este arquivo serve pra eu poder suavemente ter autocompletes em toda a aplicação
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      background: string;
      text: string;
      red: string;
      success: string;
      info: string;
      error: string;
      warning: string;
      headerTextHover: string;
    };
  }
}
