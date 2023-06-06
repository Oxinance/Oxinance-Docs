export const expandUsersAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandUsers: true}
        dispatch({
            type: "EXPAND_USERS",
            payload: payload
        })
    }
}

export const collapseUsersAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandUsers: false}
        dispatch({
            type: "EXPAND_USERS",
            payload: payload
        })
    }
}

export const expandProductsAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandProducts: true}
        dispatch({
            type: "EXPAND_PRODUCTS",
            payload: payload
        })
    }
}

export const collapseProductsAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandProducts: false}
        dispatch({
            type: "COLLAPSE_PRODUCTS",
            payload: payload
        })
    }
}

export const expandOrdersAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandOrders: true}
        dispatch({
            type: "EXPAND_ORDERS",
            payload: payload
        })
    }
}

export const collapseOrdersAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandOrders: false}
        dispatch({
            type: "COLLAPSE_ORDERS",
            payload: payload
        })
    }
}

export const expandCartItemsAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandCartItems: true}
        dispatch({
            type: "EXPAND_CART_ITEMS",
            payload: payload
        })
    }
}

export const collapseCartItemsAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandCartItems: false}
        dispatch({
            type: "COLLAPSE_CART_ITEMS",
            payload: payload
        })
    }
}

export const expandCheckoutAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandCheckout: true}
        dispatch({
            type: "EXPAND_CHECKOUT",
            payload: payload
        })
    }
}

export const collapseCheckoutAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandCheckout: false}
        dispatch({
            type: "COLLAPSE_CHECKOUT",
            payload: payload
        })
    }
}

export const expandAlgoliaAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandAlgolia: true}
        dispatch({
            type: "EXPAND_ALGOLIA",
            payload: payload
        })
    }
}

export const collapseAlgoliaAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandAlgolia: false}
        dispatch({
            type: "COLLAPSE_ALGOLIA",
            payload: payload
        })
    }
}

export const expandPoliciesAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandPolicies: true}
        dispatch({
            type: "EXPAND_POLICIES",
            payload: payload
        })
    }
}

export const collapsePoliciesAction = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const payload = {...state.api, expandPolicies: false}
        dispatch({
            type: "COLLAPSE_POLICIES",
            payload: payload
        })
    }
}

export const collapseAll = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: "COLLAPSE_ALL",
        })
    }
}

