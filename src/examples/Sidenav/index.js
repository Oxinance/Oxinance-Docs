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

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavList from "examples/Sidenav/SidenavList";
import SidenavItem from "examples/Sidenav/SidenavItem";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Soft UI Dashboard PRO React context
import { useSoftUIController, setMiniSidenav } from "context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {

    const [openCollapse, setOpenCollapse] = useState(false);
    const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
    const [controller, softDispatch] = useSoftUIController();
    const { miniSidenav, transparentSidenav } = controller;
    const location = useLocation();
    const { pathname } = location;
    const collapseName = pathname.split("/").slice(1)[0];
    const itemName = pathname.split("/").slice(1)[1];

    const closeSidenav = () => setMiniSidenav(softDispatch, true);

    useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(softDispatch, window.innerWidth < 1200);
    }

    /**
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [softDispatch, location]);

  // Render all the nested collapse items from the routes.js
  const renderNestedCollapse = (collapse) => {
    const template = collapse.map(({ name, route, key, href }) =>
      href ? (
        <Link
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavItem name={name} nested />
            <p>OLA</p>
        </Link>
      ) : (
        <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
          <SidenavItem name={name} active={route === pathname} nested />
            <p>OLA</p>
        </NavLink>
      )
    );

    return template;
  };

  // Render the all the collpases from the routes.js
  const renderCollapse = (collapses) =>
    collapses.map(({ name, collapse, route, href, key }) => {
      let returnValue;
      if (collapse) {
        returnValue = (
          <SidenavItem
            key={key}
            name={name}
            active={key === itemName}
            open={openNestedCollapse === name}
            onClick={() =>
              openNestedCollapse === name
                ? setOpenNestedCollapse(false)
                : setOpenNestedCollapse(name)
            }
          >
            {renderNestedCollapse(collapse)}
          </SidenavItem>
        );
      } else {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavItem name={name} active={key === itemName} />
          </Link>
        ) : (
          <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
            <SidenavItem name={name} active={key === itemName} />
          </NavLink>
        );
      }
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(
    ({ type, name, icon, title, collapse, noCollapse, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        if (href) {
          returnValue = (
            <Link
              href={href}
              key={key}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                active={key === collapseName}
                noCollapse={noCollapse}
              />
            </Link>
          );
        } else if (noCollapse && route) {
          returnValue = (
            <NavLink to={route} key={key}>
              <SidenavCollapse
                name={name}
                icon={icon}
                noCollapse={noCollapse}
                active={key === collapseName}
              >
                {collapse ? renderCollapse(collapse) : null}
              </SidenavCollapse>
            </NavLink>
          );
        } else {
          returnValue = (
            <SidenavCollapse
              key={key}
              name={name}
              icon={icon}
              active={key === "projects"}
              open={openCollapse === key}
              onClick={() => (openCollapse === key ? setOpenCollapse(false) : setOpenCollapse(key))}
            >
              {collapse ? renderCollapse(collapse) : null}
            </SidenavCollapse>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <SoftTypography
            key={key}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            opacity={0.6}
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </SoftTypography>
        );
      } else if (type === "divider") {
        returnValue = <Divider key={key} />;
      }

      return returnValue;
    }
  );

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <SoftBox pt={3} pb={1} px={4} textAlign="center">
        <SoftBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SoftTypography>
        </SoftBox>
        <SoftBox component={NavLink} to="dashboard" display="flex" alignItems="center">
          {brand && <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2000.000000 328.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,328.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M1225 3265 c-302 -56 -534 -175 -740 -380 -288 -286 -448 -697 -462 -1187 -11 -357 46 -650 177 -923 72 -149 142 -248 265 -371 193 -196 419 -317 707 -381 122 -27 584 -26 708 1 275 60 501 178 691 363 116 113 193 217 268 366 128 251 191 540 191 872 0 327 -58 600 -185 862 -74 155 -162 280 -280 398 -199 200 -453 330 -744 380 -107 19 -495 19 -596 0z m533 -415 c269 -65 510 -267 650 -545 103 -206 160 -487 149 -739 -15 -360 -133 -666 -334 -871 -216 -219 -498 -319 -803 -286 -233 25 -402 104 -572 269 -171 165 -272 367 -330 654 -29 146 -32 422 -5 565 104 552 427 909 882 973 88 13 268 3 363 -20z"/>
                  <path d="M3505 3108 c16 -339 67 -561 185 -803 98 -202 233 -372 409 -513 l99 -80 -80 -63 c-286 -226 -492 -565 -568 -937 -29 -147 -39 -244 -46 -467 l-7 -205 220 0 220 0 6 200 c10 296 40 475 113 663 89 231 249 432 451 567 l75 50 37 -22 c261 -157 427 -362 514 -633 63 -194 85 -340 94 -617 l6 -208 224 0 223 0 0 108 c-1 179 -18 411 -40 532 -35 193 -124 427 -218 574 -87 136 -258 321 -384 415 l-58 43 66 50 c248 188 433 444 530 733 61 183 87 343 99 608 l7 137 -224 0 -224 0 -13 -182 c-23 -349 -94 -594 -231 -792 -67 -97 -202 -226 -314 -300 l-88 -59 -32 17 c-52 28 -157 110 -224 175 -225 221 -353 531 -382 927 -5 76 -10 156 -10 177 l0 37 -221 0 -220 0 6 -132z"/>
                  <path d="M6190 1640 l0 -1600 220 0 220 0 0 1600 0 1600 -220 0 -220 0 0 -1600z"/>
                  <path d="M7260 1641 l0 -1601 220 0 220 0 0 1396 0 1395 443 -3 442 -4 90 -28 c228 -70 349 -189 391 -384 11 -56 14 -265 14 -1219 l0 -1153 220 0 220 0 0 1143 c0 1177 -2 1236 -41 1392 -90 353 -304 545 -711 638 -89 20 -124 21 -800 24 l-708 4 0 -1600z"/>
                  <path d="M10997 3224 c-97 -17 -208 -54 -290 -95 -250 -127 -463 -377 -556 -654 -66 -198 -64 -149 -68 -1348 l-4 -1087 210 0 211 0 0 583 0 583 63 61 c181 177 347 222 825 223 l262 0 0 205 0 205 -267 0 c-185 0 -298 -5 -366 -15 -189 -28 -363 -104 -471 -204 l-48 -46 5 285 c5 301 13 364 60 492 70 191 207 318 422 389 67 22 84 23 463 27 l392 3 0 -1395 0 -1396 220 0 220 0 0 1600 0 1600 -602 -1 c-474 -1 -620 -4 -681 -15z"/>
                  <path d="M12910 1641 l0 -1601 220 0 220 0 0 1396 0 1395 443 -3 442 -4 90 -28 c226 -69 335 -175 386 -374 18 -72 19 -121 19 -1229 l0 -1153 220 0 221 0 -4 1193 c-3 1071 -5 1200 -20 1267 -92 410 -302 616 -724 711 -95 22 -118 23 -805 26 l-708 4 0 -1600z"/>
                  <path d="M17010 3225 c-580 -79 -993 -404 -1173 -922 -70 -201 -100 -400 -100 -663 0 -263 30 -462 100 -663 170 -490 547 -805 1086 -908 94 -18 160 -23 405 -26 l292 -5 0 206 0 206 -237 0 c-318 0 -449 22 -613 105 -346 174 -561 589 -561 1085 0 500 213 910 566 1088 160 80 289 102 608 102 l237 0 0 205 0 205 -257 -1 c-150 -1 -298 -7 -353 -14z"/>
                  <path d="M18856 3229 c-306 -35 -508 -163 -622 -394 -83 -167 -78 -69 -81 -1512 l-4 -1283 916 0 915 0 0 205 0 205 -695 0 -695 0 0 520 0 520 530 0 530 0 0 205 0 205 -530 0 -530 0 0 258 c1 280 9 380 39 447 28 63 104 140 168 171 108 50 148 54 686 54 l497 0 0 205 0 205 -527 -1 c-291 -1 -559 -5 -597 -10z"/>
              </g>
          </svg>}
          <SoftBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <List>
          {renderRoutes}
      </List>
        <Divider/>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
