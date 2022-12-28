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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/ecommerce/products/products-list/data/dataTableData";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ProductsClient from "../../../../clients/ProductsClient";
import SkeletonDataTable from "../../../../examples/Tables/SkeletonDataTable";
import skeletonDataTableData from "./data/skeletonDataTableData";
import ActionCell from "./components/ActionCell";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import DeleteDialog from "./components/DeleteDialog";
import RedirectToDashboardDialog from "./components/RedirectToDashboardDialog";

const formatPrice = (price, currency) => {

  const results = {
    "eur": `${price / 100} €`,
    "usd": `$ ${price / 100}`,
    "gbp": `£ ${price / 100}`,
    "jpy": `¥ ${price / 100}`
  }
  var result = results[currency];

  if (result) {
    return result;
  }
  return "No default price"
}

function ProductsList() {

  const projects = useSelector(state => state.projects);
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] =  useState({...dataTableData})
  const [displayStripeError, setDisplayStripeError] = useState(false)
  const [showCantDeleteModal, setShowCantDeleteModal] = useState(false)
  const [showGoToDashboardModal, setShowGoToDashboardModal] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)

  const updateStatusButton = (productId, status) => {
    const newState = data.rows.map(product => {
      if (product.id === productId) {
        const returnData = {...product, status: status, active: status }
        return {...returnData, action: <ActionCell product={returnData} onEditClick={() => setShowGoToDashboardModal(true)} onDeleteClick={handleOnDelete} />}
      }
      return product;
    })
    setData(data => ({...data, rows: newState}))
  }

  const closeRedirectToDashboardModal = () => setShowGoToDashboardModal(false)

  const closeDeleteModal = () => {
    setShowCantDeleteModal(false);
    setProductToDelete(null)
  }

  const handleOnDelete = (product) => {
    console.log(product, "ON DELETE")
    setShowCantDeleteModal(true)
    setProductToDelete(product)
  }

  const callback = (response) => {
    const rows = []
    const tempData = {...data};
    if (response.status === 200) {
      response.data.forEach(product => {
        const d = {
              platform: "STRIPE",
              product: [product.name, { image: product?.images[0], checked: true }],
              category: product.type,
              price: formatPrice(product.default_price?.unit_amount, product.default_price?.currency),
              billing_schema: product.default_price?.type,
              status: product.active,
              id: product.id,
              action: <ActionCell product={product} onEditClick={() => setShowGoToDashboardModal(true)} onDeleteClick={handleOnDelete} />,
            changing_status: false
            }
        rows.push(d);
      })
      tempData.rows = rows;
      setData(tempData)
      setIsLoading(false)
      setDisplayStripeError(false)
    }
  }

  const errorCallback = (error) => {
    setIsLoading(false)
    setDisplayStripeError(true)
    setData({...dataTableData})
  }

  useEffect(() => {
    setIsLoading(true)
    setData({...dataTableData})
    setDisplayStripeError(false)
    ProductsClient.getProducts(projects.isLive ? "live" : "sandbox", projects.selectedProject.id, callback, errorCallback)
  }, [projects.selectedProject, projects.isLive])

  if (!isLoading && displayStripeError) {
    return (
          <DashboardLayout>
            <DashboardNavbar/>
            <SoftBox my={3}>
              <Card style={{height: "80vh"}}>
                <div style={{position: "absolute", top: "40%", left:"40%"}}>
                  <div>
                    <Avatar style={{background: "#5b52fc", borderRadius: 5, width: 60, height: 60}}>
                      <i style={{color: "#ffffff", fontSize: 40}} className={`bx bxl-stripe icon`}/>
                    </Avatar>
                    <SoftTypography variant="h4" fontWeight="regular" style={{marginTop: 15, fontWeight: 500}}>
                      Connect with Stripe
                    </SoftTypography>
                    <SoftTypography variant="button" fontWeight="regular" style={{color: "#687385", fontSize: 14}}>
                      Connect your account with Stripe in order to view your Products.
                    </SoftTypography>
                    <br/>
                    <Button sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500, marginTop: 15}} variant="contained" size="small">
                      Connect with Stripe
                    </Button>
                  </div>
                </div>
              </Card>
            </SoftBox>
          </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DeleteDialog productToDelete={productToDelete} open={(showCantDeleteModal && productToDelete)} updateStatusFunction={updateStatusButton} closeFunction={closeDeleteModal}/>
      <RedirectToDashboardDialog open={showGoToDashboardModal} closeFunction={closeRedirectToDashboardModal}/>
      <SoftBox my={3}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <SoftBox lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Stripe Products
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                This section fetches your Products directly from Stripe.
              </SoftTypography>
            </SoftBox>
            <Stack spacing={1} direction="row">
              <Button disabled={isLoading} onClick={() => setShowGoToDashboardModal(true)} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
                + New Product
              </Button>
            </Stack>
          </SoftBox>
          {isLoading ? <SkeletonDataTable table={skeletonDataTableData}
                                          entriesPerPage={{
                                            defaultValue: 7,
                                            entries: [5, 7, 10, 15, 20, 25],
                                          }}
                                          canSearch/> :
              <DataTable
              table={data}
              entriesPerPage={{
                defaultValue: 7,
                entries: [5, 7, 10, 15, 20, 25],
              }}
              canSearch
          />}
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default ProductsList;
