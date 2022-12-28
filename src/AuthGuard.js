import {Navigate} from "react-router-dom";
import useAuth from "./hooks/useAuth";
/* eslint-disable */
const AuthGuard = ({ children }) => {
    let { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? children : <Navigate replace to={"/session/login"}/>}
        </>
    )
}

export default AuthGuard;
