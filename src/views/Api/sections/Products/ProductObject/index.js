import Grid from "@mui/material/Grid";
import EndpointsCode from "../../../components/EndpointsCode";
import Divider from "@mui/material/Divider";
import Attribute from "../../../components/Attribute";
import SyntaxText from "../../../components/SyntaxText";
import {attributes, exampleResponse} from "../data";
import {jsonSyntaxHighlight} from "../../Users/utils";

const ProductObject = ({spacing}) => {

    return (
        <Grid style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>The product object</p>
                <p style={{fontSize: 16, color: "#4F566B"}}>Attributes</p>
                {attributes.map((attribute, index) => {
                    return <Attribute key={index} data={attribute}/>
                })}
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>The user object</p>
                <EndpointsCode title={"THE PRODUCT OBJECT"} style={{marginTop: 10}}>
                    <pre style={{fontFamily: "Menlo, Consolas, monospace", color: "#697386", fontSize: 13}} dangerouslySetInnerHTML={{__html: jsonSyntaxHighlight(exampleResponse)}}/>
                </EndpointsCode>
            </Grid>
        </Grid>
    )
}

export default ProductObject;