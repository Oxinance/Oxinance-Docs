import Grid from "@mui/material/Grid";
import {Comment, String, TipWord, Token} from "../../../components/Keywords";
import SyntaxText from "../../../components/SyntaxText";
import {useState, forwardRef} from "react";
import Code from "../../../components/Code";
import EndpointsCode from "../../../components/EndpointsCode";
import {jsonSyntaxHighlight} from "../utils";
import {response} from "../data";
import Divider from "@mui/material/Divider";

const examplePublicKey = "pk_test_711375ef-6f43-4ff9-ab13-237bfe5550e2"
const exampleAuthToken = "84db512cc9517bea10514bdc63c7fa3069c1c2da"
const endpoint = "/v1/users/current"

const GetCurrentUser = forwardRef((props, ref) => {

    const [selectedLanguage, setSelectedLanguage] = useState("Node JS")

    const renderGlobalPublicKeyContent = () => {

        if (selectedLanguage === "Node JS") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> oxinance = require(<String>&quot;oxinance&quot;</String>)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> oxinance<Comment>.</Comment>publicKey = <String>&quot;{examplePublicKey}&quot;</String><Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> oxinance<Comment>.</Comment>authenticationToken = <String>&quot;{exampleAuthToken}&quot;</String><Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>5</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span> <Token>const</Token> response = <Token>await</Token> oxinance<Comment>.</Comment>Users<Comment>.</Comment>getLoggedInUser()<Comment>;</Comment></p>

                </>
            )
        }
        else if (selectedLanguage === "Axios") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> axios = require(<String>&quot;axios&quot;</String>);</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> axios.defaults.baseURL = <String>&quot;https://api.oxinance.com&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> axios.defaults.headers.common[<String>&quot;project-public-key&quot;</String>] = <String>&quot;{examplePublicKey}&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>4</span> axios.defaults.headers.common[<String>&quot;project-authorization&quot;</String>] = <String>&quot;Token {exampleAuthToken}&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>5</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span> <Token>const</Token> user = <Token>await</Token> axios.get(<String>&quot;{endpoint}&quot;</String>);</p>
                </>
            )
        } else if (selectedLanguage === "cURL") {
            return (
                <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> curl <Comment>api.oxinance.com/v1/users/current</Comment> -XGET \ <br/> &nbsp;&nbsp;-H <String>&quot;project-public-key: <String>{examplePublicKey}</String>&quot;</String> \ <br/> &nbsp;&nbsp;-H <String>&quot;project-authorization: <String>{exampleAuthToken}</String>&quot;</String></p>
            )
        }
    }

    return (
        <Grid id={"api-users-current-user"} ref={ref} style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={props.spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Get current user</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Returns the User object for a valid <TipWord title={"Oxinance API uses Token-Based Authentication"}>Authentication Token</TipWord>, which can be sent with the prefix <SyntaxText fontSize={12}>Token</SyntaxText> on header <SyntaxText fontSize={12}>project-authorization</SyntaxText>.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Request Parameters</p>
                <Divider/>
                <p style={{fontSize: 12, color: "#A3ACB9"}}>No parameters</p>
                <br/>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Returns</p>
                <Divider/>
                <p style={{fontSize: 14, color: "#4F566B"}}>Returns the User object for a valid authentication token.</p>
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Public Keys</p>
                <Code title={<p style={{color: "#A3ACB9", fontSize: 10, fontFamily: "JetBrainsMono-Medium"}}><Token>GET</Token> /v1/users/current</p>} selectedLanguage={selectedLanguage} showMenu={true} menuItems={[
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

export default GetCurrentUser;
