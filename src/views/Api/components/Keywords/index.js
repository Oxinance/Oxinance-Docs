import {Tooltip} from "@mui/material";


const String = ({children}) => <span style={{color: "#85D996", fontFamily: "monospace", fontSize: 13}}>{children}</span>

const Token = ({children}) => <span style={{color: "#A4CDFE", fontFamily: "monospace", fontSize: 13}}>{children}</span>

const Comment = ({children}) => <span style={{color: "#A3ACB9", fontFamily: "monospace", fontSize: 13}}>{children}</span>

const BlankLine = ({number}) => <p style={{color: "#697386", fontFamily: "monospace", fontSize: 13}}>{number}</p>

const TipWord = ({children, title, onClick, style = {}}) => {
    return (
        <Tooltip title={title} placement={"top"}>
            <span onClick={onClick} style={{...style, color: "#556CD6"}}>{children}</span>
        </Tooltip>
    )
}

export {String, Token, Comment, BlankLine, TipWord};
