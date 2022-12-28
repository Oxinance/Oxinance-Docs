import IdCell from "../components/IdCell";
import PlatformCell from "../components/PlatformCell";
import RevenueCell from "../components/RevenueCell";
import StatusCell from "../components/StatusCell";
import UserCell from "../components/UserCell";
import GuestCell from "../components/GuestCell";


const orderTableData = {
    columns: [
        {
            Header: "payment processor",
            accessor: "payment_method",
            Cell: ({ value }) => <PlatformCell paymentMethod={value} />
        },
        {
            Header: "date",
            accessor: "created_at",
            Cell: ({ value }) => new Date(value).toLocaleString()
        },
        {
            Header: "status",
            accessor: "status",
            Cell: () => <StatusCell icon="done" color="success" status="Paid" />
        },
        {
            Header: "user",
            accessor: "user",
            Cell: ({ value }) => {
                if (value) {
                    return <UserCell user={value}/>
                }
                return <GuestCell/>
            }
        },
        {
            Header: "revenue",
            accessor: "revenue",
            Cell: ({ value }) => <RevenueCell paymentMethod={value} />
        },
        {
            Header: "detail",
            accessor: "detail"
        }
    ],
    rows: [

    ]
}

export default orderTableData;
