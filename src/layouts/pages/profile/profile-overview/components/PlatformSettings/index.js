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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "../../../../../../components/SoftInput";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Button from "@mui/material/Button";
import UsersClient from "../../../../../../clients/UsersClient";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Icon from "@mui/material/Icon";
import {CircularProgress, circularProgressClasses} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import messages from "../../../../../dashboards/virtual-reality/vr-info/components/Messages";

function PlatformSettings({user, updateCallback}) {

  const projects = useSelector(state => state.projects);
  const [editableData, setEditableData] = useState({ username: user.username, email: user.email, first_name: user.first_name, last_name: user.last_name, is_active: user.is_active})
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessIcon, setShowSuccessIcon] = useState(false)
  const [error, setError] = useState({display: false, message: null})

  const handleEdit = () => {

    setIsLoading(true)
    setShowSuccessIcon(false)

    const callback = (response) => {
      setIsLoading(false)
      setShowSuccessIcon(true)
      updateCallback(response.data)
      setError({display: false, message: null})
    }

    const errorCallback = (error) => {
      setIsLoading(false)
      setShowSuccessIcon(false)
      setError({display: true, message: error.response.data.detail})
    }

    UsersClient.updateProjectUser((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, user.id, editableData, callback, errorCallback)
  }

  const generateCornerIcon = () => {
    if (isLoading) {
      return <CircularProgress
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
    } else if (showSuccessIcon) {
      return (
          <Avatar style={{width: 25, height: 25, backgroundColor: "#BCE8B9"}}>
            <DoneIcon style={{color: "green"}}/>
          </Avatar>
      )
    } else if (error.display) {
      return (
          <div style={{display: "flex", alignItems: "center"}}>
            <SoftTypography variant="caption" color="text" style={{marginRight: 5}}>
              <strong>{error.message}</strong>
            </SoftTypography>
            <Avatar style={{width: 25, height: 25, backgroundColor: "#e8b9b9"}}>
              <PriorityHighIcon style={{color: "red"}}/>
            </Avatar>
          </div>
      )
    }
  }

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          User settings
        </SoftTypography>
        {generateCornerIcon()}
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </SoftTypography>

        <Grid sx={{flexGrow: 1}} container spacing={2}>
          <Grid item xs={6}>
            <SoftBox mt={0.25}>
              <SoftTypography variant="caption" color="text">
                <strong>Username</strong>
              </SoftTypography>
              <SoftInput
                  style={{fontFamily: "monospace"}}
                  size="small"
                  value={editableData.username}
                  onChange={(event) => setEditableData(prevState => ({...prevState, username: event.target.value}))}
                  icon={{ component: "edit", direction: "right" }}
              />
            </SoftBox>
          </Grid>

          <Grid item xs={6}>
            <SoftBox mt={0.25}>
              <SoftTypography variant="caption" color="text">
                <strong>Email</strong>
              </SoftTypography>
              <SoftInput
                  style={{fontFamily: "monospace"}}
                  size="small"
                  value={editableData.email}
                  onChange={(event) => setEditableData(prevState => ({...prevState, email: event.target.value}))}
                  icon={{ component: "edit", direction: "right" }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={6}>
            <SoftBox>
              <SoftTypography variant="caption" color="text">
                <strong>First name</strong>
              </SoftTypography>
              <SoftInput
                  style={{fontFamily: "monospace"}}
                  size="small"
                  value={editableData.first_name}
                  onChange={(event) => setEditableData(prevState => ({...prevState, first_name: event.target.value}))}
                  icon={{ component: "edit", direction: "right" }}
              />
            </SoftBox>
          </Grid>

          <Grid item xs={6}>
            <SoftBox>
              <SoftTypography variant="caption" color="text">
                <strong>Last name</strong>
              </SoftTypography>
              <SoftInput
                  style={{fontFamily: "monospace"}}
                  size="small"
                  value={editableData.last_name}
                  onChange={(event) => setEditableData(prevState => ({...prevState, last_name: event.target.value}))}
                  icon={{ component: "edit", direction: "right" }}
              />
            </SoftBox>
          </Grid>
        </Grid>

        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={1}>
            <Switch checked={editableData.is_active} onChange={(event) => setEditableData(prevState => ({...prevState, is_active: event.target.checked }))} />
          </SoftBox>
          <SoftBox width="80%" mt={0.75} ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Active
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox mt={1}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            Read-only Attributes
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" alignItems="center" mt={1} mb={1}>
          <SoftBox width="100%">
            <SoftTypography variant="caption" fontWeight="regular" color="text">
              <strong>User ID</strong>
            </SoftTypography>
            <SoftInput
                style={{fontFamily: "monospace"}}
                size="small"
                value={user.id}
                icon={{ component: "lock", direction: "right" }}
                disabled
            />
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" alignItems="center" mb={2}>
          <SoftBox width="100%">
            <SoftTypography variant="caption" fontWeight="regular" color="text">
              <strong>Authentication Token</strong>
            </SoftTypography>
            <SoftInput
                style={{fontFamily: "monospace"}}
                size="small"
                value={user.token}
                icon={{ component: "lock", direction: "right" }}
                disabled
            />
          </SoftBox>
        </SoftBox>
        <Button onClick={handleEdit} disabled={((
            user.username === editableData.username &&
            user.email === editableData.email &&
            user.first_name === editableData.first_name &&
            user.last_name === editableData.last_name &&
            user.is_active === editableData.is_active) || isLoading)} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
          Update
        </Button>
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
