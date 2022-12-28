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

import {useEffect, useState} from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import OrdersClient from "../../../../clients/OrdersClient";
import {useSelector} from "react-redux";
import orderTableData from "./data/orderTableData";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from "react-router-dom";

function OrderList() {
  const projects = useSelector(state => state.projects)
  const [data, setData] = useState({...orderTableData})

  const callback = (response) => {
    const rows = []
    const tempData = {...data};
    if (response.status === 200) {
      response.data.forEach(order => {
        const d = {
          payment_method: order.payment_method,
          created_at: order.created_at,
          revenue: order.payment_method,
          status: "SUCCESS",
          user: order.user,
          detail: (
              <Link to={`/dashboard/orders/${order.id}`}>
                <SoftTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                  <Tooltip title="View order" placement="top">
                    <ArrowForwardIosIcon/>
                  </Tooltip>
                </SoftTypography>
              </Link>
          )
        }
        rows.push(d);
      })
      tempData.rows = rows;
      setData(tempData)
    }
  }

  const errorCallback = (error) => {

  }

  useEffect(() => {
    OrdersClient.getOrders((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id,  callback, errorCallback)
  }, [projects.isLive, projects.selectedProject])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <Card>
          <DataTable table={data} entriesPerPage={false} canSearch />
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
