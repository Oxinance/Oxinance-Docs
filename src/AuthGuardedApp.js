import Sidenav from "./examples/Sidenav";
import brand from "./assets/images/logo-ct.png";
import sidebarRoutes from "./sidebar.routes";
import Configurator from "./examples/Configurator";
import {setMiniSidenav, setOpenConfigurator, useSoftUIController} from "./context";
import SoftBox from "./components/SoftBox";
import Icon from "@mui/material/Icon";
import { Outlet } from 'react-router-dom';
import {useState} from "react";
import ProjectCreator from "./examples/ProjectCreator";

const AuthGuardedApp = () => {


    const [controller, softDispatch] = useSoftUIController();
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const { miniSidenav, sidenavColor } = controller;

    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            setMiniSidenav(softDispatch, false);
            setOnMouseEnter(true);
        }
    };

    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSidenav(softDispatch, true);
            setOnMouseEnter(false);
        }
    };


    return (
        <>
            <Sidenav
                color={sidenavColor}
                brand={brand}
                brandName="Soft UI Dashboard PRO"
                routes={sidebarRoutes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            />
            <Outlet/>
        </>
    )
}

export default AuthGuardedApp;
