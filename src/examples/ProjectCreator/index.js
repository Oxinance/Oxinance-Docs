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

import { useState, useEffect } from "react";


// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/ProjectCreator/ProjectCreatorRoot";

// Soft UI Dashboard PRO React context
import {
    useSoftUIController, setOpenProjectCreator,
} from "context";
import SoftInput from "../../components/SoftInput";
import Button from "@mui/material/Button";
import ProjectsClient from "../../clients/ProjectsClient";
import {setProjects} from "../../redux/actions/ProjectsActions";
import {useDispatch} from "react-redux";

function ProjectCreator() {
    const dispatch = useDispatch()
    const [controller, softDispatch] = useSoftUIController();
    const { openProjectCreator } = controller;
    const [error, setError] = useState({display: false, message: null});
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")

    // Use the useEffect hook to change the button state for the sidenav type based on window size.
    useEffect(() => {
        // A function that sets the disabled state of the buttons for the sidenav type.
        function handleDisabled() {
            return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
        }

        // The event listener that's calling the handleDisabled function when resizing the window.
        window.addEventListener("resize", handleDisabled);

        // Call the handleDisabled function to set the state with the initial value.
        handleDisabled();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleDisabled);
    }, []);

    const handleSubmit = () => {

        setIsLoading(true);

        const callback = (response) => {
            dispatch(setProjects(response));
            setIsLoading(false);
            setError({display: false, message: null})
        }

        const errorCallback = (error) => {
            setError({display: true, message: error.response.data.detail })
            setIsLoading(false);
        }

        ProjectsClient.createProject({name}, callback, errorCallback)
    }

    const handleCloseConfigurator = () => setOpenProjectCreator(softDispatch, false);

    return (
        <ConfiguratorRoot variant="permanent" ownerState={{ openProjectCreator }}>
            <SoftBox
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
                pt={3}
                pb={0.8}
                px={3}
            >
                <SoftBox>
                    <SoftTypography variant="h5">Create a new Shop</SoftTypography>
                    <SoftTypography variant="body2" color="text">
                        See our dashboard options.
                    </SoftTypography>
                </SoftBox>

                <Icon
                    sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
                        fontSize: `${size.md} !important`,
                        fontWeight: `${fontWeightBold} !important`,
                        stroke: dark.main,
                        strokeWidth: "2px",
                        cursor: "pointer",
                        mt: 2,
                    })}
                    onClick={handleCloseConfigurator}
                >
                    close
                </Icon>
            </SoftBox>

            <Divider />

            <SoftBox pt={1.25} pb={3} px={3}>
                <SoftBox>
                    <SoftTypography variant="h6">Shop name <SoftTypography variant="caption" color="text">( min. length: <strong>3</strong> )</SoftTypography></SoftTypography>
                    <SoftInput error={error.display} onChange={(event) => setName(event.target.value)} size={"small"}/>
                    {error.display && <SoftTypography variant="caption" style={{color: "#fd5c70"}}>{error.message}</SoftTypography>}
                </SoftBox>

                <SoftBox mt={3} mb={2} lineHeight={1}>
                    <SoftTypography variant="h6">Enable User authentication</SoftTypography>
                    <Switch />
                </SoftBox>
                <Divider />
                <Button onClick={handleSubmit} disabled={(name.length < 3 || isLoading)} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
                    Create
                </Button>
            </SoftBox>
        </ConfiguratorRoot>
    );
}

export default ProjectCreator;
