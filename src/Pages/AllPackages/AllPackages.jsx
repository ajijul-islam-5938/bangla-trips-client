import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PackageCard from "../../Components/PackageCard/PackageCard";
import useData from "../../Hooks/useData";

const AllPackages = () => {
    const {datas} = useData({
        route : "/packages",
        type : "secure"
    })


  return (
    <div className="my-20">
      <SectionTitle title="Our All Packages" />
      <div className="my-16 grid grid-cols-1 md:grid-cols-3">
        {
            datas?.map(item => <PackageCard item={item} key={item._id}/>)
        }
      </div>
    </div>
  );
};

export default AllPackages;
