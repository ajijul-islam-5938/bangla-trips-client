import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const BookNow = ({ data }) => {

  const handleAddPackage = event => {
    event.preventDefault();
    const packageInfo = {
      name: event.target.name.value,
      price: event.target.price.value,
      email: event.target.email.value.split(","),
      photoUrl: event.target.photoUrl.value,
      guide: event.target.guide.value,
    };
    console.log(packageInfo);
  };

  const user = useAuth();
  const { axiosSecure } = useAxios();

  const { data: guides } = useQuery({
    queryKey: "guides",
    queryFn: async () => {
      const res = await axiosSecure.get("/guides");
      return res.data;
    },
  });
  return (
    <div className="my-16">
      <h1 className="text-center font-semibold my-5 mx-auto">
        Give required info for booking
      </h1>
      <form onSubmit={handleAddPackage} className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:my-2">
          <Input
            type="text"
            variant="outlined"
            label="Name"
            name="name"
            defaultValue={user?.displayName}
            readOnly
          />
          <Input
            variant="outlined"
            label="Email"
            name="email"
            defaultValue={user?.email}
            readOnly
          />
          <Input
            variant="outlined"
            label="Photo URL (comma separated URLs)"
            name="photoUrl"
            defaultValue={user?.photoURL}
            readOnly
          />
          <Input
            variant="outlined"
            label="Price"
            name="aboutTour"
            defaultValue={"$" + data?.price}
            readOnly
          />
          <Input type="date" variant="outlined" label="Date" name="date" />

          <Select label="Select Version" name="guide">
            
            {
                guides.map(guide => <Option key={guide._id}>{guide.name}</Option>)
            }
          </Select>
        </div>

        <Button
          type="submit"
          variant="gradient"
          color="red"
          className="bg-red-500"
          fullWidth
        >
          Book Now
        </Button>
      </form>
    </div>
  );
};

export default BookNow;
