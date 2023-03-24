import Grid from "@mui/material/Grid";
import EndpointsCode from "../../../components/EndpointsCode";
import Attribute from "../../../components/Attribute";
import {attributes, exampleResponse} from "../data";
import {jsonSyntaxHighlight} from "../../Users/utils";
import {TipWord} from "../../../components/Keywords";

const ProductObject = ({spacing}) => {

    return (
        <Grid style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>The product object</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>See more on <TipWord onClick={() => window.open("https://stripe.com/docs/api/products/object", "_blank")}>Stripe Products</TipWord> official documentation.</p>
                <p style={{fontSize: 16, color: "#4F566B", marginTop: 10}}>Attributes</p>
                {attributes.map((attribute, index) => {
                    return <Attribute key={index} data={attribute}/>
                })}
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>The user object</p>
                <EndpointsCode title={"THE PRODUCT OBJECT"} style={{marginTop: 10}}>
                    <pre style={{fontFamily: "JetBrainsMono-Medium", color: "#697386", fontSize: 13}} dangerouslySetInnerHTML={{__html: jsonSyntaxHighlight(exampleResponse)}}/>
                </EndpointsCode>
            </Grid>
        </Grid>
    )
}

export default ProductObject;
