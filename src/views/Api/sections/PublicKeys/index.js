import Grid from "@mui/material/Grid";
import Code from "../../components/Code";
import SyntaxText from "../../components/SyntaxText";
import {useState} from "react";
import {Token, String, Comment, TipWord} from "../../components/Keywords/index";

const exampleKey = "pk_test_711375ef-6f43-4ff9-ab13-237bfe5550e2";

const PublicKeys = ({spacing}) => {

    const [selectedLanguage, setSelectedLanguage] = useState("Node JS")

    const renderGlobalPublicKeyContent = () => {

        if (selectedLanguage === "Node JS") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> oxinance = require(<String>&quot;oxinance&quot;</String>)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> oxinance<Comment>.</Comment>publicKey = <String>&quot;{exampleKey}&quot;</String><Comment>;</Comment></p>
                </>
            )
        }
        else if (selectedLanguage === "Axios") {
            return (
                <>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>1</span> <Token>const</Token> axios = require(<String>&quot;axios&quot;</String>)<Comment>;</Comment></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>2</span></p>
                    <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#697386"}}>3</span> axios<Comment>.</Comment>defaults<Comment>.</Comment>headers<Comment>.</Comment>common[<String>&quot;project-public-key&quot;</String>] = <String>&quot;{exampleKey}&quot;</String><Comment>;</Comment></p>
                </>
            )
        } else if (selectedLanguage === "cURL") {
            return (
                <p style={{color: "#F5FBFF", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> curl <Comment>api.oxinance.com/v1/user</Comment> \ <br/>&nbsp;&nbsp;-XGET -H <String>&quot;project-public-key: <String>{exampleKey}</String>&quot;</String></p>
            )
        }
    }

    return (
        <Grid style={{backgroundColor: "white", borderBottom: "1px solid #E3E8EE", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Public Keys</p>

                <p style={{fontSize: 16, color: "#4F566B"}}>Oxinance API uses public keys to identify your Shop and access it&apos;s resources from any platform that can perform HTTP Requests.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>
                    Each Shop is provided with 2 public keys on creation, each one giving access to <TipWord title={"Live environment interacts directly with banking networks"}>Live</TipWord> and <TipWord title={"Test environment mocks payments and does not interact with Live data"}>Test</TipWord> environments, usually starting with the prefixes <SyntaxText>pk_live</SyntaxText> and <SyntaxText>pk_test</SyntaxText>.</p>
                <br/>
                <p style={{fontSize: 16, color: "#4F566B"}}>In order to identify your Shop every HTTP Request against our API should include the header <SyntaxText>project-public-key</SyntaxText>.</p>
            </Grid>
            <Grid item xs={12} lg={6}>
                <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Public Keys</p>
                <Code title={"GLOBAL PUBLIC KEY"} selectedLanguage={selectedLanguage} showMenu={true} menuItems={[
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
            </Grid>
        </Grid>
    )
}

export default PublicKeys;
