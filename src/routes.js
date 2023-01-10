import AuthGuardedApp from "./AuthGuardedApp";

import Api from "./views/Api";


const routes = [
  {
    element: (
          <AuthGuardedApp/>
    ),
    children: [
      { path: "/api", element: <Api /> },
    ]
  }
]

export default routes;
