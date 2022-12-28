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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import SoftButton from "../../../../../../components/SoftButton";
import CreateTrackingInformationDialog from "../CreateTrackingInformationDialog";
import {useState} from "react";
import EditTrackingInformationDialog from "../EditTrackingInformationDialog";

function OrdersOverview({order, successCallback}) {

    const [open, setOpen] = useState(false)

    const openDialog = () => setOpen(true)

    const closeDialog = () => setOpen(false)

  return (
    <>
      <SoftTypography variant="h6" fontWeight="medium">
        Track order
      </SoftTypography>
      <SoftBox mt={2}>
        <TimelineItem
          color="secondary"
          icon="notifications"
          title="Order received"
          dateTime={new Date(order.created_at).toLocaleString()}
        />
        <TimelineItem
          color="success"
          icon="done"
          title="Order paid"
          dateTime={new Date(order.created_at).toLocaleString()}
        />
          <SoftButton onClick={openDialog} variant="gradient" color="secondary">
              {order.tracking_information ? "Tracking Information" : "Add Tracking Information"}
          </SoftButton>
          {order.tracking_information ?
              <EditTrackingInformationDialog successCallback={successCallback} open={open} order={order} closeFunction={closeDialog}/>
              :
              <CreateTrackingInformationDialog successCallback={successCallback} open={open} order={order} closeFunction={closeDialog}/>}
      </SoftBox>
    </>
  );
}

export default OrdersOverview;
