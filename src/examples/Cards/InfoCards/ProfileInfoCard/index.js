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
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React base styles
import Button from "@mui/material/Button";
import Editor from "@monaco-editor/react";
import {useState} from "react";
import UsersClient from "../../../../clients/UsersClient";
import {useSelector} from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

const isDict = dict => {
    return typeof dict === "object" && !Array.isArray(dict);
};

function ProfileInfoCard({userId, metadata}) {

  const projects = useSelector(state => state.projects)
  const [editableMetadata, setEditableMetadata] = useState((isDict(metadata) ? JSON.stringify(metadata, null, 4) : metadata));
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({display: false, message: null, type: null})

  const handleUpdate = () => {

      setIsLoading(true)
      setMessage({display: false, message: null, type: null})

      const callback = () => {
          setIsLoading(false)
          setMessage({display: true, message: "Metadata updated successfully", type: "SUCCESS"})
      }

      const errorCallback = (error) => {
          setIsLoading(false)
          setMessage({display: true, message: error.response.data.detail, type: "ERROR"})
      }

      let data;
      try {
          data = JSON.parse(editableMetadata)
      } catch {
          setMessage({display: true, message: "Metadata must be a valid JSON", type: "ERROR"})
          setIsLoading(false)
          return;
      }
      UsersClient.updateProjectUser((projects.isLive ? "live" : "sandbox"), projects.selectedProject.id, userId, {metadata: data}, callback, errorCallback)
  }

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
            <SoftBox display="flex" alignItems={"center"}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize" style={{marginRight: 5}}>
                    Metadata
                </SoftTypography>
                    <Tooltip title="Metadata can be used to store any additional information you may wish to collect about a User, e.g: age, country, etc..." placement="right">
                        <Icon>info</Icon>
                    </Tooltip>
            </SoftBox>
          { message.display &&
              <SoftTypography style={{color: message.type === "ERROR" ? "red" : "green", backgroundColor: message.type === "ERROR" ? "#e8b9b9" : "#BCE8B9", padding: 5, borderRadius: 5}} variant="caption" fontWeight="medium" textTransform="capitalize">
                  {message.message}
              </SoftTypography>}
          <Button disabled={isLoading} onClick={handleUpdate} sx={{textTransform: "none"}} style={{fontFamily: 'Poppins', backgroundColor: "#5b52fc", fontWeight: 500}} variant="contained" size="small">
              Update
          </Button>
      </SoftBox>
            <div style={{height: "90%"}}>
                <Editor
                    className={"monaco-ide"}
                    language={"json"}
                    defaultLanguage="json"
                    theme={"light"}
                    value={editableMetadata}
                    onChange={(e) => setEditableMetadata(e)}
                />
            </div>
    </Card>
  );
}

export default ProfileInfoCard;
