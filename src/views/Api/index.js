import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import ApiReference from "./sections/ApiReference";
import PublicKeys from "./sections/PublicKeys";
import Users from "./sections/Users";
import {useEffect, useRef, useState} from "react";
import Products from "./sections/Products";


const Api = () => {

    const [spacing, setSpacing] = useState(20)

    const handleResize = () => {
        if (window.innerWidth < 500) {
            setSpacing(3)
        } else {
            setSpacing(20)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => {
            window.removeEventListener("resize");
        }
    }, [])

    return (
        <DashboardLayout>
            <ApiReference spacing={spacing}/>
            <PublicKeys spacing={spacing}/>
            <Users spacing={spacing}/>
            <Products spacing={spacing}/>
            <Users spacing={spacing}/>
        </DashboardLayout>
    )
}

export default Api;
