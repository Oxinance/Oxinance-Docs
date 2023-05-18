import CreditCard from "./examples/Icons/CreditCard";
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Algolia from "./examples/Icons/Algolia";

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
            {
                name: "Google OAuth 2.0",
                key: "register",
                route: "/api#users/oauth/google",
            },
            {
                name: "Facebook OAuth 2.0",
                key: "register",
                route: "/api#users/oauth/facebook",
            },
            {
                name: "Microsoft OAuth 2.0",
                key: "register",
                route: "/api#users/oauth/microsoft",
            },
            {
                name: "Apple OAuth 2.0",
                key: "register",
                route: "/api#users/oauth/apple",
            }
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
        key: "payments",
        icon: <CreditCard size="16px" />,
        collapse: [
            {
                name: "Binance",
                key: "binance",
                route: "/api#checkout/binance"
            },
            {
                name: "PayPal",
                key: "paypal",
                route: "/api#checkout/paypal"
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
    {
        type: "collapse",
        name: "Algolia",
        key: "algolia",
        icon: <Algolia size="16px" />,
        collapse: [
            {
                name: "Search",
                key: "search",
                route: "/api#algolia/search"
            },
        ]
    },
];

export default sidebarRoutes;
