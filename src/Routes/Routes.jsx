import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Community from "../Pages/Community/Community/Community";
import Blogs from "../Pages/Blogs/Blogs/Blogs";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";
import SignIN from "../Pages/SignIn/SignIN";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/TouristDashboard/MyProfile/MyProfile";
import MyWishList from "../Pages/Dashboard/TouristDashboard/MyWishList/MyWishList";
import MyBookings from "../Pages/Dashboard/TouristDashboard/MyBookings/MyBookings";
import RequestToAdmin from "../Pages/Dashboard/TouristDashboard/RequestToAdmin/RequestToAdmin";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddPackages from "../Pages/Dashboard/AdminDashboard/AddPaackages/AddPackages";
import AllPackages from "../Pages/AllPackages/AllPackages";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import GuideProfile from "../Components/GuideProfile/GuideProfile";
import MyAssignedTour from "../Pages/Dashboard/TouristDashboard/MyAssignedTour/MyAssignedTour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/community",
            element : <Community/>
        },
        {
            path : "/blogs",
            element : <Blogs/>
        },
        {
            path : "/about-us",
            element : <About/>
        },
        {
            path : "/contact-us",
            element : <Contact/>
        },
        {
            path : "/sign-in",
            element : <SignIN/>
        },
        {
            path : "/sign-up",
            element : <SignUp/>
        },
        {
            path : "/packages",
            element : <AllPackages/>
        },
        {
            path : "/package/details/:id",
            element : <PackageDetails/>,
            loader : ({params}) => fetch(`${import.meta.env.VITE_SERVER_URL}/package/${params.id}`)
        },
        {
            path : "/guide/:id",
            element : <GuideProfile/>,
            loader : ({params})=> fetch(`${import.meta.env.VITE_SERVER_URL}/guide/${params.id}`)
        }
    ]
  },
  {
    path : "/dashboard",
    element : <DashboardLayout/>,
    children : [
        {
            path : "/dashboard",
            element : <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
            path : "/dashboard/my-profile",
            element : <PrivateRoute><MyProfile/></PrivateRoute>
        },
        {
            path : "/dashboard/my-wishlist",
            element : <PrivateRoute><MyWishList/></PrivateRoute>
        },
        {
            path : "/dashboard/my-bookings",
            element : <PrivateRoute><MyBookings/></PrivateRoute>
        },
        {
            path : "/dashboard/request-to-admin",
            element : <PrivateRoute><RequestToAdmin/></PrivateRoute>
        },
        {
            path : "/dashboard/manage-user",
            element : <AdminRoute><ManageUsers/></AdminRoute>
        },
        {
            path : "/dashboard/add-package",
            element : <AdminRoute><AddPackages/></AdminRoute>
        },
        {
            path : "/dashboard/assigned-tour",
            element : <MyAssignedTour/>
        }
    ]
  }
]);

export default router;
