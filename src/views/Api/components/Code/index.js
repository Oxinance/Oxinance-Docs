import {Menu} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useLayoutEffect, useRef, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from "@mui/material/IconButton";
import Endpoint from "../Endpoint";

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

const Code = ({title, children, showMenu, menuItems, selectedLanguage}) => {

    const ref = useRef();
    const isOverflow = useIsOverflow(ref, isOverflowFromCallback => isOverflowFromCallback);

    const [anchorEl, setAnchorEl] = useState(null)
    const [isHovered, setIsHovered] = useState(false)

    const renderMenu = () => {

        if (showMenu) {
            return (
                <div style={{backgroundColor: "#3C4257", padding: "5px 10px 5px 20px", borderTopRightRadius: 8, borderTopLeftRadius: 8, display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        {typeof title === "string" ? <p style={{color: "#A3ACB9", fontSize: 12}}>{title}</p> : title}
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <p style={{color: "#A3ACB9", fontSize: 12, marginRight: 5}}>{selectedLanguage}</p>
                        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} style={{width: 16, height: 16}}>
                            <ExpandMoreIcon style={{color: "#A3ACB9", width: 20, height: 20}}/>
                        </IconButton>
                        <Menu
                            style={{marginTop: 20}}
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(false)}
                            keepMounted
                        >
                            {menuItems.map((option, index) => {
                                return <MenuItem key={index} onClick={() => {
                                    setAnchorEl(false);
                                    option.onClick()
                                }
                                }>{option.label}</MenuItem>
                            })}
                        </Menu>
                    </div>
                </div>
            )
        }
        return (
            <div style={{backgroundColor: "#3C4257", padding: "5px 10px 5px 20px", borderTopRightRadius: 8, borderTopLeftRadius: 8}}>
                <p style={{color: "#A3ACB9", fontSize: 12}}>{title}</p>
            </div>
        )
    }

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {renderMenu()}
            <div ref={ref} className={isHovered ? "syntax-highlighter" :"syntax-highlighter-hidden-scroll"} style={{paddingBottom: (isHovered && isOverflow) ? 0 : 15, backgroundColor: "#4F566B", padding: "10px 20px 10px 20px", borderBottomRightRadius: 8, borderBottomLeftRadius: 8, overflowX: "auto", whiteSpace: "nowrap"}}>
                {children}
            </div>
        </div>
    )
}

export default Code;
