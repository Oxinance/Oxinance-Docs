/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React context
import { useSoftUIController, setLayout } from "context";
import AuthGuard from "../../../AuthGuard";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
        <SoftBox
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
        </SoftBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
