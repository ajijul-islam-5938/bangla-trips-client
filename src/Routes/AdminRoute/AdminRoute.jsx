import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";


const AdminRoute = ({children}) => {
const user = useAuth();
const isAdmin = useAdmin();
const location = useLocation()

if(user && isAdmin){
    return children
}

return <Navigate to="/sign-in" state={location.pathname}/>

};

export default AdminRoute;