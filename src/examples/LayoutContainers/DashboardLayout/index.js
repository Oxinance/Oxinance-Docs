import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import OxiBox from "components/OxiBox";
import { useOxiUIController, setLayout } from "context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useOxiUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
        <OxiBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                position: "relative",
                [breakpoints.up("xl")]: {
                    marginLeft: miniSidenav ? pxToRem(120) : pxToRem(260),
                    transition: transitions.create(["margin-left", "margin-right"], {
                        easing: transitions.easing.easeInOut,
                        duration: transitions.duration.standard,
                    }),
                },
            })}
        >
            {children}
        </OxiBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
