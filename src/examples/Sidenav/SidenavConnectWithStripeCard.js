import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { card, cardContent, cardIconBox } from "examples/Sidenav/styles/sidenavCard";
import { useSoftUIController } from "context";
import {useSelector} from "react-redux";
import ProjectsClient from "../../clients/ProjectsClient";
import {useState} from "react";

function SidenavConnectWithStripeCard() {
    const projects = useSelector(state => state.projects)
    const [controller] = useSoftUIController();
    const [error, setError] = useState({display: false, message: null})
    const [isLoading, setIsLoading] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState(null)
    const { miniSidenav, sidenavColor } = controller;

    const handleConnect = () => {

        setIsLoading(true)

        const callback = (response) => {
            setIsLoading(false)
            setRedirectUrl(response.data.url);
            window.open(response.data.url, '_blank', 'noopener,noreferrer');
        }

        const errorCallback = (error) => {
            setIsLoading(false)
            setError({display:true, message: error.response.data.detail})
        }

        ProjectsClient.getOnboardUrl(projects.isLive ? "live" : "sandbox", projects.selectedProject.id, callback, errorCallback)
    }

    return (
        <Card sx={(theme) => card(theme, { miniSidenav })}>
            <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
                <SoftBox
                    bgColor="white"
                    width="2rem"
                    height="2rem"
                    borderRadius="md"
                    shadow="md"
                    mb={2}
                    sx={cardIconBox}
                >
                    <i style={{color: "#5B52FC"}} className={`bx bxl-stripe icon`}/>
                </SoftBox>
                <SoftBox lineHeight={1}>
                    <SoftTypography variant="h6" color="white">
                        Connect with Stripe
                    </SoftTypography>
                    <SoftBox mb={1.825} mt={-1}>
                        <SoftTypography variant="caption" color="white" fontWeight="medium">
                            and start receiving payments
                        </SoftTypography>
                    </SoftBox>
                    <SoftButton
                        disabled={isLoading}
                        onClick={handleConnect}
                        size="small"
                        color="white"
                        fullWidth
                    >
                        {isLoading ? "Generating Link" : "Connect"}
                    </SoftButton>
                </SoftBox>
            </CardContent>
        </Card>
    );
}

export default SidenavConnectWithStripeCard;
