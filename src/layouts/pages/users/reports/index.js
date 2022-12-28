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

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import tableData from "layouts/pages/users/reports/data/tableData";
import UsersClient from "../../../../clients/UsersClient";
import {useSelector} from "react-redux";
import DataTable from "../../../../examples/Tables/DataTable";
import skeletonTableData from "./data/skeletonTableData";
import ActionCell from "./components/ActionCell";
import DeleteDialog from "./components/DeleteDialog";


function Reports() {
    const [data, setData] =  useState({...skeletonTableData})
    const [deleteDialog, setDeleteDialog] = useState({display: false, user: {username: null, id: null}})
    const projects = useSelector(state => state.projects)

    const deleteSuccessCallback = (response) => {
        setData(prevData => ({...prevData, rows: prevData.rows.filter(user => user.id !== deleteDialog.user.id)}))
        setDeleteDialog({display: false, user: {username: null, id: null}})
    }

    const closeDeleteDialog = () => setDeleteDialog({display: false, user: {username: null, id: null}})

    const handleDelete = (user) => {
        setDeleteDialog({display: true, user: {username: user.username, id: user.id}})
    }

    const callback = (response) => {
        const rows = []
        const tempData = {...tableData};
        if (response.status === 200) {
            response.data.users.forEach(user => {
                user["action"] = <ActionCell onDeleteClick={() => handleDelete(user)} userId={user.id}/>
                rows.push(user);
            })
            tempData.rows = rows;
            setData(tempData)
        }
    }

    const errorCallback = (error) => {

    }

    useEffect(() => {
        setData({...skeletonTableData})
        UsersClient.getProjectUsers((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, callback, errorCallback)
    }, [projects.isLive, projects.selectedProject])

    return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <DataTable table={data}
                   entriesPerPage={{
                       defaultValue: 7,
                       entries: [5, 7, 10, 15, 20, 25],
                   }}
                   canSearch/>
      </SoftBox>
      <Footer />
      <DeleteDialog open={deleteDialog.display} user={deleteDialog.user} closeFunction={closeDeleteDialog} successCallback={deleteSuccessCallback}/>
    </DashboardLayout>
    );
}

export default Reports;
