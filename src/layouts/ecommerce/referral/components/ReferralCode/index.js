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
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import IconButton from "@mui/material/IconButton";

function ReferralCode() {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <>
      <SoftBox lineHeight={1}>
        <SoftTypography variant="h6" fontWeight="medium">
          Referral Code
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Copy the code bellow to your registered provider.
        </SoftTypography>
      </SoftBox>
      <SoftBox
        borderRadius="md"
        border={`${borderWidth[1]} dashed ${secondary.main}`}
        pt={2}
        pb={1.5}
        px={2}
        mt={2}
      >
        <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="caption" color="text">
            Generated 23 days ago by <span sx={{ fontWeight: "bold" }}>softuidash23</span>
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2} lineHeight={0}>
          <SoftTypography variant="caption" color="text" fontWeight="bold">
            (Used one time)
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" alignItems="center" mb={2}>
          <SoftBox width="70%" mr={1}>
            <SoftInput
              style={{fontFamily: "monospace"}}
              size="small"
              value={"pk_test_ad071ca4-a9c5-4062-aa63-4fa1aa0fbab4"}
              icon={{ component: "lock", direction: "right" }}
              disabled
            />
          </SoftBox>
          <Tooltip title="Click to copy" placement="top">
            <IconButton style={{borderRadius: 6, boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)"}}>
              <ContentPasteIcon style={{width: 15, height: 15}}/>
            </IconButton>
          </Tooltip>
        </SoftBox>
        <SoftBox mb={0.5} lineHeight={1.2}>
          <SoftTypography component="p" variant="caption" color="text">
            You cannot generate codes.
          </SoftTypography>
          <SoftTypography variant="caption" color="text">
            <SoftTypography
              component={Link}
              variant="caption"
              href="#link"
              className="color-background"
            >
              Contact us
            </SoftTypography>{" "}
            to generate more referrals link.
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </>
  );
}

export default ReferralCode;
