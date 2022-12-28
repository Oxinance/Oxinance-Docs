import Grid from "@mui/material/Grid";
import {BlankLine, Comment, String, TipWord, Token} from "../../../components/Keywords";
import SyntaxText from "../../../components/SyntaxText";
import {useState, forwardRef} from "react";
import Code from "../../../components/Code";
import EndpointsCode from "../../../components/EndpointsCode";
import {jsonSyntaxHighlight} from "../utils";
import {loginResponse, response} from "../data";
import Divider from "@mui/material/Divider";

const examplePublicKey = "pk_test_711375ef-6f43-4ff9-ab13-237bfe5550e2"
const exampleAuthToken = "84db512cc9517bea10514bdc63c7fa3069c1c2da"
const endpoint = "/v1/users/register"

const RegisterUser = forwardRef((props, ref) => {

    const [selectedLanguage, setSelectedLanguage] = useState("Node JS")

    const renderGlobalPublicKeyContent = () => {

        if (selectedLanguage === "Node JS") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> Oxinance = require(<String>&quot;oxinance&quot;</String>);</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>3</span> <Token>const</Token> oxinance = Oxinance(<String>&quot;{examplePublicKey}&quot;</String>);</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>4</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>5</span> <Token>const</Token> oxinance.register(&#123;username: <String>&quot;Jane Doe&quot;</String>, email: <String>&quot;jane@example.com&quot;</String>, password1: <String>&quot;JanePassword&quot;</String>, password2: <String>&quot;JanePassword&quot;</String>&#125;);</p>

                </>
            )
        }
        else if (selectedLanguage === "Axios") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> axios = require(<String>&quot;axios&quot;</String>);</p>
                    <BlankLine number={2}/>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>3</span> axios.defaults.baseURL = <String>&quot;https://api.oxinance.com&quot;</String>;</p>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>4</span> axios.defaults.headers.common[<String>&quot;project-public-key&quot;</String>] = <String>&quot;{examplePublicKey}&quot;</String>;</p>
                    <BlankLine number={5}/>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>6</span><Token> const</Token> token = <Token>await</Token> axios.post(<String>&quot;{endpoint}&quot;</String>, &#123;username: <String>&quot;Jane Doe&quot;</String>, email: <String>&quot;jane@example.com&quot;</String>, password1: <String>&quot;JanePassword&quot;</String>, password2: <String>&quot;JanePassword&quot;</String>&#125;);</p>
                    <BlankLine number={7}/>
                    <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#697386"}}>8</span> <Comment>localStorage.setItem(&quot;token&quot;, token);</Comment></p>
                </>
            )
        } else if (selectedLanguage === "cURL") {
            return (
                <p style={{color: "#F5FBFF", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> curl <Comment>https://api.oxinance.com/v1/users/register</Comment> -XPOST \ <br/> &nbsp;&nbsp;-H <String>&quot;project-public-key: <String>{examplePublicKey}</String>&quot;</String> \ <br/> &nbsp;&nbsp;-H <String>&quot;project-authorization: <String>{exampleAuthToken}</String>&quot;</String>  \ <br/>&nbsp;&nbsp;-d username=<String>&quot;Jane Doe&quot;</String> \ <br/>&nbsp;&nbsp;-d email=<String>&quot;jane@example.com&quot;</String> \ <br/>&nbsp;&nbsp;-d password1=<String>&quot;JanePassword&quot;</String> \ <br/>&nbsp;&nbsp;-d password2=<String>&quot;JanePassword&quot;</String></p>
            )
        }
    }

    return (
        <Grid ref={ref} style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={props.spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Register a user</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Register a user and returns user&apos;s authentication token which can be used to authenticate future requests.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Parameters</p>
                <Divider/>
                <p><SyntaxText>username</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#E56F4A"}}>REQUIRED</span></p>
                <Divider/>
                <p><SyntaxText>email</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#E56F4A"}}>REQUIRED</span></p>
                <Divider/>
                <p><SyntaxText>password1</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#E56F4A"}}>REQUIRED</span></p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Must be equal to <SyntaxText>password2</SyntaxText></p>
                <Divider/>
                <p><SyntaxText>password2</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#E56F4A"}}>REQUIRED</span></p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Must be equal to <SyntaxText>password1</SyntaxText></p>
                <Divider/>
                <p><SyntaxText>first_name</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#A3ACB9"}}>optional</span></p>
                <Divider/>
                <p><SyntaxText>last_name</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#A3ACB9"}}>optional</span></p>
                <Divider/>
                <p><SyntaxText>metadata</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>hash</span> <span style={{fontSize: 10, color: "#A3ACB9"}}>optional</span></p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Hash that can be used to store any additional data about a user</p>
                <br/>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Returns</p>
                <Divider/>
                <p style={{fontSize: 14, color: "#4F566B"}}>Returns user&apos;s authentication token.</p>
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Public Keys</p>
                <Code title={<p style={{color: "#A3ACB9", fontSize: 10, fontFamily: "Menlo, Consolas, monospace"}}><String>POST</String> {endpoint}</p>} selectedLanguage={selectedLanguage} showMenu={true} menuItems={[
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
                    <pre style={{fontFamily: "Menlo, Consolas, monospace", color: "#697386", fontSize: 13}} dangerouslySetInnerHTML={{__html: jsonSyntaxHighlight(loginResponse)}}/>
                </EndpointsCode>
            </Grid>
        </Grid>
    )
})

export default RegisterUser;
