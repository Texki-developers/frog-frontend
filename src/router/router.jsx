import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import Checking from "../pages/Checkings/Checking";
import JoinCommunity from "../pages/JoinCommunity/JoinCommunity";
import InvitePage from "../pages/InvitePage/InvitePage";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import YouAreAmazing from "../pages/yourAmazing";
import RisingStar from "../pages/risingStar";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checking",
        element: <Checking />,
      },
      {
        path: "/dashboard",
        element: <JoinCommunity />,
      },
      {
        path: "/invite",
        element: <InvitePage />,
      },
      {
        path:"/leaderboard",
        element:<LeaderBoard/>
      },
      {
        path:"/rising-star",
        element:<RisingStar/>
      },
      {
        path:"/amazing",
        element:<YouAreAmazing/>
      }
    ],
  },
]);

export default router;
