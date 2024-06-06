import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AdminRoute = ({children}) => {
const {user,loading} = useContext(AuthContext);
const {isAdmin,adminLoading} = useAdmin();
const location = useLocation()
if(adminLoading || loading){
    return
}

if(user && isAdmin){
    return children
}

return <Navigate to="/sign-in" state={location.pathname}/>

};

export default AdminRoute;