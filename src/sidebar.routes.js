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

/**
 All of the routes for the Soft UI Dashboard PRO React are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Sidenav.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `type` key with the `collapse` value is used for a route.
 2. The `type` key with the `title` value is used for a title inside the Sidenav.
 3. The `type` key with the `divider` value is used for a divider between Sidenav items.
 4. The `name` key is used for the name of the route on the Sidenav.
 5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
 6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
 7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 8. The `route` key is used to store the route location which is used for the react router.
 9. The `href` key is used to store the external links location.
 10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
 10. The `component` key is used to store the component of its route.
 */

// Soft UI Dashboard PRO React layouts
import Default from "layouts/dashboards/default";
import Automotive from "layouts/dashboards/automotive";
import SmartHome from "layouts/dashboards/smart-home";
import VRDefault from "layouts/dashboards/virtual-reality/vr-default";
import VRInfo from "layouts/dashboards/virtual-reality/vr-info";
import CRM from "layouts/dashboards/crm";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Teams from "layouts/pages/profile/teams";
import AllProjects from "layouts/pages/profile/all-projects";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import SweetAlerts from "layouts/pages/sweet-alerts";
import Notifications from "layouts/pages/notifications";
import PricingPage from "layouts/pages/pricing-page";
import RTL from "layouts/pages/rtl";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";
import Overview from "layouts/ecommerce/overview";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import ProductsList from "layouts/ecommerce/products/products-list";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import Referral from "layouts/ecommerce/referral";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";

// Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import CreditCard from "./examples/Icons/CreditCard";
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const sidebarRoutes = [
    {
        type: "collapse",
        name: "Users",
        key: "users",
        icon: <PersonIcon />,
        collapse: [
            {
                name: "Get Current User",
                key: "current-user",
                route: "/api#users/current-user",
            },
            {
                name: "Login User",
                key: "login",
                route: "/api#users/login",
            },
            {
                name: "Register User",
                key: "register",
                route: "/api#users/register",
            },
        ]
    },
    {
        type: "collapse",
        name: "Products",
        key: "products",
        icon: <SellIcon size="12px" />,
        collapse: [
            {
                name: "List Products",
                key: "list-products",
                route: "/api#products/list-products",
            },
            {
                name: "Get Product",
                key: "get-product",
                route: "/api#products/get-product",
            },
        ]
    },
    {
        type: "collapse",
        name: "Orders",
        key: "orders",
        icon: <ShoppingCartIcon size="12px" />,
        route: "/dashboards/automotive",
        collapse: [
            {
                name: "List Orders",
                key: "list-orders",
                route: "/api#orders/list-orders"
            },
            {
                name: "Get Order",
                key: "get-order",
                route: "/api#orders/get-order"
            }
        ]
    },
    {
        type: "collapse",
        name: "Cart Items",
        key: "cart-items",
        icon: <ShoppingCartIcon size="12px" />,
        route: "/dashboards/automotive",
        collapse: [
            {
                name: "List Cart Items",
                key: "cart-item-list",
                route: "/api#cart-items/list-cart-items"
            },
            {
                name: "Create Cart Item",
                key: "cart-item-create",
                route: "/api#cart-items/create-cart-item"
            },
            {
                name: "Delete Cart Item",
                key: "cart-item-delete",
                route: "/api#cart-items/delete-cart-item"
            },
            {
                name: "Update quantity",
                key: "cart-item-quantity",
                route: "/api#cart-items/update-cart-item-quantity"
            }
        ]
    },
    {
        type: "collapse",
        name: "Checkouts",
        key: "payments  ",
        icon: <CreditCard size="16px" />,
        collapse: [
            {
                name: "Binance",
                key: "binance",
                route: "/api#checkout/binance"
            },
            {
                name: "Stripe checkout session",
                key: "stripe-checkout-session",
                route: "/api#checkout/stripe-checkout-session"
            },
            {
                name: "Stripe payment intent",
                key: "stripe-payment-intent",
                route: "/api#checkout/stripe-payment-intent"
            },
        ]
    },
];

export default sidebarRoutes;
