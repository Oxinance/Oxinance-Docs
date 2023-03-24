import Grid from "@mui/material/Grid";
import {Comment, String, TipWord, Token} from "../../../components/Keywords";
import {useState, forwardRef} from "react";
import Code from "../../../components/Code";
import EndpointsCode from "../../../components/EndpointsCode";
import {jsonSyntaxHighlight} from "../../Users/utils";
import {response} from "../data";
import Divider from "@mui/material/Divider";

const examplePublicKey = "pk_test_711375ef-6f43-4ff9-ab13-237bfe5550e2"
const exampleAuthToken = "84db512cc9517bea10514bdc63c7fa3069c1c2da"
const endpoint = "/v1/orders/:id"
const productId = "order_63e5926acb4c41439e975b51cb36d3ef"

const GetOrder = forwardRef((props, ref) => {

    const [selectedLanguage, setSelectedLanguage] = useState("Node JS")

    const renderGlobalPublicKeyContent = () => {

        if (selectedLanguage === "Node JS") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> oxinance = require(<String>&quot;oxinance&quot;</String>)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> oxinance<Comment>.</Comment>publicKey = <String>&quot;{examplePublicKey}&quot;</String><Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>4</span> oxinance<Comment>.</Comment>authenticationToken = <String>&quot;{exampleAuthToken}&quot;</String><Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>5</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span> <Token>const</Token> response = <Token>await</Token> oxinance<Comment>.</Comment>Orders<Comment>.</Comment>get(<String>&quot;{productId}&quot;</String>)<Comment>;</Comment></p>
                </>
            )
        }
        else if (selectedLanguage === "Axios") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> axios = require(<String>&quot;axios&quot;</String>);</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> axios.defaults.baseURL = <String>&quot;https://api.oxinance.com&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>4</span> axios.defaults.headers.common[<String>&quot;project-public-key&quot;</String>] = <String>&quot;{examplePublicKey}&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>5</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span> <Token>const</Token> products = <Token>await</Token> axios.get(<String>&quot;https://api.oxinance.com/v1/products/prod_MsgdQ7sIvoLL2H&quot;</String>);</p>
                </>
            )
        } else if (selectedLanguage === "cURL") {
            return (
                <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> curl <Comment>api.oxinance.com/v1/products/prod_MsgdQ7sIvoLL2H</Comment> -XGET \ <br/> &nbsp;&nbsp;-H <String>&quot;project-public-key: <String>{examplePublicKey}</String>&quot;</String></p>
            )
        }
    }

    return (
        <Grid id={"api-orders-get"} ref={ref} style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={props.spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Get order</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Retrieves the details of an existing order. Supply the unique order ID and Oxinance will return the corresponding order information.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Parameters</p>
                <Divider/>
                <p style={{fontSize: 12, color: "#A3ACB9"}}>No parameters</p>
                <br/>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Returns</p>
                <Divider/>
                <p style={{fontSize: 14, color: "#4F566B"}}>Returns a order object if a valid identifier was provided.</p>
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Get product</p>
                <Code title={<p style={{color: "#A3ACB9", fontSize: 10, fontFamily: "JetBrainsMono-Medium",}}><Token>GET</Token> {endpoint}</p>} selectedLanguage={selectedLanguage} showMenu={true} menuItems={[
                    {
                        label: "Node JS", onClick: () => setSelectedLanguage("Node JS"),
                    },
                    {
                        label: "Axios", onClick: () => setSelectedLanguage("Axios"),
                    },
                    {
                        label: "cURL", onClick: () => setSelectedLanguage("cURL"),
                    },
                ]}>
                    {renderGlobalPublicKeyContent()}
                </Code>
                <EndpointsCode title={"RESPONSE"} style={{marginTop: 10}}>
                    <pre style={{fontFamily: "JetBrainsMono-Medium", color: "#697386", fontSize: 13}} dangerouslySetInnerHTML={{__html: jsonSyntaxHighlight(response)}}/>
                </EndpointsCode>
            </Grid>
        </Grid>
    )
})

export default GetOrder;
