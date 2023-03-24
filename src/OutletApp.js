import Sidenav from "./examples/Sidenav";
import sidebarRoutes from "./sidebar.routes";
import {setMiniSidenav, useOxiUIController} from "./context";
import { Outlet } from 'react-router-dom';
import {useState} from "react";

const OutletApp = () => {


    const [controller, softDispatch] = useOxiUIController();
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
                brandName="Soft UI Dashboard PRO"
                routes={sidebarRoutes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            />
            <Outlet/>
        </>
    )
}

export default OutletApp;
