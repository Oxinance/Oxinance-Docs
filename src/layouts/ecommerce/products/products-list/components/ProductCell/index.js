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
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Avatar from "@mui/material/Avatar";

function ProductCell({ image, name }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftBox width="3.75rem">
          {
              image ? <SoftBox component="img" src={image} alt={name} width="100%" /> :
                <Avatar style={{background: "#dcdcdc", borderRadius: 5, width: 60, height: 60}}>
                    <ImageNotSupportedIcon/>
                </Avatar>
          }
      </SoftBox>
      <SoftTypography style={{marginLeft: 15}} variant="button" fontWeight="medium">
        {name}
      </SoftTypography>
    </SoftBox>
  );
}

// Setting default value for the props of ProductCell
ProductCell.defaultProps = {
  checked: false,
};

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default ProductCell;
