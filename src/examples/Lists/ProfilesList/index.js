// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import {useEffect, useState} from "react";
import UsersClient from "../../../clients/UsersClient";
import {useSelector} from "react-redux";
import ShippingAddress from "../../../layouts/pages/profile/profile-overview/components/ShippingAddress";
import {CircularProgress, circularProgressClasses} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import CreateShippingAddressDialog
    from "../../../layouts/pages/profile/profile-overview/components/CreateShippingAddressDialog";
import EditShippingAddressDialog
    from "../../../layouts/pages/profile/profile-overview/components/EditShippingAddressDialog";

function ProfilesList({ userId }) {

    const projects = useSelector(state => state.projects)
    const [shippingAddresses, setShippingAddresses] = useState([])
    const [shippingAddressToBeEdited, setShippingAddressToBeEdited] = useState({})
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const createShippingAddressCallback = (response) => {
        setIsDialogOpen(false)
        setShippingAddresses(response.data)
    }

    const openEditDialog = (shippingAddress) => {
        setShippingAddressToBeEdited(shippingAddress)
        setIsEditDialogOpen(true)
    }

    const closeEditDialog = () => setIsEditDialogOpen(false)

    const openDialog = () => setIsDialogOpen(true)

    const closeDialog = () => setIsDialogOpen(false)

    const editCallback = (response) => {
        const newState = shippingAddresses.map(obj => {
            if (obj.id === response.data.id) {
                return {...response.data}
            }
            return obj
        })
        closeEditDialog()
        setShippingAddresses(newState)
    }

    const deleteCallback = (shippingAddressId) => {
        setShippingAddresses(prevData => prevData.filter(shippingAddress => shippingAddress.id !== shippingAddressId))
    }

    const callback = (response) => {
        setIsLoading(false)
        setShippingAddresses(response.data)
    }

    const errorCallback = (error) => { }

    useEffect(() => {
        UsersClient.getShippingAddresses((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, userId, callback, errorCallback)
    }, [])


    if (isLoading) {
        return (
            <Card sx={{ height: "100%" }}>
                <SoftBox pt={2} px={2}>
                    <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                        Shipping Addresses
                    </SoftTypography>
                </SoftBox>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "inherit"}}>
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
            </Card>
        )
    }

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" alignItems={"center"} justifyContent={"space-between"} pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Shipping Addresses
        </SoftTypography>
          <IconButton onClick={openDialog} style={{backgroundColor: "rgba(52,71,103,0.1)", padding: 5}}>
                  <AddIcon style={{color: "#344767", width: 20, height: 20}}/>
          </IconButton>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {shippingAddresses.map((shippingAddress) => (
                <ShippingAddress
                    editCallback={openEditDialog}
                    key={shippingAddress.id}
                    userId={userId}
                    deleteCallback={deleteCallback}
                    shippingAddress={shippingAddress}
                />
            ))}
        </SoftBox>
      </SoftBox>
        <CreateShippingAddressDialog userId={userId} closeFunction={closeDialog} successCallback={createShippingAddressCallback} open={isDialogOpen}/>
        <EditShippingAddressDialog shippingAddress={shippingAddressToBeEdited} updateShippingAddress={setShippingAddressToBeEdited} userId={userId} successCallback={editCallback} closeFunction={closeEditDialog} open={isEditDialogOpen}/>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ProfilesList;
