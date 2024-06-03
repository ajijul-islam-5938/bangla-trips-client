import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";

const AddPackages = () => {
  const [tourDate, setTourDate] = useState("");

  const handleAddPackage = event => {
    event.preventDefault();
    const packageInfo = {
      packageName: event.target.packageName.value,
      price: event.target.price.value,
      gallery: event.target.gallery.value.split(","),
      aboutTour: event.target.aboutTour.value,
      tourType: event.target.tourType.value,
      tourPlan: [
        { day: 1, activities: event.target.day1.value },
        { day: 2, activities: event.target.day2.value },
        { day: 3, activities: event.target.day3.value },
      ],
      tourDate: tourDate,
    };
    console.log(packageInfo);
  };

  return (
    <div className="my-16">
      <h1 className="text-center font-semibold my-5 mx-auto">
        Add your Own Story
      </h1>
      <form onSubmit={handleAddPackage} className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:my-2">
          <Input
            variant="outlined"
            label="Package Name"
            placeholder="Package Name"
            name="packageName"
          />
          <Input
            variant="outlined"
            label="Price"
            placeholder="Price"
            name="price"
          />
          <Input
            variant="outlined"
            label="Gallery (comma separated URLs)"
            placeholder="Gallery"
            name="gallery"
          />
          <Input
            variant="outlined"
            label="About Tour"
            placeholder="About Tour"
            name="aboutTour"
          />
          <Input
            variant="outlined"
            label="Tour Type"
            placeholder="Tour Type"
            name="tourType"
          />

          <Input
            variant="outlined"
            label="Day 1 Activities"
            placeholder="Day 1 Activities"
            name="day1"
          />
          <Input
            variant="outlined"
            label="Day 2 Activities"
            placeholder="Day 2 Activities"
            name="day2"
          />
          <Input
            
            variant="outlined"
            label="Day 3 Activities"
            placeholder="Day 3 Activities"
            name="day3"
          />
        </div>

        <Button
          type="submit"
          variant="gradient"
          color="red"
          className="bg-red-500"
          fullWidth
        >
          Add Story
        </Button>
      </form>
    </div>
  );
};

export default AddPackages;
