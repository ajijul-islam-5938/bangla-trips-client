import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useAdmin = () => {
    const {axiosSecure} = useAxios();
    const user = useAuth();

    const {data : isAdmin} = useQuery({
        queryKey : ["admin"],
        queryFn : async()=>{
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            return res.data;
        }
    })
return isAdmin
};

export default useAdmin;
