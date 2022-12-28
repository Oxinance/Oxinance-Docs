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

/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
import SoftBadge from "components/SoftBadge";

// ProductsList page components
import ProductCell from "layouts/ecommerce/products/products-list/components/ProductCell";
import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

// Images
import adidasHoodie from "assets/images/ecommerce/adidas-hoodie.jpeg";
import macBookPro from "assets/images/ecommerce/macbook-pro.jpeg";
import metroChair from "assets/images/ecommerce/metro-chair.jpeg";
import alchimiaChair from "assets/images/ecommerce/alchimia-chair.jpeg";
import fendiCoat from "assets/images/ecommerce/fendi-coat.jpeg";
import offWhiteJacket from "assets/images/ecommerce/off-white-jacket.jpeg";
import yohjiYamamoto from "assets/images/ecommerce/yohji-yamamoto.jpeg";
import mcqueenShirt from "assets/images/ecommerce/mcqueen-shirt.jpeg";
import yellowChair from "assets/images/ecommerce/yellow-chair.jpeg";
import heronTshirt from "assets/images/ecommerce/heron-tshirt.jpeg";
import livingChair from "assets/images/ecommerce/living-chair.jpeg";
import orangeSofa from "assets/images/ecommerce/orange-sofa.jpeg";
import burberry from "assets/images/ecommerce/burberry.jpeg";
import dgSkirt from "assets/images/ecommerce/d&g-skirt.jpeg";
import undercover from "assets/images/ecommerce/undercover.jpeg";
import Avatar from "@mui/material/Avatar";

// Badges
const disabled = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="Disabled" container />
);
const active = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="Active" container />
);

const oneTime = (
    <SoftBadge variant="contained" color="dark" size="xs" badgeContent="One Time" container />
)

const recurring = (
    <SoftBadge variant="contained" color="secondary" size="xs" badgeContent="Recurring" container />
)

const dataTableData = {
  columns: [
    {
      Header: "platform",
      accessor: "platform",
      Cell: () => (
          <Avatar style={{background: "#5b52fc", borderRadius: 5, width: 30, height: 30}}>
            <i style={{color: "#ffffff", fontSize: 20}} className={`bx bxl-stripe icon`}/>
          </Avatar>
      )
    },
    {
      Header: "product",
      accessor: "product",
      width: "30%",
      Cell: ({ value: [name, data] }) => (
        <ProductCell image={data.image} name={name} />
      ),
    },
    { Header: "category", accessor: "category" },
    { Header: "default price", accessor: "price" },
    {
      Header: "billing schema",
      accessor: "billing_schema",
      Cell: ({value}) => {
        if (!value) {
          return "None"
        }
        return (value === "one_time" ? oneTime : recurring)
      }
    },
    {
      Header: "id",
      accessor: "id",
      Cell: ({ value }) => (
          <div  className={"hover-pointer"}>
            <p style={{border: "1px solid lightgray", fontSize: 12, backgroundColor: "#F7FAFC", fontFamily: "monospace", color: "rgb(60, 66, 87)", padding: "4px 8px 4px 8px", borderRadius: 6}}>{value}</p>
          </div>
      ),
    },
    { Header: "status", accessor: "status", Cell: ({value}) => value ? active : disabled },
    { Header: "action", accessor: "action" },
  ],

  rows: [ ],
};

export default dataTableData;
