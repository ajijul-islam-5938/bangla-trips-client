import { Button, Input, Option, Select } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";

const BookNow = ({ data,refetch }) => {
  const user = useAuth();
  const { axiosSecure } = useAxios();

  const [guide, setGuide] = useState({});
  const handleAddPackage = event => {
    event.preventDefault();
    refetch()
    const packageInfo = {
      name: event.target.name.value,
      price: event.target.price.value,
      email: event.target.email.value,
      photoUrl: event.target.photoUrl.value,
      guideName: guide.name,
      guideEmail: guide.email,
      date: event.target.date.value,
      package: data,
      status : "inReview"
    };

    Swal.fire({
      title: "Are you sure?",
      text: `You want to Booking ${data.packageName} Package ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .post("/booking", packageInfo)
          .then(res => {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: "The Package Booked For You",
            });
          })
          .catch(err => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      }
    });
  };

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
            name="price"
            defaultValue={"$" + data?.price}
            readOnly
          />
          <Input type="date" variant="outlined" label="Date" name="date" required/>

          <Select onChange={e => setGuide(e)} label="Select Guide" name="guide" required>
            {guides?.map(guide => (
              <Option value={{email : guide.email, name : guide.name}} key={guide._id}>
                {guide.name}
              </Option>
            ))}
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
