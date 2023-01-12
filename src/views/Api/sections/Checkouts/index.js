import Grid from "@mui/material/Grid";
import {TipWord} from "../../components/Keywords";
import EndpointsCode from "../../components/EndpointsCode";
import Endpoint from "../../components/Endpoint";
import {useRef, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapsible from "../Users/Collapsible";
import Binance from "./Binance";
import Divider from "@mui/material/Divider";
import StripeCheckoutSession from "./StripeCheckoutSession";
import StripePaymentIntent from "./StripePaymentIntent";
import {useDispatch, useSelector} from "react-redux";
import {collapseCheckoutAction, expandCheckoutAction} from "../../../../redux/actions/ApiActions";
import {useNavigate} from "react-router-dom";

const Checkout = ({spacing}) => {

    const expand = useSelector(state => state.api.expandCheckout);
    const dispatch = useDispatch();
    const getCurrentUserRef = useRef(null);
    const navigate = useNavigate();

    const scrollToCurrentUser = () => {
        if (!expand) {
            expandCheckout()
            setTimeout(() => {
                getCurrentUserRef.current.scrollIntoView()
            }, 500)
        }
        getCurrentUserRef.current.scrollIntoView()
    }

    const expandCheckout = () => dispatch(expandCheckoutAction());

    const collapseCheckout = () => dispatch(collapseCheckoutAction());


    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={collapseCheckout} className={"ShowCollapsedSectionButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={expandCheckout} className={"ShowCollapsedSectionButton"}>
                <p>Expand</p>
                <ExpandMoreIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
            </div>
        )
    }

    return (
        <>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Checkouts</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Checkouts API offers a fast and secure way of processing payments from a wide range of payment processors.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>Each payment processor needs to be configured beforehand in <TipWord title={"An Oxinance API that allows non-authenticated customers to place orders"}>Oxinance Dashboard</TipWord> in order to be accessed.
                        <br/>
                        <br/>
                        Checkout API is strictly designed for authenticated users, if you wish to allow non-authenticated users to buy from your shop you must use <TipWord>Guest Checkout API</TipWord>.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={() => navigate("/api#checkout/binance")} title={"Generates a Binance hosted checkout page URL"} method={"POST"}>/v1/checkouts/binance</Endpoint>
                        <Endpoint onClick={() => null} title={"Coming soon"} method={"POST"}>/v1/checkouts/paypal</Endpoint>
                        <Endpoint onClick={() => navigate("/api#checkout/stripe-checkout-session")} title={"Generates a Stripe payment intent"} method={"POST"}>/v1/checkouts/stripe/payment-intent</Endpoint>
                        <Endpoint onClick={() => navigate("/api#checkout/stripe-payment-intent")} title={"Generates a Stripe hosted checkout page URL"} method={"POST"}>/v1/checkouts/stripe/checkout-session</Endpoint>
                    </EndpointsCode>
                </Grid>
            </Grid>
            <Collapsible open={expand}>
                <Divider/>
                <Binance spacing={spacing}/>
                <Divider/>
                <StripeCheckoutSession spacing={spacing}/>
                <Divider/>
                <StripePaymentIntent spacing={spacing}/>
            </Collapsible>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", borderBottom: "1px solid #E3E8EE", paddingBottom: 100}} container>
                <Grid style={{margin: "auto"}} item sx={12}>
                    {renderExpandButton()}
                </Grid>
            </Grid>
        </>
    )
}

export default Checkout;
