import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home/Home";
import Community from "./Pages/Community/Community/Community";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import About from "./Pages/About/About/About";
import Contact from "./Pages/Contact/Contact/Contact";
import SignIN from "./Pages/SignIn/SignIN";
import SignUp from "./Pages/SignUp/SignUp";

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
        }
    ]
  },
]);

export default router;
