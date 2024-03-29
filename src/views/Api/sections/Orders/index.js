import Grid from "@mui/material/Grid";
import {TipWord} from "../../components/Keywords";
import EndpointsCode from "../../components/EndpointsCode";
import Endpoint from "../../components/Endpoint";
import {Divider} from "@mui/material";
import {useRef} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapsible from "../Users/Collapsible";
import OrderObject from "./OrderObject";
import GetOrder from "./GetOrder";
import GetOrders from "./GetOrders";
import {useDispatch, useSelector} from "react-redux";
import {expandOrdersAction, collapseOrdersAction} from "../../../../redux/actions/ApiActions";
import {useNavigate} from "react-router-dom";

const Orders = ({spacing}) => {

    const expand = useSelector(state => state.api.expandOrders);
    const dispatch = useDispatch();
    const getCurrentUserRef = useRef(null);
    const loginUserRef = useRef(null);
    const navigate = useNavigate();

    const expandOrders = () => dispatch(expandOrdersAction());

    const collapseOrders = () => dispatch(collapseOrdersAction());

    const scrollToCurrentUser = () => {
        if (!expand) {
            expandOrders()
            setTimeout(() => {
                getCurrentUserRef.current.scrollIntoView()
            }, 500)
        }
        getCurrentUserRef.current.scrollIntoView()
    }

    const scrollToLoginUser = () => {
        if (!expand) {
            expandOrders()
            setTimeout(() => {
                loginUserRef.current.scrollIntoView()
            }, 500)
        }
        loginUserRef.current.scrollIntoView()
    }

    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={collapseOrders} className={"ShowCollapsedSectionButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={expandOrders} className={"ShowCollapsedSectionButton"}>
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
                        In this case Oxinance will send an email message to the email address provided by the user during the checkout containing all order details.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={() => navigate("/api#orders/list-orders")} title={"Lists all user orders"} method={"GET"}>/v1/orders</Endpoint>
                        <Endpoint onClick={() => navigate("/api#orders/get-order")} title={"Retrieves a specific order"} method={"GET"}>/v1/orders/:id</Endpoint>
                    </EndpointsCode>
                </Grid>
            </Grid>
            <Collapsible open={expand}>
                <Divider/>
                <OrderObject spacing={spacing}/>
                <Divider/>
                <GetOrders spacing={spacing} ref={getCurrentUserRef}/>
                <Divider/>
                <GetOrder spacing={spacing} ref={loginUserRef}/>
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
