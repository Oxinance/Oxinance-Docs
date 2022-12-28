import ProductCell from "../components/ProductCell";
import adidasHoodie from "../../../../../assets/images/ecommerce/adidas-hoodie.jpeg";
import ActionCell from "../components/ActionCell";
import SoftBadge from "../../../../../components/SoftBadge";
import Avatar from "@mui/material/Avatar";
import {Skeleton} from "@mui/material";

const outOfStock = (
    <SoftBadge variant="contained" color="error" size="xs" badgeContent="out of stock" container />
);
const inStock = (
    <SoftBadge variant="contained" color="success" size="xs" badgeContent="in stock" container />
);

const skeletonDataTableData = {
    columns: [
        {
            Header: "platform",
            accessor: "platform",
            Cell: () => (
                    <Avatar style={{background: "#0000001C", borderRadius: 5, width: 30, height: 30}}>
                        <i style={{color: "#fcfcfc", fontSize: 20}} className={`bx bxl-stripe icon`}/>
                    </Avatar>
            )
        },
        {
            Header: "product",
            accessor: "product",
            width: "30%",
            Cell: ({ value: [name, data] }) => (
                <div style={{display: "flex", alignItems: "center"}}>
                    <Skeleton>
                        <div style={{width: 60, height: 60}}/>
                    </Skeleton>
                    <Skeleton style={{marginLeft: 15, height: 22.75}}>
                        <p>PRODUCT NAME TEST</p>
                    </Skeleton>
                </div>
            ),
        },
        {
            Header: "category",
            accessor: "category",
            Cell: ({value}) => (
                <Skeleton style={{color: "transparent"}}>
                    {value}
                </Skeleton>
            )
        },
        {
            Header: "default price",
            accessor: "price",
            Cell: ({value}) => (
                <Skeleton style={{color: "transparent"}}>
                    {value}
                </Skeleton>
            )
        },
        {
            Header: "billing schema",
            accessor: "sku",
            Cell: ({value}) => (
                <Skeleton style={{color: "transparent"}}>
                    {value}
                </Skeleton>
            )
        },
        {
            Header: "id",
            accessor: "quantity",
            Cell: ({value}) => (
                <Skeleton style={{color: "transparent"}}>
                    {value}
                </Skeleton>
            )
        },
        {
            Header: "status",
            accessor: "status",
            Cell: ({ value }) => <Skeleton>{(value === "in stock" ? inStock : outOfStock)}</Skeleton>,
        },
        {
            Header: "action",
            accessor: "action",
            Cell: ({value}) => (
                <Skeleton style={{color: "transparent"}}>
                    {value}
                </Skeleton>
            )
        },
    ],

    rows: [
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
        {
            platform: "STRIPE",
            product: ["BKLGO Full Zip Hoodie", { image: adidasHoodie, checked: true }],
            category: "Cloting",
            price: "$1,321",
            sku: 243598234,
            quantity: 2435982,
            status: "out of stock",
            action: <ActionCell product={{}} onDeleteClick={() => null} onEditClick={() => null} />,
        },
    ],
};

export default skeletonDataTableData;
