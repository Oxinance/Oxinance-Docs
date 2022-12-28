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

export default function DeleteDialog({open, user, successCallback, closeFunction}) {

    const projects = useSelector(state => state.projects);
    const [error, setError] = useState({display: false, message: null})
    const [loading, setLoading] = useState(false)

    const handleDelete = () => {

        setLoading(true)
        setError({display: false, message: null})

        const callback = (response) => {
            successCallback(response)
            setLoading(false);
        }

        const errorCallback = (error) => {
            setLoading(false)
            setError({display: true, message: error.response.data.detail})
        }

        UsersClient.deleteProjectUser((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, user.id, callback, errorCallback)
    }

    return (
        <div>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle style={{fontSize: 18, color: "#1A1B25", fontFamily: 'Poppins'}} id="customized-dialog-title" disableClose={loading} onClose={closeFunction}>
                    <SoftTypography variant="h5" fontWeight="regular" style={{fontWeight: 500}}>
                        Delete User
                    </SoftTypography>
                </BootstrapDialogTitle>
                {loading && <LinearProgress color={"secondary"}/>}
                {error.display && <Alert severity={"error"}>{error.message}</Alert>}
                <DialogContent dividers style={{backgroundColor: "#F6F8FA"}}>
                    <div>
                        <p style={{fontWeight: 400, paddingLeft: 20, paddingRight: 20}}>Are you sure you want to delete this User forever.</p>
                    </div>
                </DialogContent>
                <DialogActions style={{margin: 5}}>
                    <Button disabled={loading} onClick={closeFunction} sx={{textTransform: "none", fontFamily: 'Poppins', borderColor: "#c9c9c9", color: "#404452", fontWeight: 500}} variant="outlined" size="small">
                        Cancel
                    </Button>
                    <Button disabled={loading} onClick={handleDelete} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
                        Delete
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
