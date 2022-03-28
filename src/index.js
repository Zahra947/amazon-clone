import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
