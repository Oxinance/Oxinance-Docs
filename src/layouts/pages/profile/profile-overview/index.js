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

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/pages/profile/components/Header";
import PlatformSettings from "layouts/pages/profile/profile-overview/components/PlatformSettings";

import {useEffect, useState} from "react";
import UsersClient from "../../../../clients/UsersClient";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {CircularProgress, circularProgressClasses} from "@mui/material";


function Overview() {

    const { userId } = useParams();
    const [userData, setUserData] = useState({})
    const projects = useSelector(state => state.projects)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({display: false, message: null})
    const [tabValue, setTabValue] = useState(0);

    const updateUser = (user) => setUserData(user)

    const callback = (response) => {
        setIsLoading(false)
        updateUser(response.data)
        setError({display: false, message: null})
    }

    const errorCallback = (error) => {
        setIsLoading(false)
        setError({display: true, message: error.response.data.detail})
    }

    const handleSetTabValue = (event, newValue) => setTabValue(newValue);

    useEffect(() => {
        setIsLoading(true)
        setError({display: true, message: null})
        UsersClient.getProjectUser((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, userId, callback, errorCallback)
    }, [projects.isLive, projects.selectedProject])

    if (isLoading) {
        return (
            <DashboardLayout>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    <CircularProgress
                        variant="indeterminate"
                        disableShrink
                        sx={{
                            color: (theme) => (theme.palette.mode === 'light' ? '#c9c9c9' : '#308fe8'),
                            animationDuration: '550ms',
                            [`& .${circularProgressClasses.circle}`]: {
                                strokeLinecap: 'round',
                            },
                        }}
                        size={25}
                        thickness={4}
                    />
                </div>
            </DashboardLayout>
        )
    }

    if (error.display && !isLoading) {
        return (<p>ERROR</p>)
    }

    const renderTab = () => {
        if (tabValue === 0) {
            return (
                <SoftBox mt={5} mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} xl={4}>
                            <PlatformSettings updateCallback={updateUser} user={userData} />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <ProfileInfoCard userId={userData.id} metadata={userData.metadata}
                            />
                        </Grid>
                        <Grid item xs={12} xl={4}>
                            <ProfilesList userId={userData.id} />
                        </Grid>
                    </Grid>
                </SoftBox>
            )
        }
        else if (tabValue === 1) {
            return (
                <p>ORDERS</p>
            )
        }
    }

  return (
    <DashboardLayout>
      <Header user={userData} tabValue={tabValue} handleSetTabValue={handleSetTabValue} />
        {renderTab()}
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
