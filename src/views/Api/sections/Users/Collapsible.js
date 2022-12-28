import React, { useEffect, useRef, useState } from "react";


const Collapsible = ({open, children, style={}}) => {
    const [height, setHeight] = useState(open ? undefined : 0);
    const ref = useRef(null);

    useEffect(() => {
        if (!height || !open || !ref.current) return undefined;
        // @ts-ignore
        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [height, open]);

    useEffect(() => {
        if (open) setHeight(ref.current?.getBoundingClientRect().height);
        else setHeight(0);
    }, [open]);

    return (
        <div style={{...style}}>
            <div className={"collapsible-content-edonec"} style={{ height }}>
                <div ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Collapsible;
