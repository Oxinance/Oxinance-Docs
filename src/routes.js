import AuthGuardedApp from "./AuthGuardedApp";
import {Navigate} from "react-router-dom";

import Api from "./views/Api";


const routes = [
  {
    element: (
          <AuthGuardedApp/>
    ),
    children: [
      { path: "/api", element: <Api /> },
      { path: "*", element: <Navigate to={"/api"}/>}
    ]
  }
]

export default routes;
