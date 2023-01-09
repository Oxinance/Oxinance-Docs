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

const Checkout = ({spacing}) => {

    const [expand, setExpand] = useState(false)
    const getCurrentUserRef = useRef(null);
    const loginUserRef = useRef(null);
    const registerUserRef = useRef(null);

    const scrollToCurrentUser = () => {
        if (!expand) {
            setExpand(true)
            setTimeout(() => {
                getCurrentUserRef.current.scrollIntoView()
            }, 500)
        }
        getCurrentUserRef.current.scrollIntoView()
    }

    const scrollToLoginUser = () => {
        if (!expand) {
            setExpand(true)
            setTimeout(() => {
                loginUserRef.current.scrollIntoView()
            }, 500)
        }
        loginUserRef.current.scrollIntoView()
    }

    const scrollToRegisterUser = () => {
        if (!expand) {
            setExpand(true)
            setTimeout(() => {
                registerUserRef.current.scrollIntoView()
            }, 500)
        }
        registerUserRef.current.scrollIntoView()
    }

    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={() => setExpand(false)} className={"ShowCollapsedSectionButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={() => setExpand(true)} className={"ShowCollapsedSectionButton"}>
                <p>Expand</p>
                <ExpandMoreIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
            </div>
        )
    }

    return (
        <>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Checkout</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Checkout API offers a fast and secure way of processing payments from a wide range of payment processors.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>Each payment processor needs to be configured beforehand in <TipWord title={"An Oxinance API that allows non-authenticated customers to place orders"}>Oxinance Dashboard</TipWord> in order to be accessed.
                        <br/>
                        <br/>
                        Checkout API is strictly designed for authenticated users, if you wish to allow non-authenticated users to buy from your shop you must use <TipWord>Guest Checkout API</TipWord>.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={scrollToCurrentUser} title={"Gets all user orders"} method={"POST"}>/v1/checkout/binance</Endpoint>
                        <Endpoint onClick={scrollToCurrentUser} title={"Gets all user orders"} method={"POST"}>/v1/checkout/paypal</Endpoint>
                        <Endpoint onClick={scrollToCurrentUser} title={"Gets all user orders"} method={"POST"}>/v1/checkout/stripe/payment-intent</Endpoint>
                        <Endpoint onClick={scrollToCurrentUser} title={"Gets all user orders"} method={"POST"}>/v1/checkout/stripe/checkout-session</Endpoint>
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
