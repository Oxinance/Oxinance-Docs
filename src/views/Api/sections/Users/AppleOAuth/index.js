import Grid from "@mui/material/Grid";
import {BlankLine, Comment, String, Token} from "../../../components/Keywords";
import SyntaxText from "../../../components/SyntaxText";
import {useState, forwardRef} from "react";
import Code from "../../../components/Code";
import EndpointsCode from "../../../components/EndpointsCode";
import {jsonSyntaxHighlight} from "../utils";
import {loginResponse, response} from "../data";
import Divider from "@mui/material/Divider";

const examplePublicKey = "pk_test_711375ef-6f43-4ff9-ab13-237bfe5550e2"
const exampleAuthToken = "84db512cc9517bea10514bdc63c7fa3069c1c2da"
const endpoint = "/v1/users/oauth/apple"

const AppleOAuth = forwardRef((props, ref) => {

    const [selectedLanguage, setSelectedLanguage] = useState("Node JS")

    const renderGlobalPublicKeyContent = () => {

        if (selectedLanguage === "Node JS") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span>&nbsp; <Token>const</Token> oxinance = require(<String>&quot;oxinance&quot;</String>)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span>&nbsp; oxinance<Comment>.</Comment>publicKey = <String>&quot;{examplePublicKey}&quot;</String><Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>4</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>5</span>&nbsp; <Token>const</Token> urlParams = <Token>new</Token> URLSearchParams(window<Comment>.</Comment>location<Comment>.</Comment>search)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span>&nbsp; <Token>const</Token> code = urlParams<Comment>.</Comment>get(<String>&quot;code&quot;</String>)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>7</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>8</span>&nbsp; <Token>const</Token> response = <Token>await</Token> oxinance<Comment>.</Comment>Users<Comment>.</Comment>authenticateWithApple(code)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>9</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>10</span>&nbsp;oxinance<Comment>.</Comment>authenticationToken = response<Comment>.</Comment>data<Comment>.</Comment>token<Comment>;</Comment></p>
                </>
            )
        }
        else if (selectedLanguage === "Axios") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span>&nbsp; <Token>const</Token> axios = require(<String>&quot;axios&quot;</String>);</p>
                    <BlankLine number={2}/>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span>&nbsp; axios.defaults.baseURL = <String>&quot;https://api.oxinance.com&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>4</span>&nbsp; axios.defaults.headers.common[<String>&quot;project-public-key&quot;</String>] = <String>&quot;{examplePublicKey}&quot;</String>;</p>
                    <BlankLine number={5}/>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span>&nbsp; <Token>const</Token> urlParams = <Token>new</Token> URLSearchParams(window<Comment>.</Comment>location<Comment>.</Comment>search)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>7</span>&nbsp; <Token>const</Token> code = urlParams<Comment>.</Comment>get(<String>&quot;code&quot;</String>)<Comment>;</Comment></p>
                    <BlankLine number={8}/>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>9</span>&nbsp;<Token> const</Token> response = <Token>await</Token> axios.post(<String>&quot;{endpoint}&quot;</String>, &#123;code: code&#125;);</p>
                    <BlankLine number={10}/>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>11</span>&nbsp;<Comment>localStorage.setItem(&quot;token&quot;, response<Comment>.</Comment>data<Comment>.</Comment>token);</Comment></p>
                </>
            )
        } else if (selectedLanguage === "cURL") {
            return (
                <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> curl <Comment>https://api.oxinance.com/v1/users/oauth/apple</Comment> -XPOST \ <br/> &nbsp;&nbsp;-H <String>&quot;project-public-key: <String>{examplePublicKey}</String>&quot;</String> \ <br/> &nbsp;&nbsp;-H <String>&quot;project-authorization: <String>{exampleAuthToken}</String>&quot;</String>  \ <br/>&nbsp;&nbsp;-d code=<String>&quot;mock_oauth_code_abcdefghijklmnopqrstuvwxyz&quot;</String></p>
            )
        }
    }

    return (
        <Grid id={"api-users-oauth-apple"} ref={ref} style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={props.spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>OAuth 2.0 with Apple</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Logs in or registers a user with Apple and returns user&apos;s authentication token which can be used to authenticate future requests.</p>
                <br/>
                <p style={{fontSize: 12, color: "#4F566B"}}>Every time a user logs in successfully his <SyntaxText fontSize={12}>last_login</SyntaxText> property is updated.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Parameters</p>
                <Divider/>
                <p><SyntaxText>code</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#E56F4A"}}>REQUIRED</span></p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Is obtained from URL parameters after the User is successfully redirected from Microsoft login page to your website.</p>
                <br/>
                <Divider/>
                <p><SyntaxText>metadata</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>hash</span> <span style={{fontSize: 10, color: "#A3ACB9"}}>optional</span></p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Hash that can be used to store any additional data about a user</p>
                <br/>
                <Divider/>
                <br/>
                <p style={{fontSize: 14, color: "#4F566B"}}>In case a User registers using <SyntaxText>/v1/users/register</SyntaxText> endpoint and then tries to login with Apple using same email, Oxinance API will link the existing account to the Apple account and the User will be able to perform authentication from <SyntaxText>/v1/users/login</SyntaxText> endpoint and <SyntaxText>/v1/users/oauth/apple</SyntaxText> endpoint, allowing basic and modern authentication for that User.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Returns</p>
                <Divider/>
                <p style={{fontSize: 14, color: "#4F566B"}}>Returns user&apos;s authentication token.</p>
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Public Keys</p>
                <Code title={<p style={{color: "#A3ACB9", fontSize: 10, fontFamily: "JetBrainsMono-Medium",}}><String>POST</String> {endpoint}</p>} selectedLanguage={selectedLanguage} showMenu={true} menuItems={[
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
                    <pre style={{fontFamily: "JetBrainsMono-Medium", color: "#697386", fontSize: 13}} dangerouslySetInnerHTML={{__html: jsonSyntaxHighlight(loginResponse)}}/>
                </EndpointsCode>
            </Grid>
        </Grid>
    )
})

export default AppleOAuth;
