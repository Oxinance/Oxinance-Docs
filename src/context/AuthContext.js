import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
/* eslint-disable */

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        axios.defaults.headers.common.Authorization = `Token ${accessToken}`
    } else {
        localStorage.removeItem('accessToken')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload
            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload
            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => { },
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (email_or_username, password, errorCallback) => {

        const response = await axios.post("https://api.oxinance.com/authentication/v1/login/", {
            email_or_username: email_or_username,
            password: password
        })

        console.log(response)

        if (response.status === 200) {
            setSession(response.data.key);
            dispatch({
                type: "LOGIN",
                payload: {
                    isAuthenticated: true,
                    user: response.data.user
                }
            })
        } else {
            errorCallback(response);
        }
    }

    const register = async (email, username, password1, password2) => {
        const response = await axios.post("https://api.oxinance.com/authentication/v1/register/", {
            email,
            username,
            password1,
            password2
        })

        const { key, user } = response.data

        await setSession(key)
        await dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        })
    }

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        ; (async () => {
            try {
                const token = localStorage.getItem("accessToken");

                if (token) {
                    console.log("START VERIFYING USER")
                    const response = await axios.get("https://api.oxinance.com/authentication/v1/user", {
                        headers: {
                            Authorization: `Token ${token}`
                        }
                    })
                    console.log(response)
                    if (response.status === 200) {
                        setSession(token);
                        dispatch({
                            type: 'INIT',
                            payload: {
                                isAuthenticated: true,
                                user: response.data.user,
                            },
                        })
                    }
                } else {
                    setSession(null);
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (error) {
                console.log("ERROR AUTH CONTEXT")
                // means the token storaged is wrong
                setSession(null);
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return (
            <div style={{position: "absolute", top: "50%", left:"50%", textAlign: "center"}}>
                <div className={"spin"}>
                    <svg className="ProductIcon ProductIcon--Payments ProductNav__icon" width="40" height="40" viewBox="0 0 40 40"
                         fill="none" xmlns="http://www.w3.org/2000/svg"><title>Payments logo</title><path
                        d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
                        fill="url(#product-icon-payments-ProductNav-a)">
                    </path><path
                        d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
                        fill="#96F"></path><path
                        d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
                        fill="url(#product-icon-payments-ProductNav-b)"></path><defs><linearGradient id="product-icon-payments-ProductNav-a"
                                                                                                     x1="20" y1="4.13" x2="20" y2="21.13"
                                                                                                     gradientUnits="userSpaceOnUse"><stop
                        stopColor="#11EFE3"></stop><stop offset="1" stopColor="#21CFE0"></stop></linearGradient><linearGradient
                        id="product-icon-payments-ProductNav-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop
                        stopColor="#0048E5"></stop><stop offset="1" stopColor="#9B66FF"></stop></linearGradient></defs></svg>
                </div>
                <p style={{marginTop: 10}}>Logging In</p>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{...state, login, logout, register,}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
