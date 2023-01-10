import Grid from "@mui/material/Grid";
import {TipWord} from "../../components/Keywords";
import SyntaxText from "../../components/SyntaxText";
import EndpointsCode from "../../components/EndpointsCode";
import Endpoint from "../../components/Endpoint";
import {Divider} from "@mui/material";
import {useRef, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapsible from "./Collapsible";
import GetCurrentUser from "./GetCurrentUser";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import UserObject from "./UserObject";
import {useDispatch, useSelector} from "react-redux";
import {collapseUsersAction, expandUsersAction} from "../../../../redux/actions/ApiActions";
import {useNavigate} from "react-router-dom";

const Users = ({spacing}) => {

    const expand = useSelector(state => state.api.expandUsers)
    const dispatch = useDispatch();
    const getCurrentUserRef = useRef(null);
    const loginUserRef = useRef(null);
    const registerUserRef = useRef(null);
    const navigate = useNavigate();

    const expandUsers = () => dispatch(expandUsersAction());

    const collapseUsers = () => dispatch(collapseUsersAction());

    const scrollToCurrentUser = () => {
        if (!expand) {
            expandUsers()
            setTimeout(() => {
                getCurrentUserRef.current.scrollIntoView()
            }, 500)
        }
        getCurrentUserRef.current.scrollIntoView()
    }

    const scrollToLoginUser = () => {
        if (!expand) {
            expandUsers()
            setTimeout(() => {
                loginUserRef.current.scrollIntoView()
            }, 500)
        }
        loginUserRef.current.scrollIntoView()
    }

    const scrollToRegisterUser = () => {
        if (!expand) {
            expandUsers()
            setTimeout(() => {
                registerUserRef.current.scrollIntoView()
            }, 500)
        }
        registerUserRef.current.scrollIntoView()
    }

    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={collapseUsers} className={"ShowCollapsedSectionButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={expandUsers} className={"ShowCollapsedSectionButton"}>
                <p>Expand</p>
                <ExpandMoreIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
            </div>
        )
    }

    return (
        <>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Users</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Oxinance API provides built-in User authentication. This object represents a logged-in customer of your business. It lets you place <TipWord onClick={() => navigate("/api#orders")}>Orders</TipWord>, keep track of <TipWord onClick={() => navigate("/api#cart-items")}>Cart Items</TipWord> and manage <TipWord title={"Shipping Addresses"}>Shipping Addresses</TipWord>.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>In order to access this API, your Shop settings must have <SyntaxText>Allow Authentication</SyntaxText> option set to <SyntaxText>true</SyntaxText>. This can be done through <TipWord title={"Click to visit"}>Oxinance Dashboard</TipWord>.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={scrollToCurrentUser} title={"Gets current logged-in User"} method={"GET"}>/v1/users/current</Endpoint>
                        <Endpoint onClick={scrollToLoginUser} title={"Authenticates an User"} method={"POST"}>/v1/users/login</Endpoint>
                        <Endpoint onClick={scrollToRegisterUser} title={"Registers an User"} method={"POST"}>/v1/users/register</Endpoint>
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

export default Users;
