import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useGuide = () => {
    const {axiosSecure} = useAxios();
    const user = useAuth();

    const {data : isGuide,isPending : guideLoading} = useQuery({
        queryKey : ["guide"],
        queryFn : async()=>{
            const res = await axiosSecure.get(`/user/guide/${user?.email}`)
            return res.data;
        }
    })
return {isGuide,guideLoading}
};

export default useGuide;
