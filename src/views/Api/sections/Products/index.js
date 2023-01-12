import Grid from "@mui/material/Grid";
import {TipWord} from "../../components/Keywords";
import EndpointsCode from "../../components/EndpointsCode";
import Endpoint from "../../components/Endpoint";
import {Divider} from "@mui/material";
import {useRef} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapsible from "../Users/Collapsible";
import ProductObject from "./ProductObject";
import GetProducts from "./GetProducts";
import GetProduct from "./GetProduct";
import {useDispatch, useSelector} from "react-redux";
import {collapseProductsAction, expandProductsAction} from "../../../../redux/actions/ApiActions";
import {useNavigate} from "react-router-dom";


const Products = ({spacing}) => {

    const expand = useSelector(state => state.api.expandProducts);
    const dispatch = useDispatch()
    const getProductsRef = useRef(null);
    const getProductRef = useRef(null);
    const navigate = useNavigate();

    const expandProducts = () => dispatch(expandProductsAction());

    const collapseProducts = () => dispatch(collapseProductsAction());

    const scrollToCurrentUser = () => {
        if (!expand) {
            expandProducts()
            setTimeout(() => {
                getProductsRef.current.scrollIntoView()
            }, 500)
        }
        getProductsRef.current.scrollIntoView()
    }

    const scrollToLoginUser = () => {
        if (!expand) {
            expandProducts()
            setTimeout(() => {
                getProductRef.current.scrollIntoView()
            }, 500)
        }
        getProductRef.current.scrollIntoView()
    }

    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={collapseProducts} className={"ShowCollapsedSectionButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={expandProducts} className={"ShowCollapsedSectionButton"}>
                <p>Expand</p>
                <ExpandMoreIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
            </div>
        )
    }

    return (
        <>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Products</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Products describe the specific goods or services you offer to your customers.</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Oxinance fetches your <TipWord>products</TipWord> from the <TipWord>Stripe</TipWord> account your shop is connected with.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>In order to access this API, your Shop must be connected to a Stripe Account. This can be done through <TipWord title={"Click to visit"}>Oxinance Dashboard</TipWord>.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={() => navigate("/api#products/list-products")} title={"Lists all products"} method={"GET"}>/v1/products</Endpoint>
                        <Endpoint onClick={() => navigate("/api#products/get-product")} title={"Gets product with specified id"} method={"GET"}>/v1/products/:id</Endpoint>
                    </EndpointsCode>
                </Grid>
            </Grid>
            <Collapsible open={expand}>
                <Divider/>
                <ProductObject spacing={spacing}/>
                <Divider/>
                <GetProducts spacing={spacing} ref={getProductsRef}/>
                <Divider/>
                <GetProduct spacing={spacing} ref={getProductRef}/>
            </Collapsible>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", borderBottom: "1px solid #E3E8EE", paddingBottom: 100}} container>
                <Grid style={{margin: "auto"}} item sx={12}>
                    {renderExpandButton()}
                </Grid>
            </Grid>
        </>
    )
}

export default Products;
