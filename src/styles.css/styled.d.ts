// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colours: {
      main: string;
      specialColour: string;
      regularColour: string;
    };

    typography: {
      family: string;
      size: string;
    };
  }
}
