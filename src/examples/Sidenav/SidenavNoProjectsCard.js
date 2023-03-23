import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { card, cardContent, cardIconBox,  } from "examples/Sidenav/styles/sidenavCard";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import {setOpenProjectCreator, useSoftUIController} from "context";

function SidenavNoProjectsCard() {
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, sidenavColor } = controller;

    const handleProjectCreatorOpen = () => setOpenProjectCreator(dispatch, true);
    console.log(miniSidenav)
    if (miniSidenav) {
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
                        <AddBusinessIcon/>
                    </SoftBox>
                    <SoftBox lineHeight={1}>
                        <SoftTypography variant="h6" color="white">
                            Create your first Shop
                        </SoftTypography>
                        <SoftBox mb={1.825} mt={-1}>
                            <SoftTypography variant="caption" color="white" fontWeight="medium">
                                and start receiving payments
                            </SoftTypography>
                        </SoftBox>
                        <SoftButton
                            onClick={handleProjectCreatorOpen}
                            size="small"
                            color="white"
                            fullWidth
                        >
                            Create
                        </SoftButton>
                    </SoftBox>
                </CardContent>
            </Card>
        )
    }
    return (
        <Card sx={(theme) => card(theme, { miniSidenav })}>
            <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
                <SoftBox lineHeight={1}>
                    <SoftTypography variant="h6" color="white">
                        Create your first Shop
                    </SoftTypography>
                    <SoftBox mb={1.825} mt={-1}>
                        <SoftTypography variant="caption" color="white" fontWeight="medium">
                            and start receiving payments
                        </SoftTypography>
                    </SoftBox>
                    <SoftButton
                        onClick={handleProjectCreatorOpen}
                        size="small"
                        color="white"
                        fullWidth
                    >
                        Create
                    </SoftButton>
                </SoftBox>
            </CardContent>
        </Card>
    );
}

export default SidenavNoProjectsCard;
