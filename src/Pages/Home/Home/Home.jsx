import Banner from "../../../Components/Banner/Banner";
import TourismAndTravelGuide from "./TourismAndTravelGuide/TourismAndTravelGuide";
import TourType from "../TourType/TourType";
import TouristStory from "../TouristStory/TouristStory";

const Home = () => {
  return (
    <div>
      <Banner />
      <TourismAndTravelGuide />
      <TourType />
      <TouristStory/>
    </div>
  );
};

export default Home;
