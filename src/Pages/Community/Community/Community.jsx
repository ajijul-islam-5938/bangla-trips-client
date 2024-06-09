import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import StoryCard from "../../../Components/StoryCard/StoryCard";

const Community = () => {
  const { axiosPublic } = useAxios();
  const { data: stories } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/stories");
      return res.data;
    },
  });
  return (
    <div className="my-28">
      <SectionTitle title={"Our Community"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        {stories?.map(story => (
          <StoryCard
            key={story._id}
            initial={{ opacity: 0, translateX: -1000 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            story={story}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
