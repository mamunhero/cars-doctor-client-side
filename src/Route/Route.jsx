import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }, 
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path:"/checkout/:id",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: "/booking",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      }
    ]
  }
])

export default Route;

