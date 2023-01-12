import {useState, useRef, useLayoutEffect} from "react";


const useIsOverflow = (ref, callback) => {
    const [isOverflow, setIsOverflow] = useState(undefined);

    useLayoutEffect(() => {
        const {current} = ref;

        const trigger = () => {
            const hasOverflow = current.scrollWidth > current.clientWidth;

            setIsOverflow(hasOverflow);

            if (callback) callback(hasOverflow);
        };

        if (current) {
            trigger();
        }
    }, [callback, ref]);

    return isOverflow;
}

const EndpointsCode = ({style, children, title  = "ENDPOINTS"}) => {

    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const isOverflow = useIsOverflow(ref, isOverflowFromCallback => isOverflowFromCallback);

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{...style, border: "1px solid rgb(0 0 0 / 7%)", borderRadius: 8}}>
            <div style={{backgroundColor: "#E3E8EE", display: "flex", justifyContent: "space-between", padding: "5px 10px 5px 20px", borderTopRightRadius: 8, borderTopLeftRadius: 8}}>
                <p style={{color: "#697386", fontSize: 12}}>{title}</p>
            </div>
            <div ref={ref} className={isHovered ? "light-syntax-highlighter" : "light-syntax-highlighter-hidden-scroll"} style={{paddingBottom: (isHovered && isOverflow) ? 0 : 15, backgroundColor: "#F7FAFC", padding: "10px 20px 15px 20px", borderBottomRightRadius: 8, borderBottomLeftRadius: 8, overflowX: "auto", whiteSpace: "nowrap"}}>
                {children}
            </div>
        </div>
    )
}

export default EndpointsCode;
