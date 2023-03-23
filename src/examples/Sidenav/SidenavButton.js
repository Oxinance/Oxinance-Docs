import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SoftBox from "components/SoftBox";
import {
    collapseItem,
    collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";
import { useSoftUIController } from "context";
import Switch from "@mui/material/Switch";
import {useDispatch} from "react-redux";
import {toogleMode} from "../../redux/actions/ApiActions";

function SidenavButton({value, ...rest }) {

    const dispatch = useDispatch();
    const [controller] = useSoftUIController();
    const { miniSidenav, transparentSidenav } = controller;
    const active = true;

    const handleOnChange = () => dispatch(toogleMode())

    return (
        <ListItem component="li">
            <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })}>
                <Switch onChange={handleOnChange} checked={!value} />

                <ListItemText
                    primary={"Test mode"}
                    sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
                />
            </SoftBox>
        </ListItem>
    );
}

// Setting default values for the props of SidenavCollapse
SidenavButton.defaultProps = {
    color: "info",
    active: false,
    noCollapse: false,
    children: false,
    open: false,
};

// Typechecking props for the SidenavCollapse
SidenavButton.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    icon: PropTypes.node,
    name: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    noCollapse: PropTypes.bool,
    open: PropTypes.bool,
};

export default SidenavButton;
