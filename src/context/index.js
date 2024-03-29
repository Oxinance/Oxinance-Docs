import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Soft UI Dashboard PRO React main context
const OxiUI = createContext(null);

// Setting custom name for the context which is visible on react dev tools
OxiUI.displayName = "SoftUIContext";

// Soft UI Dashboard PRO React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "OPEN_PROJECT_CREATOR": {
      return {...state, openProjectCreator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Soft UI Dashboard PRO React context provider
function OxiUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    openProjectCreator: false,
    direction: "ltr",
    layout: "dashboard",
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <OxiUI.Provider value={value}>{children}</OxiUI.Provider>;
}

// Soft UI Dashboard PRO React custom hook for using context
function useOxiUIController() {
  const context = useContext(OxiUI);

  if (!context) {
    throw new Error("useOxiUIController should be used inside the OxiUIControllerProvider.");
  }

  return context;
}

// Typechecking props for the SoftUIControllerProvider
OxiUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });

export {
  OxiUIControllerProvider,
  useOxiUIController,
  setMiniSidenav,
  setLayout,
};
