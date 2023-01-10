import SyntaxText from "../SyntaxText";
import {Divider} from "@mui/material";
import {attributes} from "../../sections/Users/data";
import Collapsible from "../../sections/Users/Collapsible";
import {useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

const Attribute = ({data, style = {}}) => {

    const [expand, setExpand] = useState(false)

    const renderExpandButton = () => {
        if (expand) {
            return (
                <div onClick={() => setExpand(prevState => !prevState)} className={"ShowChildAttributesButton"}>
                    <p>Close</p>
                    <ExpandLessIcon style={{marginLeft: 5, color: "#A3ACB9", width: 20, height: 20}}/>
                </div>
            )
        }
        return (
            <div onClick={() => setExpand(prevState => !prevState)} className={"ShowChildAttributesButton"}>
                <p>Expand</p>
                <ExpandMoreIcon style={{marginLeft: 5, color: "#A3ACB9", width: 20, height: 20}}/>
            </div>
        )
    }

    const renderNestedAttributes = () => {
        return(
        <>
            <Collapsible open={expand}>
                    {data.nested.map((attribute, index) => {
                        return <Attribute key={index} style={{paddingBottom: 10, marginLeft: data.nestedDepth * 25}} data={attribute}/>
                    })}
            </Collapsible>
        </>
        )
    }

    return (
        <div style={{...style}}>
            <Divider/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div>
                    <p><SyntaxText>{data.attribute}</SyntaxText> <span style={{color: "#3C4257", fontWeight: "bold", fontFamily: "monospace", fontSize: 13}}>{data.dataType}</span></p>
                    <p style={{fontSize: 14, color: "#4F566B", marginBottom: 10}}>{data.description}</p>
                    {data.nested && renderExpandButton()}
                </div>
            </div>
            {data.nested && renderNestedAttributes()}
        </div>
    )
}

export default Attribute;
