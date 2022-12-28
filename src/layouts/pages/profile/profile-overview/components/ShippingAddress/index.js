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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import UsersClient from "../../../../../../clients/UsersClient";
import {useSelector} from "react-redux";
import {useState} from "react";

function ShippingAddress({deleteCallback, editCallback, userId, shippingAddress}) {

    const projects = useSelector(state => state.projects)
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = () => {
        setIsLoading(true)
        const callback = (response) => {
            deleteCallback(shippingAddress.id)
            setIsLoading(false)
        }

        const errorCallback = (error) => {
            setIsLoading(false)
        }

        UsersClient.deleteShippingAddress((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, userId, shippingAddress.id, callback, errorCallback)
    }

    return (
        <SoftBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            bgColor="grey-100"
            borderRadius="lg"
            p={3}
            mb={2}
        >
            <SoftBox width="100%" display="flex" flexDirection="column">
                <SoftBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                    mb={2}
                >
                    <SoftTypography variant="button" fontWeight="medium" textTransform="capitalize">
                        {shippingAddress.first_name + shippingAddress.last_name}
                    </SoftTypography>

                    <SoftBox
                        display="flex"
                        alignItems="center"
                        mt={{ xs: 2, sm: 0 }}
                        ml={{ xs: -1.5, sm: 0 }}
                    >
                        <SoftBox mr={1}>
                            <SoftButton disabled={isLoading} onClick={handleDelete} variant="text" color="error">
                                <Icon>delete</Icon>&nbsp;delete
                            </SoftButton>
                        </SoftBox>
                        <SoftButton disabled={isLoading} onClick={() => editCallback(shippingAddress)} variant="text" color="dark">
                            <Icon>edit</Icon>&nbsp;edit
                        </SoftButton>
                    </SoftBox>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Address Line 1:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                            {shippingAddress.address_line_1}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Address Line 2:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.address_line_2}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        City:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.city}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        State:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.state}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Country:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.country}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        ZIP code:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.zip_code}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Phone number:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.phone_number}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
        </SoftBox>
    );
}

ShippingAddress.propTypes = {
    userId: PropTypes.string.isRequired,
    shippingAddress: PropTypes.object.isRequired
};

export default ShippingAddress;
