import SoftBox from "../../../../../../components/SoftBox";
import SoftTypography from "../../../../../../components/SoftTypography";


const ShippingAddress = ({shippingAddress}) => {
    return (
        <SoftBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            bgColor="grey-100"
            borderRadius="lg"
            mt={2}
            p={3}
        >
            <SoftBox width="100%" display="flex" flexDirection="column">
                <SoftBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                    mb={2}
                >
                    <SoftTypography variant="button" fontWeight="medium" textTransform="capitalize">
                        {shippingAddress.first_name + " " + shippingAddress.last_name}
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Address Line 1:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                            {shippingAddress.address_line_1}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Address Line 2:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.address_line_2}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        City:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.city}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        State:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.state}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Country:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.country}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        ZIP code:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.zip_code}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
                <SoftBox mb={1} lineHeight={0}>
                    <SoftTypography variant="caption" color="text">
                        Phone number:&nbsp;&nbsp;&nbsp;
                        <SoftTypography variant="caption" fontWeight="medium">
                            {shippingAddress.phone_number}
                        </SoftTypography>
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
        </SoftBox>
    )
}

export default ShippingAddress;
