import SoftBadge from "../../../../../components/SoftBadge";
import ActionCell from "../components/ActionCell";

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
const disabled = (
    <SoftBadge variant="contained" color="error" size="xs" badgeContent="Disabled" container />
);
const active = (
    <SoftBadge variant="contained" color="success" size="xs" badgeContent="Active" container />
);

const tableData = {
  columns: [
    { Header: "Username", align: "left", accessor: "username" },
    { Header: "Email", align: "left", accessor: "email" },
    { Header: "token", align: "left", accessor: "token", Cell: ({value}) => (
          <div style={{fontFamily: "monospace", fontSize: 12, backgroundColor: "#E9ECEF", border: "1px solid #D2D6DA", borderRadius: 8, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
            {value}
          </div>
      )},
    { Header: "Active", align: "center", accessor: "is_active", Cell: ({value}) => (value ? active : disabled) },
    { Header: "Date Joined", align: "center", accessor: "date_joined", Cell: ({value}) => (new Date(value).toLocaleDateString()) },
    { Header: "id", align: "center", accessor: "id", Cell: ({value}) => (
        <div style={{fontFamily: "monospace", fontSize: 12, backgroundColor: "#F7FAFC", color: "#3C4257", border: "1px solid lightgray", borderRadius: 8, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
          {value}
        </div>
      )},
    { Header: "Action", align: "center", accessor: "action"}
  ],

  rows: [],
};

export default tableData;
