import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const pathName = location.pathname
    const user = useAuth();
    // console.log(user);

    if (user) {
        return children;
    }
    return <Navigate to="/sign-in" state={pathName} />
};

export default PrivateRoute;