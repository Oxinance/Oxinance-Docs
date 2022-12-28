

const EndpointsCode = ({style, children, title  = "ENDPOINTS"}) => {
    return (
        <div style={{...style, border: "1px solid rgb(0 0 0 / 7%)", borderRadius: 8}}>
            <div style={{backgroundColor: "#E3E8EE", display: "flex", justifyContent: "space-between", padding: "5px 10px 5px 20px", borderTopRightRadius: 8, borderTopLeftRadius: 8}}>
                <p style={{color: "#697386", fontSize: 12}}>{title}</p>
            </div>
            <div style={{paddingBottom: 15, backgroundColor: "#F7FAFC", padding: "10px 20px 10px 20px", borderBottomRightRadius: 8, borderBottomLeftRadius: 8, overflowX: "auto", whiteSpace: "nowrap"}}>
                {children}
            </div>
        </div>
    )
}

export default EndpointsCode;
