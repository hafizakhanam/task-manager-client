import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/manageItems/manageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'addItems',
          element: <AddItems></AddItems>
        },
        {
          path: 'manageItems',
          element: <ManageItems></ManageItems>
        },
        {
          path: 'updateItem/:id',
          element: <UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`https://task-manager-server-neon.vercel.app/task/${params.id}`)
        }
      ]
    },
]);