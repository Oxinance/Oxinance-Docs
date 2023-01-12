import {Tooltip} from "@mui/material";


const String = ({children}) => <span style={{color: "#85D996", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>{children}</span>

const Token = ({children}) => <span style={{color: "#A4CDFE", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>{children}</span>

const Comment = ({children}) => <span style={{color: "#A3ACB9", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>{children}</span>

const BlankLine = ({number}) => <p style={{color: "#697386", fontFamily: "JetBrainsMono-Medium", fontSize: 13}}>{number}</p>

const TipWord = ({children, title, onClick, style = {}}) => {

    if (title) {
        return (
            <Tooltip title={title} placement={"top"}>
                <span onClick={onClick} style={{...style, color: "#556CD6"}}>{children}</span>
            </Tooltip>
        )
    }

    return <span className={"hover-pointer"} onClick={onClick} style={{...style, color: "#556CD6"}}>{children}</span>
}

export {String, Token, Comment, BlankLine, TipWord};
