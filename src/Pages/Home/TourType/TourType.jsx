import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import TourTypeCard from "../../../Components/TourTypeCard/TourTypeCard";
import useData from "../../../Hooks/useData";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const TourType = () => {
  const { axiosPublic } = useAxios();
  // const {datas,refetch} = useData({
  //   route : "/packages"
  // })
  const { data: datas } = useQuery({
    queryKey: ["datas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages");
      return res.data;
    },
  });

  const type = [];

  datas?.forEach(data => {
    const tourType = data.tourType;
    if (!type.includes(tourType)) {
      type.push(tourType);
    }
  });

  return (
    <div>
      <SectionTitle title="Tour Type" />
      <div className="my-12 tour-type-section p-10">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 4,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper md:w-10/12 mx-auto px-16"
        >
          {type?.map((item, i) => (
            <SwiperSlide key={i} className="text-black text-xl font-bold ">
              <TourTypeCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TourType;
