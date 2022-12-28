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
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import Avatar from "@mui/material/Avatar";

function PaymentDetails({ paymentMethod }) {
  const { borderWidth, borderColor } = borders;

    const renderIcon = () => {
        switch (paymentMethod.platform) {
            case "STRIPE":
                if (paymentMethod.payment.payment_method.type === "card") {
                    switch (paymentMethod.payment.payment_method.card.brand) {
                        case "visa":
                            return (
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/128px-Visa_2021.svg.png"
                            )
                        case "mastercard":
                            return (
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/128px-Mastercard_2019_logo.svg.png"
                            )
                        case "amex":
                            return (
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/128px-American_Express_logo_%282018%29.svg.png"
                            )
                        case "unionpay":
                            return (
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/128px-UnionPay_logo.svg.png"
                            )
                        case "jcb":
                            return (
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/256px-JCB_logo.svg.png"
                            )
                        case "discover":
                            return (
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/64px-Discover_Card_logo.svg.png"
                            )
                        default:
                            return (
                                <Avatar style={{background: "#5b52fc", borderRadius: 5, width: 50, height: 50}}>
                                    <i style={{color: "#ffffff", fontSize: 40}} className={`bx bxl-stripe icon`}/>
                                </Avatar>
                            )
                    }
                }
            case "BINANCE":
                return (
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/128px-Binance_Logo.png"
                )

            case "PAYPAL":
                return (
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/128px-PayPal_Logo_Icon_2014.svg.png"
                )
            default:
                return null;
        }
    }

    if (paymentMethod.platform === "BINANCE") {
        return (
            <>
                <SoftTypography variant="h6" fontWeight="medium">
                    Payment details
                </SoftTypography>
                <SoftBox
                    border={`${borderWidth[1]} solid ${borderColor}`}
                    borderRadius="lg"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={3}
                    mt={2}
                >
                    <SoftBox component="img" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/128px-Binance_Logo.png"} alt="master card" width="10%" mr={2} />
                    <SoftTypography variant="h6" fontWeight="medium">
                        Transaction ID: {paymentMethod.payment.data.transactionId}
                    </SoftTypography>
                    <SoftBox ml="auto" lineHeight={0}>

                    </SoftBox>
                </SoftBox>
            </>
        )
    }

    return (
    <>
      <SoftTypography variant="h6" fontWeight="medium">
        Payment details
      </SoftTypography>
      <SoftBox
        border={`${borderWidth[1]} solid ${borderColor}`}
        borderRadius="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        mt={2}
      >
        <SoftBox component="img" src={renderIcon()} alt="master card" width="10%" mr={2} />
        <SoftTypography variant="h6" fontWeight="medium">
          ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;{paymentMethod.payment.payment_method.card.last4}
        </SoftTypography>
        <SoftBox ml="auto" lineHeight={0}>
          <Tooltip title="We do not store card details" placement="bottom">
            <SoftButton variant="outlined" color="secondary" size="small" iconOnly circular>
              <Icon sx={{ cursor: "pointer" }}>priority_high</Icon>
            </SoftButton>
          </Tooltip>
        </SoftBox>
      </SoftBox>
    </>
  );
}

export default PaymentDetails;
