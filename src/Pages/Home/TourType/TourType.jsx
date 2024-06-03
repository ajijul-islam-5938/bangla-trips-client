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
const TourType = () => {
  return (
    <div>
      <SectionTitle title="Tour Type" />
      <div className="my-12">
        <Swiper
          slidesPerView={1}
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
          <SwiperSlide >
            <TourTypeCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TourTypeCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TourTypeCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TourTypeCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TourTypeCard/>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default TourType;
