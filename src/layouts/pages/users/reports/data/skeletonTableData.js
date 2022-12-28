import ActionCell from "../components/ActionCell";
import {Skeleton} from "@mui/material";
import SoftBadge from "../../../../../components/SoftBadge";

const disabled = (
    <SoftBadge variant="contained" color="error" size="xs" badgeContent="Disabled" container />
);
const active = (
    <SoftBadge variant="contained" color="success" size="xs" badgeContent="Active" container />
);

const skeletonTableData = {
    columns: [
        { Header: "Username", align: "left", accessor: "username", Cell: ({value}) => (<Skeleton style={{color: "transparent"}}>{value}</Skeleton>) },
        { Header: "Email", align: "left", accessor: "email", Cell: ({value}) => (<Skeleton style={{color: "transparent"}}>{value}</Skeleton>) },
        { Header: "token", align: "left", accessor: "token", Cell: ({value}) => (<Skeleton style={{color: "transparent"}}>{value}</Skeleton>)},
        { Header: "Active", align: "center", accessor: "is_active", Cell: ({value}) => (<Skeleton style={{color: "transparent"}}>{value}</Skeleton>) },
        { Header: "Date Joined", align: "center", accessor: "date_joined", Cell: ({value}) => (<Skeleton style={{color: "transparent"}}>{value}</Skeleton>) },
        { Header: "id", align: "center", accessor: "id", Cell: ({value}) => (<Skeleton style={{color: "transparent"}}>{value}</Skeleton>)},
        { Header: "Action", align: "center", accessor: "action", Cell: () => (<Skeleton style={{color: "transparent"}}><ActionCell/></Skeleton>)}
    ],

    rows: [
        {
            username: "USERNAME",
            email: "EMAIL",
            token: "TOKEN",
            is_active: "TRUE",
            date_joined: "01/01/0101",
            id: "ID",
        },
        {
            username: "USERNAME",
            email: "EMAIL",
            token: "TOKEN",
            is_active: "TRUE",
            date_joined: "01/01/0101",
            id: "ID",
        },
        {
            username: "USERNAME",
            email: "EMAIL",
            token: "TOKEN",
            is_active: "TRUE",
            date_joined: "01/01/0101",
            id: "ID",
        },
        {
            username: "USERNAME",
            email: "EMAIL",
            token: "TOKEN",
            is_active: "TRUE",
            date_joined: "01/01/0101",
            id: "ID",
        },
        {
            username: "USERNAME",
            email: "EMAIL",
            token: "TOKEN",
            is_active: "TRUE",
            date_joined: "01/01/0101",
            id: "ID",
        },
        {
            username: "USERNAME",
            email: "EMAIL",
            token: "TOKEN",
            is_active: "TRUE",
            date_joined: "01/01/0101",
            id: "ID",
        },
        {
            username: "USERNAME",
            email: "EMAIL",
            token: "TOKEN",
            is_active: "TRUE",
            date_joined: "01/01/0101",
            id: "ID",
        }
    ],
};

export default skeletonTableData;
