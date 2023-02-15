import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Futura';
        font-weight: 300;
        src: url('/fonts/FuturaPTLight.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Futura';
        font-weight: 400;
        src: url('/fonts/FuturaPTBook.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Futura';
        font-weight: 500;
        src: url('/fonts/FuturaPTMedium.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Futura';
        font-weight: 600;
        src: url('/fonts/FuturaPTBold.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Futura';
        font-weight: 900;
        src: url('/fonts/FuturaPTExtraBold.ttf') format("truetype");
      }
      `}
  />
);

export { Fonts };
