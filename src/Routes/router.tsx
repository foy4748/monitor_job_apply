import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Shared/MainLayout";
import Home from "../Components/Home";
const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routerObj);
export default router;
