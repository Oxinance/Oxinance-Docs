import Grid from "@mui/material/Grid";
import {Comment, String, TipWord, Token} from "../../../components/Keywords";
import SyntaxText from "../../../components/SyntaxText";
import {useState, forwardRef} from "react";
import Code from "../../../components/Code";
import EndpointsCode from "../../../components/EndpointsCode";
import {jsonSyntaxHighlight} from "../../Users/utils";
import {response} from "../data";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";

const examplePublicKey = "pk_test_711375ef-6f43-4ff9-ab13-237bfe5550e2"
const exampleAuthToken = "84db512cc9517bea10514bdc63c7fa3069c1c2da"
const endpoint = "/v1/cart/items"

const CreateCartItem = forwardRef((props, ref) => {
    const navigate = useNavigate();
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
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span> <Token>const</Token> response = <Token>await</Token> oxinance<Comment>.</Comment>CartItems<Comment>.</Comment>create(<String>&quot;price_1M8vGZPUv1akEq5tPuAnbzp1&quot;</String>, <Token>2</Token>)<Comment>;</Comment></p>

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
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>6</span> <Token>const</Token> cartItem = <Token>await</Token> axios.post(<String>&quot;{endpoint}&quot;</String>, &#123;price_id: <String>&quot;price_1M8vGZPUv1akEq5tPuAnbzp1&quot;</String>, quantity: 2&#125;);</p>
                </>
            )
        } else if (selectedLanguage === "cURL") {
            return (
                <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> curl <Comment>api.oxinance.com/v1/cart/items</Comment> -XPOST \ <br/> &nbsp;&nbsp;-H <String>&quot;project-public-key: <String>{examplePublicKey}</String>&quot;</String> \ <br/> &nbsp;&nbsp;-H <String>&quot;project-authorization: <String>{exampleAuthToken}</String>&quot;</String>  \ <br/>&nbsp;&nbsp;-d price_id=<String>&quot;price_1M8vGZPUv1akEq5tPuAnbzp1&quot;</String> \ <br/>&nbsp;&nbsp;-d quantity=2</p>
            )
        }
    }

    return (
        <Grid id={"api-cart-items-create"} ref={ref} style={{backgroundColor: "white", paddingTop: 80, paddingBottom: 80}} container px={props.spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Create cart item</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>Creates a Cart Item with the specified <SyntaxText fontSize={12}>price_id</SyntaxText> and <SyntaxText fontSize={12}>quantity</SyntaxText>.</p>
                <p style={{fontSize: 14, color: "#4F566B"}}>If the user already possesses a <TipWord onClick={() => navigate("/api#cart-items")}>Cart Item</TipWord> with the specified <SyntaxText fontSize={12}>price_id</SyntaxText>, the API will sum the <SyntaxText fontSize={12}>quantity</SyntaxText> of both <TipWord onClick={() => navigate("/api#cart-items")}>Cart Items</TipWord> and return the older one.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Parameters</p>
                <Divider/>
                <p><SyntaxText>price_id</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>string</span> <span style={{fontSize: 10, color: "#E56F4A"}}>REQUIRED</span></p>
                <p style={{fontSize: 14, color: "#4F566B"}}>The Price ID belonging to the Product the user wants to buy, if the user already possesses a Cart Item with the specified <SyntaxText fontSize={12}>price_id</SyntaxText>, the API will sum the <SyntaxText fontSize={12}>quantity</SyntaxText> of both Cart Items and return the older one.</p>
                <Divider/>
                <p><SyntaxText>quantity</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>integer</span> <span style={{fontSize: 10, color: "#E56F4A"}}>REQUIRED</span></p>
                <p style={{fontSize: 14, color: "#4F566B"}}>The amount of units the user wants to purchase from this particular Product.</p>
                <br/>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>Returns</p>
                <Divider/>
                <p style={{fontSize: 14, color: "#4F566B"}}>Returns the created Cart Item.</p>
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Public Keys</p>
                <Code title={<p style={{color: "#A3ACB9", fontSize: 10, fontFamily: "JetBrainsMono-Medium",}}><Token>POST</Token> {endpoint}</p>} selectedLanguage={selectedLanguage} showMenu={true} menuItems={[
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

export default CreateCartItem;
