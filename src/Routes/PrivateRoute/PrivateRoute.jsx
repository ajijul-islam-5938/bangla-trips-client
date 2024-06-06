import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const pathName = location.pathname
    const user = useAuth();
    const {loading} = useContext(AuthContext)
    // console.log(user);
    if(loading){
        return
    }
    if (user) {
        return children;
    }
    return <Navigate to="/sign-in" state={pathName} />
};

export default PrivateRoute;