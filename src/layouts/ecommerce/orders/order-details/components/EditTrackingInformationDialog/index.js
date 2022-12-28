

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
import OrdersClient from "../../../../../../clients/OrdersClient";

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

export default function EditTrackingInformationDialog({open, order, successCallback, closeFunction}) {
    const projects = useSelector(state => state.projects);
    const [error, setError] = useState({display: false, message: null})
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({...order.tracking_information})

    const handleCreate = () => {

        setLoading(true)
        setError({display: false, message: null})

        const callback = (response) => {
            setLoading(false)
            successCallback(response)
            closeFunction()
        }

        const errorCallback = (error) => {
            setLoading(false)
            setError({display: true, message: error.response.data.detail})
        }

        OrdersClient.updateTrackingInformation((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, order.id, data, callback, errorCallback)
    }

    return (
        <div>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle style={{fontSize: 18, color: "#1A1B25", fontFamily: 'Poppins'}} id="customized-dialog-title" disableClose={loading} onClose={closeFunction}>
                    <SoftTypography variant="h5" fontWeight="regular" style={{fontWeight: 500}}>
                        Edit Tracking Information
                    </SoftTypography>
                </BootstrapDialogTitle>
                {loading && <LinearProgress color={"secondary"}/>}
                {error.display && <Alert severity={"error"}>{error.message}</Alert>}
                <DialogContent dividers style={{backgroundColor: "#F6F8FA"}}>
                    <SoftBox pb={2} px={2} lineHeight={1.25}>
                        <Grid sx={{flexGrow: 1}} container spacing={2}>
                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Company</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={data.company}
                                        onChange={(event) => setData(prevState => ({...prevState, company: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>

                            <Grid item xs={6}>
                                <SoftBox mt={0.25}>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Tracking Code</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={data.code}
                                        onChange={(event) => setData(prevState => ({...prevState, code: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                                <SoftBox>
                                    <SoftTypography variant="caption" color="text">
                                        <strong>Tracking Url</strong>
                                    </SoftTypography>
                                    <SoftInput
                                        style={{fontFamily: "monospace"}}
                                        size="small"
                                        value={data.url}
                                        onChange={(event) => setData(prevState => ({...prevState, url: event.target.value}))}
                                    />
                                </SoftBox>
                            </Grid>
                        </Grid>
                    </SoftBox>
                </DialogContent>
                <DialogActions style={{margin: 5}}>
                    <Button disabled={loading} onClick={handleCreate} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
                        Update
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
