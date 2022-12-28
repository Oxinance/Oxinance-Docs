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
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// OrderDetails page components
import Header from "layouts/ecommerce/orders/order-details/components/Header";
import OrderInfo from "layouts/ecommerce/orders/order-details/components/OrderInfo";
import TrackOrder from "layouts/ecommerce/orders/order-details/components/TrackOrder";
import PaymentDetails from "layouts/ecommerce/orders/order-details/components/PaymentDetails";
import BillingInformation from "layouts/ecommerce/orders/order-details/components/BillingInformation";
import OrderSummary from "layouts/ecommerce/orders/order-details/components/OrderSummary";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import OrdersClient from "../../../../clients/OrdersClient";
import {useSelector} from "react-redux";
import {CircularProgress, circularProgressClasses} from "@mui/material";
import SoftTypography from "../../../../components/SoftTypography";
import SoftButton from "../../../../components/SoftButton";
import ShippingAddress from "./components/ShippingAddress";

const getFormattedPrice = (amount, currency) => {

  let amountString = `${amount / 100}`
  const splittedString = amountString.split(".");
  if (splittedString.length > 1) {
    if (splittedString[1].length === 1) {
      amountString = amountString + "0";
    }
  } else {
    amountString = amountString + ".00";
  }

  const results = {
    eur: `${amountString} €`,
    usd: `$ ${amountString}`,
    gbp: `£ ${amountString}`,
    jpy: `¥ ${amountString}`
  }
  return results[currency];
}


function OrderDetails() {

  const projects = useSelector(state => state.projects)
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({display: false, message: ""})

  const callback = (response) => {
    setIsLoading(false)
    setOrder(response.data)
    setError({display: false, message: ""})
  }

  const errorCallback = (error) => {
    setIsLoading(false)
    setError({display: true, message: "Order does not exist, perhaps you are in wrong environment?"});
  }

  useEffect(() => {
    setIsLoading(true)
    setError({display: false, message: ""})
    OrdersClient.getOrder((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, orderId, callback, errorCallback)
  }, [projects.isLive, projects.selectedProject])

  const renderShippingAddress = () => {
    if (order.shipping_address) {
      return (
          <>
            <SoftTypography variant="h6" fontWeight="medium">
              Shipping Information
            </SoftTypography>
            <ShippingAddress shippingAddress={order.shipping_address}/>
          </>
      )
    }
    return (
        <SoftTypography variant="h6" fontWeight="medium">
          No Shipping address was provided
        </SoftTypography>
    )
  }

  const renderTotal = () => {
    if (order.payment_method.platform === "STRIPE") {
      return getFormattedPrice(order.payment_method.payment.amount, order.payment_method.payment.currency)
    } else if (order.payment_method.platform === "BINANCE") {
      return `${order.payment_method.payment.data.orderAmount} ${order.payment_method.payment.data.currency}`
    }
  }

  const renderOrderSummary = () => {

    if (order.payment_method.platform === "BINANCE") {
      return (
          <SoftBox display="flex" justifyContent="space-between" mt={3}>
            <SoftTypography variant="body1" fontWeight="light" color="text">
              Total
            </SoftTypography>
            <SoftBox ml={1}>
              <SoftTypography variant="body1" fontWeight="medium">
                {renderTotal()}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
      )
    } else if (order.payment_method.platform === "STRIPE") {
      return (
          <>
            <SoftBox mb={2}>
              <SoftTypography variant="h6" fontWeight="medium">
                Order Summary
              </SoftTypography>
            </SoftBox>
            {order.order_items.map((item, index) => {
              return (
                  <SoftBox key={index} display="flex" justifyContent="space-between" mb={0.5}>
                    <SoftTypography variant="button" fontWeight="regular" color="text">
                      {item.price.product.name}
                    </SoftTypography>
                    <SoftBox ml={1}>
                      <SoftTypography variant="body2" fontWeight="medium">
                        {item.quantity} × {getFormattedPrice(item.price.unit_amount, item.price.currency)}
                      </SoftTypography>
                    </SoftBox>
                  </SoftBox>
              )
            })}
            <SoftBox display="flex" justifyContent="space-between" mb={0.5}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Oxinance taxes
              </SoftTypography>
              <SoftBox ml={1}>
                <SoftTypography variant="body2" fontWeight="medium">
                  {getFormattedPrice(order.payment_method.payment.application_fee_amount, order.payment_method.payment.currency)}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mt={3}>
              <SoftTypography variant="body1" fontWeight="light" color="text">
                Total
              </SoftTypography>
              <SoftBox ml={1}>
                <SoftTypography variant="body1" fontWeight="medium">
                  {renderTotal()}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </>
      )
    }
  }

  if (isLoading) {
    return (
        <DashboardLayout>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? '#c9c9c9' : '#308fe8'),
                  animationDuration: '550ms',
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                size={25}
                thickness={4}
            />
          </div>
        </DashboardLayout>
    )
  }

  if (!isLoading && error.display) {
    return (
        <DashboardLayout>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <p>{error.message}</p>
          </div>
        </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={7}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <SoftBox pt={2} px={2}>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center">
                  <SoftBox>
                    <SoftBox mb={1}>
                      <SoftTypography variant="h6" fontWeight="medium">
                        Order Details
                      </SoftTypography>
                    </SoftBox>
                    <SoftTypography component="p" variant="button" fontWeight="regular" color="text">
                      <span sx={{ fontWeight: "bold" }}>{new Date(order.created_at).toLocaleString()}</span>
                    </SoftTypography>
                    <SoftTypography component="p" variant="button" fontWeight="regular" color="text">
                      Order no. #<span sx={{ fontWeight: "bold" }}>{order.number}</span>
                    </SoftTypography>
                  </SoftBox>
                  <SoftButton variant="gradient" color="secondary">
                    invoice
                  </SoftButton>
                </SoftBox>
              </SoftBox>
              <Divider />
              <SoftBox pt={1} pb={3} px={2}>
                <SoftBox mb={3}>
                  {order.order_items.map((item, index) => {
                    const url = `https://dashboard.stripe.com${projects.isLive ? "/" : "/test"}/products/${item.price.product.id}`
                    return <OrderInfo stripeUrl={url} index={index} key={index} item={item} />
                  })}
                </SoftBox>
                <Divider />
                <SoftBox mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                      <TrackOrder order={order} successCallback={callback} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                      <PaymentDetails paymentMethod={order.payment_method} />
                      <SoftBox mt={3}>
                        {renderShippingAddress()}
                      </SoftBox>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{ ml: "auto" }}>
                      {renderOrderSummary()}
                    </Grid>
                  </Grid>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderDetails;
