import { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import {Provider} from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import routes from "routes";
import { useSoftUIController } from "context";
import {ThemeProvider} from "@mui/material";
import theme from "./assets/theme";
import {Store} from "./redux/Store";

export default function App() {
  const [controller] = useSoftUIController();
  const { direction } = controller;
  const { pathname } = useLocation();
  const content = useRoutes(routes);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {content}
        </ThemeProvider>
      </Provider>
  );
}
