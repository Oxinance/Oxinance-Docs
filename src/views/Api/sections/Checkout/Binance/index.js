import Grid from "@mui/material/Grid";
import EndpointsCode from "../../../components/EndpointsCode";
import Divider from "@mui/material/Divider";
import Attribute from "../../../components/Attribute";
import SyntaxText from "../../../components/SyntaxText";
import {binanceAttributes, binanceParameters, binanceResponse} from "../data";
import {jsonSyntaxHighlight} from "../../Users/utils";
import Parameter from "../../../components/Parameter";
import Code from "../../../components/Code";
import {Comment, String, Token} from "../../../components/Keywords";
import {useState} from "react";
const examplePublicKey = "pk_test_711375ef-6f43-4ff9-ab13-237bfe5550e2"
const exampleAuthToken = "84db512cc9517bea10514bdc63c7fa3069c1c2da"
const endpoint = "/v1/checkout/binance"

const Binance = ({spacing}) => {

    const [selectedLanguage, setSelectedLanguage] = useState("Node JS")

    const renderGlobalPublicKeyContent = () => {

        if (selectedLanguage === "Node JS") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> Oxinance = require(<String>&quot;oxinance&quot;</String>);</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>3</span> <Token>const</Token> oxinance = Oxinance(<String>&quot;{examplePublicKey}&quot;</String>);</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>4</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>5</span> <Token>const</Token> cartItem = oxinance.createCartItem(<String>&quot;price_1M8vGZPUv1akEq5tPuAnbzp1&quot;</String>, 2);</p>

                </>
            )
        }
        else if (selectedLanguage === "Axios") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> axios = require(<String>&quot;axios&quot;</String>);</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>3</span> axios.defaults.baseURL = <String>&quot;https://api.oxinance.com&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>3</span> axios.defaults.headers.common[<String>&quot;project-public-key&quot;</String>] = <String>&quot;{examplePublicKey}&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>4</span> axios.defaults.headers.common[<String>&quot;project-authorization&quot;</String>] = <String>&quot;Token {exampleAuthToken}&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>5</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>6</span> <Token>const</Token> cartItem = <Token>await</Token> axios.post(<String>&quot;{endpoint}&quot;</String>);</p>
                </>
            )
        } else if (selectedLanguage === "cURL") {
            return (
                <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> curl <Comment>api.oxinance.com/v1/checkout/binance</Comment> -XPOST \ <br/> &nbsp;&nbsp;-H <String>&quot;project-public-key: <String>{examplePublicKey}</String>&quot;</String> \ <br/> &nbsp;&nbsp;-H <String>&quot;project-authorization: <String>{exampleAuthToken}</String>&quot;</String></p>
            )
        }
    }


    return (
        <Grid id={"api-checkout-binance"} style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Binance</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Generates a Binance checkout session.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Request parameters</p>
                {binanceParameters.map((attribute, index) => {
                    return <Parameter key={index} data={attribute}/>
                })}
                <Divider/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Response attributes</p>
                {binanceAttributes.map((attribute, index) => {
                    return <Attribute key={index} data={attribute}/>
                })}
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>The user object</p>
                <Code title={<p style={{color: "#A3ACB9", fontSize: 10, fontFamily: "Menlo, Consolas, monospace"}}><Token>POST</Token> {endpoint}</p>} selectedLanguage={selectedLanguage} showMenu={true} menuItems={[
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
                    <pre style={{fontFamily: "Menlo, Consolas, monospace", color: "#697386", fontSize: 13}} dangerouslySetInnerHTML={{__html: jsonSyntaxHighlight(binanceResponse)}}/>
                </EndpointsCode>
            </Grid>
        </Grid>
    )
}

export default Binance;
