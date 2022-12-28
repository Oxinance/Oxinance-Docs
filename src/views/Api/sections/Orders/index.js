import Grid from "@mui/material/Grid";
import {TipWord} from "../../components/Keywords";
import SyntaxText from "../../components/SyntaxText";
import EndpointsCode from "../../components/EndpointsCode";
import Endpoint from "../../components/Endpoint";
import {Divider} from "@mui/material";
import {useRef, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapsible from "../Users/Collapsible";
import GetCurrentUser from "../Users/GetCurrentUser";
import RegisterUser from "../Users/RegisterUser";
import LoginUser from "../Users/LoginUser";
import UserObject from "../Users/UserObject";

const Orders = ({spacing}) => {

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
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Orders</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Order objects keep track of user purchases inside your Shop. Each order is created after a payment from any platform is succeeded.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>An order placed by a non-authenticated customer using the <TipWord title={"An Oxinance API that allows non-authenticated customers to place orders"}>Guest Checkout API</TipWord> will still be visible for you in <TipWord>Oxinance Dashboard</TipWord> but will not be retrievable by the user as he does not have an <TipWord>Authentication Token</TipWord>.
                        <br/>
                        <br/>
                        In this case Oxinance will send an email message to the email address provided by the user during the checkout, the message will contain all order details.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={scrollToCurrentUser} title={"Gets all user orders"} method={"GET"}>/v1/orders</Endpoint>
                        <Endpoint onClick={scrollToLoginUser} title={"Retrieves a specific order"} method={"GET"}>/v1/orders/:id</Endpoint>
                    </EndpointsCode>
                </Grid>
            </Grid>
            <Collapsible open={expand}>
                <Divider/>
                <UserObject spacing={spacing}/>
                <Divider/>
                <GetCurrentUser spacing={spacing} ref={getCurrentUserRef}/>
                <Divider/>
                <LoginUser spacing={spacing} ref={loginUserRef}/>
                <Divider/>
                <RegisterUser spacing={spacing} ref={registerUserRef}/>
            </Collapsible>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", borderBottom: "1px solid #E3E8EE", paddingBottom: 100}} container>
                <Grid style={{margin: "auto"}} item sx={12}>
                    {renderExpandButton()}
                </Grid>
            </Grid>
        </>
    )
}

export default Orders;
