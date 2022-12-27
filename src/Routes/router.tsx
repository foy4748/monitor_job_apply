import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Shared/MainLayout";
import Home from "../Components/Home";
import UserInfo from "../Components/UserInfo";
const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Home
            id="test"
            name="Overview"
            dataRows={[
              {
                date: "20 DEC, 2022",
                appliedJobs: 3,
                interviews: 4,
                submittedTasks: 3,
                rejections: 4,
              },
              {
                date: "20 DEC, 2022",
                appliedJobs: 3,
                interviews: 4,
                submittedTasks: 3,
                rejections: 4,
              },
              {
                date: "20 DEC, 2022",
                appliedJobs: 3,
                interviews: 4,
                submittedTasks: 3,
                rejections: 4,
              },
              {
                date: "20 DEC, 2022",
                appliedJobs: 3,
                interviews: 4,
                submittedTasks: 3,
                rejections: 4,
              },
            ]}
          />
        ),
      },
      {
        path: "/:id",
        element: <UserInfo />,
      },
    ],
  },
];

const router = createBrowserRouter(routerObj);
export default router;
