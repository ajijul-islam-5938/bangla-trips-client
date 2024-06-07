import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useGuide from "../../Hooks/useGuide";


const GuideRoute = ({children}) => {
const {user,loading} = useContext(AuthContext);
const {isGuide,guideLoading} = useGuide();
const location = useLocation()
if(guideLoading || loading){
    return
}

if(user && isGuide){
    return children
}

return <Navigate to="/sign-in" state={location.pathname}/>

};

export default GuideRoute;