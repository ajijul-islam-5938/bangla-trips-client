import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useData = ({ route, type }) => {
  const { axiosPublic, axiosSecure } = useAxios();
  const { data : datas, isPending, refetch } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = type
        ? await axiosSecure.get(`${route}`)
        : await axiosPublic.get(`${route}`);
      return res.data;
    },
  });
  return { datas ,isPending,refetch};
};

export default useData;
