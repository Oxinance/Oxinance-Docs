const initialState = {
    expandUsers: false,
    expandProducts: false,
    expandOrders: false,
    expandCartItems: false,
    expandCheckout: false,
    expandAlgolia: false,
}

const ApiReducer = function (state = initialState, action) {
    switch (action.type) {
        case "EXPAND_USERS":
            return action.payload;
        case "COLLAPSE_USERS":
            return action.payload;
        case "EXPAND_PRODUCTS":
            return action.payload;
        case "COLLAPSE_PRODUCTS":
            return action.payload;
        case "EXPAND_ORDERS":
            return action.payload;
        case "COLLAPSE_ORDERS":
            return action.payload;
        case "EXPAND_CART_ITEMS":
            return action.payload;
        case "COLLAPSE_CART_ITEMS":
            return action.payload;
        case "EXPAND_CHECKOUT":
            return action.payload;
        case "COLLAPSE_CHECKOUT":
            return action.payload;
        case "EXPAND_ALGOLIA":
            return action.payload;
        case "COLLAPSE_ALGOLIA":
            return action.payload;
        case "COLLAPSE_ALL":
            return {...initialState};
        default: {
            return state;
        }
    }
}

export default ApiReducer;
