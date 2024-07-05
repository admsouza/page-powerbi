/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      button {
        font-weight: bold;
        font-family: Arial, sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
