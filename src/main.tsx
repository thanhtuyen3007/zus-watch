import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles>
      {" "}
      <App />
    </GlobalStyles>
  </StrictMode>
);
