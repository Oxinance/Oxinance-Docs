import OutletApp from "./OutletApp";
import {Navigate} from "react-router-dom";

import Api from "./views/Api";


const routes = [
  {
    element: (
          <OutletApp/>
    ),
    children: [
      { path: "/api", element: <Api /> },
      { path: "*", element: <Navigate to={"/api"}/>}
    ]
  }
]

export default routes;
