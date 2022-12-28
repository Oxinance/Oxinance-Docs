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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import {Link, NavLink} from "react-router-dom";

function ActionCell({onDeleteClick, userId}) {
    return (
        <SoftBox display="flex" alignItems="center">
            <NavLink to={`/dashboard/users/${userId}`}>
                <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                    <Tooltip title="See details" placement="top">
                        <Icon>visibility</Icon>
                    </Tooltip>
                </SoftTypography>
            </NavLink>
            <SoftBox mx={2}>
                <NavLink to={`/dashboard/users/${userId}`}>
                    <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                        <Tooltip title="Edit user" placement="top">
                            <Icon>edit</Icon>
                        </Tooltip>
                    </SoftTypography>
                </NavLink>
            </SoftBox>
            <SoftTypography onClick={onDeleteClick} variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                <Tooltip title="Delete user" placement="top">
                    <Icon>delete</Icon>
                </Tooltip>
            </SoftTypography>
        </SoftBox>
    );
}

export default ActionCell;
