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
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          scrollbar={true}
          navigation={true}

          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper md:w-10/12 mx-auto"
        >
          <SwiperSlide >
            <img className="h-32 w-full" src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-32 w-full"  src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-32 w-full"  src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-32 w-full"  src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-32 w-full"  src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className="h-32 w-full" src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-32 w-full"  src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-32 w-full"  src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className="h-32 w-full" src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TourType;
