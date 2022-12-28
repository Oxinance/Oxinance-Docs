import {Tooltip} from "@mui/material";


const methods = {
    "GET": <span style={{color: "#067AB8", fontFamily: "monospace"}}>GET</span>,
    "POST": <span style={{color: "#09825D", fontFamily: "monospace"}}>POST</span>,
    "PUT": <span style={{color: "#E45F4A", fontFamily: "monospace"}}>PUT</span>,
    "DELETE": <span style={{color: "#e48f4a", fontFamily: "monospace"}}>DELETE</span>,
}

const Endpoint = ({method, title, children, onClick}) => {
    return (
        <Tooltip title={title} placement={"left"}><p onClick={onClick} className={"endpoint-url"}>{methods[method]} {children}</p></Tooltip>
    )
}

export default Endpoint;
