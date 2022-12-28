import SoftBox from "../../../../components/SoftBox";
import Grid from "@mui/material/Grid";
import Code from "../../components/Code";
import {TipWord} from "../../components/Keywords";


const ApiReference = ({spacing}) => {
    return (
            <Grid style={{backgroundColor: "white", borderBottom: "1px solid #E3E8EE", paddingTop: 100, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>API Reference</p>

                    <p style={{fontSize: 16, color: "#4F566B"}}>Oxinance API is organized around <TipWord title={"Representational State Transfer"}>REST</TipWord>. Our API has predictable resource-oriented URLs, accepts <TipWord title={"Click to see more"}><a style={{color: "inherit"}} rel={"noreferrer"} target={"_blank"} href={"https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms"}>form-encoded</a></TipWord> request bodies, returns <TipWord title={"Click to see more"}><a style={{color: "inherit"}} rel={"noreferrer"} target={"_blank"} href={"https://www.json.org/json-en.html"}>JSON-encoded</a></TipWord> responses, and uses standard HTTP response codes, authentication, and verbs.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>You can use the Oxinance API in test mode, which doesn&apos;t affect your live data or interact with the banking networks (Except for <span style={{color: "#ffa900"}}>Binance</span>). The public key you use to identify your Shop determines whether the request is live mode or test mode.</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>API Reference</p>

                    <p style={{fontSize: 14, fontWeight: 600, color: "#2A2F45"}}>JUST GETTING STARTED?</p>
                    <p style={{fontSize: 14, color: "#4F566B", marginTop: 10}}>Check out our <a style={{color: "#556CD6"}}>development quickstart</a> guide.</p>
                    <br/>
                    <p style={{fontSize: 14, fontWeight: 600, color: "#2A2F45"}}>NOT A DEVELOPER?</p>
                    <p style={{fontSize: 14, color: "#4F566B", marginTop: 10}}>Use <a style={{color: "#556CD6"}}>Oxinance templates</a> and deploy your Shop instantly - no code required.</p>
                    <br/>
                    <Code title={"BASE URL"}>
                        <p style={{color: "#C1C9D2", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}>https://api.oxinance.com</p>
                    </Code>
                    <div style={{boxShadow: "0 0 0 1px rgba(0,0,0,0.07)", marginTop: 10, borderRadius: 8}}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <p style={{padding: "10px 20px 10px 20px", color: "#697386", fontWeight: 500, fontSize: 12}}>SDK LIBRARY </p>
                            <svg className="SVGInline-svg SVG-svg LangIcon-svg" style={{width: 24, height: 24, marginRight: 10}}
                                 viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.516 28.952a2.09 2.09 0 01-1.002-.263l-3.17-1.883c-.478-.262-.24-.358-.096-.405.644-.215.763-.263 1.43-.644.072-.048.167-.024.239.024l2.432 1.454c.095.048.214.048.286 0l9.513-5.507c.095-.048.143-.143.143-.263v-10.99c0-.12-.048-.215-.143-.263L15.635 4.73c-.096-.048-.215-.048-.286 0l-9.513 5.483c-.096.048-.143.167-.143.262v10.991c0 .096.047.215.143.263l2.599 1.502c1.406.715 2.288-.12 2.288-.954V11.428a.29.29 0 01.286-.286h1.216a.29.29 0 01.287.286v10.848c0 1.884-1.026 2.98-2.814 2.98-.548 0-.977 0-2.193-.596L5 23.23A2.012 2.012 0 014 21.49V10.497c0-.715.381-1.383 1.001-1.74l9.513-5.508a2.128 2.128 0 012.003 0l9.513 5.508a2.012 2.012 0 011.001 1.74V21.49c0 .716-.381 1.383-1.001 1.74l-9.513 5.508a2.44 2.44 0 01-1.001.215zm2.932-7.558c-4.172 0-5.03-1.907-5.03-3.529a.29.29 0 01.286-.286h1.24c.142 0 .262.096.262.239.19 1.263.739 1.883 3.266 1.883 2.003 0 2.861-.453 2.861-1.526 0-.62-.238-1.073-3.362-1.383-2.598-.262-4.22-.834-4.22-2.908 0-1.931 1.622-3.076 4.34-3.076 3.051 0 4.553 1.05 4.744 3.338a.385.385 0 01-.072.215c-.047.047-.119.095-.19.095h-1.24a.28.28 0 01-.262-.215c-.286-1.31-1.025-1.74-2.98-1.74-2.194 0-2.456.763-2.456 1.335 0 .691.31.906 3.266 1.288 2.933.381 4.315.93 4.315 2.98-.023 2.098-1.74 3.29-4.768 3.29z"
                                    fill="#89D42C"/>
                            </svg>
                        </div>
                        <div style={{borderRadius: 12}}>
                            <div style={{backgroundColor: "#eff2f5", borderTop: "1px solid #E3E8EE", padding: "10px 20px 10px 20px", borderBottomRightRadius: 8, borderBottomLeftRadius: 8}}>
                                <p style={{color: "#697386", fontFamily: "Menlo, Consolas, monospace", fontSize: 13}}><span style={{color: "#C1C9D2"}}>$</span> npm install --save oxinance</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
    )
}

export default ApiReference;
