import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainStyle from "./themes/mainStyle";
import App from "./App";
import { Style } from "./themes/style";
import { ThemeProvider } from "./utils/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
    <Style/>
    <App />
    </ThemeProvider>
  </BrowserRouter>
);
