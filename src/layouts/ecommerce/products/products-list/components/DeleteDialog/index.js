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
import {Alert, LinearProgress} from "@mui/material";
import SoftTypography from "../../../../../../components/SoftTypography";
import {useState} from "react";
import ProductsClient from "../../../../../../clients/ProductsClient";
import {useSelector} from "react-redux";

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

export default function DeleteDialog({open, productToDelete, closeFunction, updateStatusFunction}) {

    const projects = useSelector(state => state.projects);
    const [error, setError] = useState({display: false, message: null})
    const [loading, setLoading] = useState(false)

    const callback = (response) => {
        closeFunction();
        updateStatusFunction(productToDelete.id, response.active)
        setLoading(false)
    }

    const handleDeactivation = () => {
        setError({display: false, message: null})
        setLoading(true)
        ProductsClient.deactivateProduct(projects.selectedProject.id, productToDelete.id, (projects.isLive ? "live" : "sandbox"), () => {
            closeFunction();
            updateStatusFunction(productToDelete.id, false)
            setLoading(false)
        }, (error) => {
            setError({display: true, message: error.response.data.detail});
            setLoading(false)
        })
    }

    const handleActivation = () => {
        setError({display: false, message: null})
        setLoading(true)
        ProductsClient.activateProduct(projects.selectedProject.id, productToDelete.id, (projects.isLive ? "live" : "sandbox"), () => {
            closeFunction();
            updateStatusFunction(productToDelete.id, true)
            setLoading(false)
        }, (error) => {
            setError({display: true, message: error.response.data.detail});
            setLoading(false)
        })
    }

    if (productToDelete) {
        if (productToDelete.active) {
            return (
                <div>
                    <BootstrapDialog
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <BootstrapDialogTitle style={{fontSize: 18, color: "#1A1B25", fontFamily: 'Poppins'}} id="customized-dialog-title" disableClose={loading} onClose={closeFunction}>
                            <SoftTypography variant="h5" fontWeight="regular" style={{fontWeight: 500}}>
                                Unable to delete
                            </SoftTypography>
                        </BootstrapDialogTitle>
                        {loading && <LinearProgress color={"secondary"}/>}
                        {error.display && <Alert severity={"error"}>{error.message}</Alert>}
                        <DialogContent dividers style={{backgroundColor: "#F6F8FA"}}>
                            <div>
                                <p style={{fontWeight: 400, paddingLeft: 20, paddingRight: 20}}>Manually created products are not eligible to be deleted remotely.</p>
                                <br/>
                                <p style={{fontWeight: 400, paddingLeft: 20, paddingRight: 20}}>To delete this Product you must do it from your <a style={{color: "#1A1B25", fontWeight: 500}} href={`https://dashboard.stripe.com${projects.isLive ? "" : "/test"}/products/${productToDelete}`}>Stripe Dashboard</a> directly.</p>
                                <br/>
                                <p style={{fontWeight: 400, paddingLeft: 20, paddingRight: 20}}>The most recommended thing to do is deactivate this Product as Stripe generally discourages data deletion.</p>
                            </div>
                        </DialogContent>
                        <DialogActions style={{margin: 5}}>
                            <Button disabled={loading} onClick={closeFunction} sx={{textTransform: "none", fontFamily: 'Poppins', borderColor: "#c9c9c9", color: "#404452", fontWeight: 500}} variant="outlined" size="small">
                                Cancel
                            </Button>
                            <Button disabled={loading} onClick={handleDeactivation} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
                                Deactivate
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            )
        } else {
            return (
                <div>
                    <BootstrapDialog
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <BootstrapDialogTitle style={{fontSize: 18, color: "#1A1B25", fontFamily: 'Poppins'}} id="customized-dialog-title" disableClose={loading} onClose={closeFunction}>
                            <SoftTypography variant="h5" fontWeight="regular" style={{fontWeight: 500}}>
                                Activate Product
                            </SoftTypography>
                        </BootstrapDialogTitle>
                        {loading && <LinearProgress color={"secondary"}/>}
                        {error.display && <Alert severity={"error"}>{error.message}</Alert>}
                        <DialogContent dividers style={{backgroundColor: "#F6F8FA"}}>
                            <div>
                                <p style={{fontWeight: 400, paddingLeft: 20, paddingRight: 20}}>Deactivated products cannot be sold, activate and start selling.</p>
                            </div>
                        </DialogContent>
                        <DialogActions style={{margin: 5}}>
                            <Button disabled={loading} onClick={closeFunction} sx={{textTransform: "none", fontFamily: 'Poppins', borderColor: "#c9c9c9", color: "#404452", fontWeight: 500}} variant="outlined" size="small">
                                Cancel
                            </Button>
                            <Button disabled={loading} onClick={handleActivation} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
                                Activate
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            )
        }
    }
    return null
}
