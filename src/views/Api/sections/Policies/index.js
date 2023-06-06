import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    collapsePoliciesAction,
    expandPoliciesAction
} from "../../../../redux/actions/ApiActions";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import {TipWord} from "../../components/Keywords";
import EndpointsCode from "../../components/EndpointsCode";
import Endpoint from "../../components/Endpoint";
import Collapsible from "../Users/Collapsible";
import Divider from "@mui/material/Divider";
import Search from "./GetPolicy";
import PolicyObject from "./PolicyObject";


const Policies = ({ spacing }) => {
    const expand = useSelector(state => state.api.expandPolicies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const expandPolicies = () => dispatch(expandPoliciesAction());
    const collapsePolicies = () => dispatch(collapsePoliciesAction());

    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={collapsePolicies} className={"ShowCollapsedSectionButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={expandPolicies} className={"ShowCollapsedSectionButton"}>
                <p>Expand</p>
                <ExpandMoreIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
            </div>
        )
    }

    return (
        <>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Policies</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Policies API provides convenient access to the policies of your shop.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>In order to access this API you need to configure your policies beforehand. You can do it <TipWord title={"Configure your policies"}><a style={{color: "inherit"}} rel={"noreferrer"} target={"_blank"} href={"https://dashboard.oxinance.com/settings/policies"}>here</a></TipWord>.
                        <br/>
                        </p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your age restriction policy"} method={"GET"}>/v1/policies/age-restriction-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your cancellation policy"} method={"GET"}>/v1/policies/cancellation-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your cookie policy"} method={"GET"}>/v1/policies/cookie-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your delivery policy"} method={"GET"}>/v1/policies/delivery-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your disclaimer policy"} method={"GET"}>/v1/policies/disclaimer-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your intellectual property policy"} method={"GET"}>/v1/policies/intellectual-property-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your payment policy"} method={"GET"}>/v1/policies/payment-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your privacy policy"} method={"GET"}>/v1/policies/privacy-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your refund policy"} method={"GET"}>/v1/policies/refund-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your return policy"} method={"GET"}>/v1/policies/return-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your shipping policy"} method={"GET"}>/v1/policies/shipping-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your social media policy"} method={"GET"}>/v1/policies/social-media-policy</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your terms of service"} method={"GET"}>/v1/policies/terms-of-service</Endpoint>
                        <Endpoint onClick={() => navigate("/api#policies/get-policy")} title={"Retrieves your warranty policy"} method={"GET"}>/v1/policies/warranty-policy</Endpoint>
                    </EndpointsCode>
                </Grid>
            </Grid>
            <Collapsible open={expand}>
                <Divider/>
                <PolicyObject spacing={spacing}/>
                <Divider/>
                <Search spacing={spacing}/>
            </Collapsible>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", borderBottom: "1px solid #E3E8EE", paddingBottom: 100}} container>
                <Grid style={{margin: "auto"}} item sx={12}>
                    {renderExpandButton()}
                </Grid>
            </Grid>
        </>
    )
}

export default Policies;