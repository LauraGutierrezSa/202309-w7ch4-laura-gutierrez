import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles.css/mainTheme";
import GlobalStyle from "./styles.css/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
