import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
const TABLE_HEAD = [
  "Package Name",
  "Guide Name",
  "Price",
  "Status",
  "Tour Date",
  "Action",
];

const ManageUsers = () => {
  const { axiosSecure } = useAxios();
  const user = useAuth();
  const { data: bookings, refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-bookings?email=${user.email}`);
      return res.data;
    },
  });
  console.log(bookings);
  const handleCancel = (_id, booking) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to Cancel ${booking.package.packageName}'s Booking ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/my-booking/delete/${_id}`)
          .then(res => {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: `${user.name} is now ADMIN`,
            });
            refetch();
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

  const handleGuide = (_id, user) => {
    axiosSecure
      .patch(`/user/guide/${_id}`)
      .then(res => {
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: `${user.name} is now GUIDE`,
        });
        refetch();
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl my-16">
        {" "}
        Manage My Booking
      </h1>
      <Card className="h-full w-full md:w-11/12 mx-auto my-16 overflow-x-scroll">
        <table className="w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings?.map(booking => (
              <tr key={booking._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {booking.package.packageName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {booking.guide.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <Chip
                      variant="ghost"
                      color="light-green"
                      size="sm"
                      value={booking.price}
                      className="text-center"
                    />
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {booking.status === "inReview" ? (
                      <Chip
                        variant="ghost"
                        color="red"
                        size="sm"
                        value="In Review"
                        className="text-center"
                      />
                    ) : (
                      <Chip
                        variant="ghost"
                        color="green"
                        size="sm"
                        value="Accepted"
                        className="text-center"
                      />
                    )}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium flex gap-2 items-center"
                  >
                    <Chip
                      variant="ghost"
                      color="light-blue"
                      size="sm"
                      value={booking.date}
                      className="text-center"
                    />
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium flex gap-2 items-center"
                  >
                    {booking.status === "accepted" ? (
                      <Button
                        onClick={() => handleGuide(booking._id, booking)}
                        variant="outlined"
                        size="sm"
                        color="blue"
                        disabled={booking.role === "requested" ? false : true}
                      >
                        Pay
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleCancel(booking._id, booking)}
                        variant="gradient"
                        size="sm"
                        color="red"
                        disabled={booking.role === "admin" ? true : false}
                      >
                        Cancel
                      </Button>
                    )}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ManageUsers;
