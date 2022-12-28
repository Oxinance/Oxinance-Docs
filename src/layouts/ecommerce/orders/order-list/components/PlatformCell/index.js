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
import Avatar from "@mui/material/Avatar";

function PlatformCell({ paymentMethod }) {

    const renderIcon = () => {
        switch (paymentMethod.platform) {
            case "STRIPE":
                if (paymentMethod.payment.payment_method.type === "card") {
                    switch (paymentMethod.payment.payment_method.card.brand) {
                        case "visa":
                            return (
                                    <img style={{marginTop: 5}} width={60} alt={"Visa Logo"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/128px-Visa_2021.svg.png"/>
                            )
                        case "mastercard":
                            return (
                                    <img width={60} alt={"Mastercard Logo"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/128px-Mastercard_2019_logo.svg.png"/>
                            )
                        case "amex":
                            return (
                                <Avatar style={{background: "#1a1a1a", borderRadius: 5, width: 50, height: 50}}>
                                    <img width={50} alt={"American Express Logo"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/128px-American_Express_logo_%282018%29.svg.png"/>
                                </Avatar>
                            )
                        case "unionpay":
                            return (
                                <img height={40} alt={"UnionPay Logo"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/128px-UnionPay_logo.svg.png"/>
                            )
                        case "jcb":
                            return (
                                <img height={40} alt={"JCB Logo"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/256px-JCB_logo.svg.png"/>
                            )
                        case "discover":
                            return (
                                <img alt="Discover Card logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/64px-Discover_Card_logo.svg.png"/>
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
                    <Avatar style={{background: "#1a1a1a", borderRadius: 5, width: 50, height: 50}}>
                        <img width="35" alt="Binance Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/128px-Binance_Logo.png"/>
                    </Avatar>
                )

            case "PAYPAL":
                return (
                    <Avatar style={{background: "#f0f1f3", borderRadius: 5, width: 60, height: 60}}>
                        <img width="32" alt="PayPal Logo Icon 2014" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/128px-PayPal_Logo_Icon_2014.svg.png"/>
                    </Avatar>
                )
            default:
                return null;
        }
    }

    return (
        <>
            {renderIcon()}
        </>
    );
}

// Typechecking props for the IdCell
PlatformCell.propTypes = {
    paymentMethod: PropTypes.object.isRequired,
};

export default PlatformCell;
