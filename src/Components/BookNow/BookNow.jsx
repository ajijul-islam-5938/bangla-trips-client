import { Button, Input, Option } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import { MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import ReactConfetti from "react-confetti";

const BookNow = ({ data }) => {
  const { data: bookings, refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-bookings?email=${user.email}`);
      return res.data;
    },
  });

  const [startDate, setStartDate] = useState(new Date());

  const user = useAuth();
  const { axiosSecure } = useAxios();

  const [guide, setGuide] = useState({});
  const [discount, setDiscount] = useState(false);

  const handleAddPackage = event => {
    event.preventDefault();
    refetch();
    const packageInfo = {
      name: event.target.name.value,
      price: event.target.price.value,
      email: event.target.email.value,
      photoUrl: event.target.photoUrl.value,
      guideName: guide.target.value.name,
      guideEmail: guide.target.value.email,
      date: startDate,
      package: data,
      status: "inReview",
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
            refetch();
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: "The Package Booked For You",
            });
            
            if (bookings?.length > 3) {
              setDiscount(true);
              Swal.fire({
                icon:"info",
                title: "You have got Discounts",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("")
                  left top
                  no-repeat
                `
              });
            }
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
  // const { width, height } = useWindowSize()
  return (
    <div className="my-16">
      <h1 className="text-center font-semibold my-5 mx-auto">
        Give required info for booking
      </h1>
      <form onSubmit={handleAddPackage} className="w-10/12 mx-auto">
        {discount && <ReactConfetti numberOfPieces={3000} width={window.innerWidth} height={3000} />}
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
          <div className="border-2 rounded-md flex items-center px-5">
            <DatePicker
              dateFormat="dd/MM/YYYY"
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>
          <Select
            size="small"
            onChange={e => setGuide(e)}
            label="Select Guide"
            name="guide"
            required
          >
            {guides?.map(guide => (
              <MenuItem
                value={{ email: guide.email, name: guide.name }}
                key={guide._id}
              >
                {guide.name}
              </MenuItem>
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
