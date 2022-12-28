/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
const orderImage =
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80";


const getFormattedPrice = (amount, currency) => {

  let amountString = `${amount / 100}`
  const splittedString = amountString.split(".");
  if (splittedString.length > 1) {
    if (splittedString[1].length === 1) {
      amountString = amountString + "0";
    }
  } else {
    amountString = amountString + ",00";
  }

  const results = {
    eur: `${amountString} €`,
    usd: `$ ${amountString}`,
    gbp: `£ ${amountString}`,
    jpy: `¥ ${amountString}`
  }
  return results[currency];
}

function OrderInfo({item, index, stripeUrl}) {
  console.log(index)
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} mt={index !== 0 ? 3 : 0} md={6}>
        <SoftBox display="flex" alignItems="center">
          <SoftBox mr={2}>
            <SoftAvatar variant="rounded" size="xxl" src={item.price.product.images[0]} alt="Gold Glasses" />
          </SoftBox>
          <SoftBox lineHeight={1}>
            <SoftTypography variant="h6" fontWeight="medium">
              {item.price.product.name}
            </SoftTypography>
            <SoftBox mb={2}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Quantity: {item.quantity}
              </SoftTypography>
            </SoftBox>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Price per unit: {getFormattedPrice(item.price.unit_amount, item.price.currency)}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
        <SoftButton href={stripeUrl} target={"_blank"} variant="gradient" color="info">
          View on Stripe
        </SoftButton>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
