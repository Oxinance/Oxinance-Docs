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
import CartItemObject from "./CartItemObject";
import GetCartItems from "./GetCartItems";
import CreateCartItem from "./CreateCartItem";

const CartWord = () => <TipWord title={"Abstraction that refers to a collection of Cart Items"}>Cart</TipWord>

const Cart = ({spacing}) => {

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
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Cart Items (Cart)</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Cart Item object is used to represent a Product/Quantity combination the User wants to buy, a User can have multiple <TipWord>Cart Items</TipWord>.</p>
                    <br/>
                    <p style={{fontSize: 16, color: "#4F566B"}}>The User&apos;s <CartWord/> is basically just a list of <TipWord>Cart Items</TipWord>, you can only interact with <TipWord>Cart Items</TipWord> using our API because the <CartWord/> object does not contain any properties and it only exists as a link between multiple <TipWord>Cart Items</TipWord> and a User.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>Non-authenticated customers are not able to access this API.<br/><br/>In order to simulate a cart for non-authenticated customers we recommend you use the <TipWord>Local Storage</TipWord> of the device to save the cart items along with the quantity and then use <TipWord>Guest Checkout API</TipWord> to generate a <TipWord>Guest Checkout</TipWord> for the non-authenticated customer.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={scrollToCurrentUser} title={"Gets all items from cart"} method={"GET"}>/v1/cart/items</Endpoint>
                        <Endpoint onClick={scrollToLoginUser} title={"Adds new item to cart"} method={"POST"}>/v1/cart/items</Endpoint>
                        <Endpoint onClick={scrollToLoginUser} title={"Removes item from cart"} method={"DELETE"}>/v1/cart/items/:id</Endpoint>
                        <Endpoint onClick={scrollToLoginUser} title={"Changes the quantity of a specific item"} method={"PUT"}>/v1/cart/items/:id/quantity</Endpoint>
                    </EndpointsCode>
                </Grid>
            </Grid>
            <Collapsible open={expand}>
                <Divider/>
                <CartItemObject spacing={spacing}/>
                <Divider/>
                <GetCartItems spacing={spacing} ref={getCurrentUserRef}/>
                <Divider/>
                <CreateCartItem spacing={spacing} ref={loginUserRef}/>
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

export default Cart;
