

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SoftTypography from "../../../../../../components/SoftTypography";
import {useSelector} from "react-redux";
import UsersClient from "../../../../../../clients/UsersClient";
import {useState} from "react";
import {Alert, LinearProgress} from "@mui/material";
import SoftBox from "../../../../../../components/SoftBox";
import Grid from "@mui/material/Grid";
import SoftInput from "../../../../../../components/SoftInput";
import Switch from "@mui/material/Switch";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, disableClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    disabled={disableClose}
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) =>theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function EditShippingAddressDialog({open, userId, successCallback, closeFunction, shippingAddress, updateShippingAddress}) {

    const projects = useSelector(state => state.projects);
    const [error, setError] = useState({display: false, message: null})
    const [loading, setLoading] = useState(false)

    const handleUpdate = () => {

        setLoading(true)
        setError({display: false, message: null})

        const data = {
            first_name: shippingAddress.first_name,
            last_name: shippingAddress.last_name,
            address_line_1: shippingAddress.address_line_1,
            address_line_2: shippingAddress.address_line_2,
            city: shippingAddress.city,
            state: shippingAddress.state,
            country: shippingAddress.country,
            zip_code: shippingAddress.zip_code,
            phone_number: shippingAddress.phone_number
        }

        const callback = (response) => {
            setLoading(false)
            successCallback(response)
        }

        const errorCallback = (error) => {
            setLoading(false)
            setError({display: true, message: error.response.data.detail})
        }

        UsersClient.updateShippingAddress((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, userId, shippingAddress.id, data, callback, errorCallback)
    }
    return (
        <div>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle style={{fontSize: 18, color: "#1A1B25", fontFamily: 'Poppins'}} id="customized-dialog-title" disableClose={loading} onClose={closeFunction}>
                    <SoftTypography variant="h5" fontWeight="regular" style={{fontWeight: 500}}>
                        Edit Shipping Address
                    </SoftTypography>
                </BootstrapDialogTitle>
                {loading && <LinearProgress color={"secondary"}/>}
                {error.display && <Alert severity={"error"}>{error.message}</Alert>}
                <DialogContent dividers style={{backgroundColor: "#F6F8FA"}}>
                    <SoftBox pb={2} px={2} lineHeight={1.25}>
                        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                            Details
                        </SoftTypography>

                        <Grid sx={{flexGrow: 1}} container spacing={2}>
                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>First Name</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.first_name}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, first_name: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>

                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Last Name</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.last_name}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, last_name: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                                <SoftBox>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Address Line 1</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.address_line_1}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, address_line_1: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                                <SoftBox>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Address Line 2</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.address_line_2}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, address_line_2: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>City</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.city}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, city: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>

                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>State</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.state}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, state: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Country</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.country}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, country: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>

                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>ZIP code</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.zip_code}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, zip_code: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Phone Number</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={shippingAddress.phone_number}
                                        onChange={(event) => updateShippingAddress(prevState => ({...prevState, phone_number: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                        </Grid>
                    </SoftBox>
                </DialogContent>
                <DialogActions style={{margin: 5}}>
                    <Button disabled={loading} onClick={handleUpdate} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
                        Update
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
