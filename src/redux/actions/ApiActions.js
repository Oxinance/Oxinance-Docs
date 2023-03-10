export const SET_PROJECTS = "SET_PROJECTS";
export const SET_SELECTED_PROJECT = "SET_SELECTED_PROJECT";
export const CHANGE_DEVELOPMENT_MODE = "CHANGE_DEVELOPMENT_MODE";


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

export const collapseAll = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: "COLLAPSE_ALL",
        })
    }
}

