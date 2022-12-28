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
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function ActionCell({product, onEditClick, onDeleteClick}) {
    console.log(product)
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Preview product" placement="top">
          <Icon>visibility</Icon>
        </Tooltip>
      </SoftTypography>
      <SoftBox mx={2}>
        <SoftTypography onClick={onEditClick} variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
          <Tooltip title="Edit product" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </SoftTypography>
      </SoftBox>
        {product.active ? <SoftTypography onClick={() => onDeleteClick(product)} variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
            <Tooltip title="Delete product" placement="left">
                <Icon>delete</Icon>
            </Tooltip>
        </SoftTypography>
        :
            <SoftTypography onClick={() => onDeleteClick(product)} variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                <Tooltip title="Activate product" placement="left">
                    <PlayCircleIcon/>
                </Tooltip>
            </SoftTypography>}
    </SoftBox>
  );
}

export default ActionCell;
