// este arquivo serve pra eu poder suavemente ter autocompletes em toda a aplicação
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryDark: string;
      primaryDarker: string;
      background: string;
      text: string;
      invertedText: string;
      cancel: string;
      success: string;
      info: string;
      error: string;
      edit: string;
      warning: string;
    };
  }
}
