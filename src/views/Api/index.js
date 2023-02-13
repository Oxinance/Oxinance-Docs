import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import ApiReference from "./sections/ApiReference";
import PublicKeys from "./sections/PublicKeys";
import Users from "./sections/Users";
import {useEffect, useState} from "react";
import Products from "./sections/Products";
import Orders from "./sections/Orders";
import Cart from "./sections/Cart";
import Checkout from "./sections/Checkouts";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    collapseAll,
    expandCartItemsAction, expandCheckoutAction,
    expandOrdersAction,
    expandProductsAction,
    expandUsersAction
} from "../../redux/actions/ApiActions";

const Api = () => {

    const [spacing, setSpacing] = useState(20)
    const apiState = useSelector(state => state.api)
    const dispatch = useDispatch();
    let location = useLocation();

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

    useEffect(() => {
        switch (location.hash) {
            case "": {
                dispatch(collapseAll())
                const apiReference = document.getElementById("api-reference")
                apiReference.scrollIntoView();
                break;
            }
            case "#users/current-user":
                if (apiState.expandUsers) {
                    const currentUserComponent = document.getElementById("api-users-current-user");
                    currentUserComponent.scrollIntoView();
                } else {
                    dispatch(expandUsersAction());
                    setTimeout(() => {
                        const currentUserComponent = document.getElementById("api-users-current-user");
                        currentUserComponent.scrollIntoView();
                    }, 500)
                }
                break;
            case "#users/login":
                if (apiState.expandUsers) {
                    const loginComponent = document.getElementById("api-users-login");
                    loginComponent.scrollIntoView();
                } else {
                    dispatch(expandUsersAction());
                    setTimeout(() => {
                        const loginComponent = document.getElementById("api-users-login");
                        loginComponent.scrollIntoView();
                    }, 500)
                }
                break;
            case "#users/register":
                if (apiState.expandUsers) {
                    const registerComponent = document.getElementById("api-users-register");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandUsersAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-users-register");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break;
            case "#users/oauth/google":
                if (apiState.expandUsers) {
                    const registerComponent = document.getElementById("api-users-oauth-google");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandUsersAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-users-oauth-google");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break;
            case "#products/list-products":
                if (apiState.expandProducts) {
                    const registerComponent = document.getElementById("api-products-list");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandProductsAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-products-list");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#products/get-product":
                if (apiState.expandProducts) {
                    const registerComponent = document.getElementById("api-products-get");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandProductsAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-products-get");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#orders":
                setTimeout(() => {
                    const registerComponent = document.getElementById("orders");
                    registerComponent.scrollIntoView();
                }, 500)
                break
            case "#orders/list-orders":
                if (apiState.expandOrders) {
                    const registerComponent = document.getElementById("api-orders-list");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandOrdersAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-orders-list");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#orders/get-order":
                if (apiState.expandOrders) {
                    const registerComponent = document.getElementById("api-orders-get");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandOrdersAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-orders-get");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#cart-items":
                setTimeout(() => {
                    const registerComponent = document.getElementById("cart-items");
                    registerComponent.scrollIntoView();
                }, 500)
                break
            case "#cart-items/list-cart-items":
                if (apiState.expandCartItems) {
                    const registerComponent = document.getElementById("api-cart-items-list");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandCartItemsAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-cart-items-list");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#cart-items/create-cart-item":
                if (apiState.expandCartItems) {
                    const registerComponent = document.getElementById("api-cart-items-create");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandCartItemsAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-cart-items-create");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#cart-items/delete-cart-item":
                if (apiState.expandCartItems) {
                    const registerComponent = document.getElementById("api-cart-items-delete");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandCartItemsAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-cart-items-delete");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#cart-items/update-cart-item-quantity":
                if (apiState.expandCartItems) {
                    const registerComponent = document.getElementById("api-cart-items-quantity");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandCartItemsAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-cart-items-quantity");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#checkout/binance":
                if (apiState.expandCheckout) {
                    const registerComponent = document.getElementById("api-checkout-binance");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandCheckoutAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-checkout-binance");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#checkout/stripe-checkout-session":
                if (apiState.expandCheckout) {
                    const registerComponent = document.getElementById("api-checkout-stripe-checkout-session");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandCheckoutAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-checkout-stripe-checkout-session");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
            case "#checkout/stripe-payment-intent":
                if (apiState.expandCheckout) {
                    const registerComponent = document.getElementById("api-checkout-stripe-payment-intent");
                    registerComponent.scrollIntoView();
                } else {
                    dispatch(expandCheckoutAction());
                    setTimeout(() => {
                        const registerComponent = document.getElementById("api-checkout-stripe-payment-intent");
                        registerComponent.scrollIntoView();
                    }, 500)
                }
                break
        }
    }, [location])

    return (
        <DashboardLayout>
            <ApiReference spacing={spacing}/>
            <PublicKeys spacing={spacing}/>
            <Users spacing={spacing}/>
            <Products spacing={spacing}/>
            <div id={"orders"}>
                <Orders spacing={spacing}/>
            </div>
            <div id={"cart-items"}>
                <Cart spacing={spacing}/>
            </div>
            <Checkout spacing={spacing}/>
        </DashboardLayout>
    )
}

export default Api;
