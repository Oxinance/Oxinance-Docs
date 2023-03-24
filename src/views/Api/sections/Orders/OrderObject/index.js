import Grid from "@mui/material/Grid";
import EndpointsCode from "../../../components/EndpointsCode";
import Attribute from "../../../components/Attribute";
import {attributes, response} from "../data";
import {jsonSyntaxHighlight} from "../../Users/utils";

const OrderObject = ({spacing}) => {

    return (
        <Grid style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>The Order object</p>
                <p style={{fontSize: 16, color: "#4F566B"}}>Attributes</p>
                {attributes.map((attribute, index) => {
                    return <Attribute key={index} data={attribute}/>
                })}
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>The user object</p>
                <EndpointsCode title={"THE ORDER OBJECT"} style={{marginTop: 10}}>
                    <pre style={{ffontFamily: "JetBrainsMono-Medium", color: "#697386", fontSize: 13}} dangerouslySetInnerHTML={{__html: jsonSyntaxHighlight(response)}}/>
                </EndpointsCode>
            </Grid>
        </Grid>
    )
}

export default OrderObject;
