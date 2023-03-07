import { createBrowserRouter } from "react-router-dom";
import DashBordLayOut from "../Layout/DashBordLayOut";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dash-Bord/AddDoctor/AddDoctor";
import AllBookinPresent from "../Pages/Dash-Bord/AllBookinPresent";
import DashBord from "../Pages/Dash-Bord/DashBord";
import MyAppointment from "../Pages/Dash-Bord/MyAppointment";
import ErrorPage from "../Pages/Error/ErrorPage";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login-SingUP/Login";
import SingUp from "../Pages/Login-SingUP/SingUp";
import ManageDoctors from "../Pages/ManageDoctors/ManageDoctors";
import UserBooking from "../Pages/UserBooking/UserBooking";
import AdminRoute from "../Privet_Routes/AdminRoute";
import PrivetRoute from "../Privet_Routes/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/appointment",
        element: (
          <PrivetRoute>
            <Appointment></Appointment>
          </PrivetRoute>
        ),
      },
      {
        path: "/allDoctior",
        element: (
          <PrivetRoute>
            <ManageDoctors />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/userBooking",
        element: (
          <PrivetRoute>
            <UserBooking />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dasbord",
    element: (
      <PrivetRoute>
        <DashBordLayOut></DashBordLayOut>
      </PrivetRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dasbord",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dasbord/all-booking",
        element: (
          <AdminRoute>
            <AllBookinPresent />
          </AdminRoute>
        ),
      },
      {
        path: "/dasbord/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
