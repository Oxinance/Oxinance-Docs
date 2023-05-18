import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {collapseAlgoliaAction, expandAlgoliaAction} from "../../../../redux/actions/ApiActions";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import {TipWord} from "../../components/Keywords";
import EndpointsCode from "../../components/EndpointsCode";
import Endpoint from "../../components/Endpoint";
import Collapsible from "../Users/Collapsible";
import Divider from "@mui/material/Divider";
import Search from "./Search";


const Algolia = ({ spacing }) => {
    const expand = useSelector(state => state.api.expandAlgolia);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const expandAlgolia = () => dispatch(expandAlgoliaAction());
    const collapseAlgolia = () => dispatch(collapseAlgoliaAction());

    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={collapseAlgolia} className={"ShowCollapsedSectionButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={expandAlgolia} className={"ShowCollapsedSectionButton"}>
                <p>Expand</p>
                <ExpandMoreIcon style={{marginLeft: 10, color: "#A3ACB9", width: 20, height: 20}}/>
            </div>
        )
    }

    return (
        <>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", paddingTop: 80, paddingBottom: 80}} container px={spacing} columnSpacing={10}>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10}}>Algolia</p>
                    <p style={{fontSize: 16, color: "#4F566B"}}>Algolia API offers a high performance search engine to query for your products.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>In order to access this API you need an Algolia account. You can create one <TipWord title={"Click to see create an account"}><a style={{color: "inherit"}} rel={"noreferrer"} target={"_blank"} href={"https://www.algolia.com/users/sign_up"}>here</a></TipWord>.
                        <br/>
                        </p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <p style={{color: "#2A2F45", fontWeight: 500, fontSize: 24, marginBottom: 10, opacity: 0}}>Users</p>
                    <EndpointsCode>
                        <Endpoint onClick={() => navigate("/api#algolia/search")} title={"Searches for products using Algolia"} method={"GET"}>/v1/algolia/search?query=<span style={{color: "#067AB8"}}>{"{value}"}</span></Endpoint>
                    </EndpointsCode>
                </Grid>
            </Grid>
            <Collapsible open={expand}>
                <Divider/>
                <Search spacing={spacing}/>
            </Collapsible>
            <Grid style={{backgroundColor: expand ? "white" : "#F7FAFC", borderBottom: "1px solid #E3E8EE", paddingBottom: 100}} container>
                <Grid style={{margin: "auto"}} item sx={12}>
                    {renderExpandButton()}
                </Grid>
            </Grid>
        </>
    )
}

export default Algolia;