import { Link } from "react-router-dom";

const TourTypeCard = ({ item }) => {
  return (
    <Link to={`packages/tour-type/${item}`}>
      <div className="bg-white flex justify-center items-center h-32 w-32 md:w-52 md:h-52 text-center rounded-3xl shadow-xl ">
        {item}
      </div>
    </Link>
  );
};

export default TourTypeCard;
