import { createBrowserRouter } from "react-router";

import Explore from "../layouts/Explore";
import Login from "../pages/Login";
import Main from "../layouts/Main";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
