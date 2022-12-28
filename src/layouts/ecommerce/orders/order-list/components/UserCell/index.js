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
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "../../../../../../components/SoftAvatar";
import {Link} from "react-router-dom";

function UserCell({ user }) {
    return (
        <Link to={`/dashboard/users/${user.id}`}>
            <SoftBox display="flex" alignItems="center">
                <SoftBox mr={1}>
                    <SoftAvatar bgColor="dark" src={user.username[0]} alt={user.username} size="xs" />
                </SoftBox>
                <SoftTypography variant="caption" fontWeight="medium" color="text" sx={{ lineHeight: 0 }}>
                    {user.username}
                </SoftTypography>
            </SoftBox>
        </Link>
    );
}

UserCell.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserCell;
