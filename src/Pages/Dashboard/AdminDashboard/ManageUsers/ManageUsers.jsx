import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
const TABLE_HEAD = ["Name", "E-mail", "Role", "Actions"];

const ManageUsers = () => {
  const { axiosSecure } = useAxios();

  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleAdmin = (_id, user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to set ${user.name} as Admin ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Admin!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
        .patch(`/user/admin/${_id}`)
        .then(res => {
          Swal.fire({
            icon: "success",
            title: "Success!!",
            text: `${user.name} is now ADMIN`,
          });
          refetch()
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

    Swal.fire({
      title: "Are you sure?",
      text: `You want to set ${user.name} as Guide ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Guide!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
        .patch(`/user/guide/${_id}`)
          .then(res => {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: `${user.name} is now GUIDE`,
            });
            refetch()
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

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl my-16">Manage Users</h1>
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
            {users?.map(user => (
              <tr key={user._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.role === "admin" ? (
                      <Chip
                        variant="ghost"
                        color="light-blue"
                        size="sm"
                        value="Admin"
                        className="text-center"
                      />
                    ) : user.role === "guide" ? (
                      <Chip
                        variant="ghost"
                        color="light-green"
                        size="sm"
                        value="Guide"
                        className="text-center"
                      />
                    ) : user.role === "requested" ? (
                      <Chip
                        variant="ghost"
                        color="green"
                        size="sm"
                        value="Requested for guide"
                        className="text-center"
                      />
                    ) : (
                      <Chip
                        variant="ghost"
                        color="blue-gray"
                        size="sm"
                        value="Tourist"
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
                    <Button
                      onClick={() => handleGuide(user._id, user)}
                      variant="outlined"
                      size="sm"
                      color="deep-orange"
                      disabled={user.role === "requested" ? false : true}
                    >
                      Make Guide
                    </Button>
                    <Button
                      onClick={() => handleAdmin(user._id, user)}
                      variant="gradient"
                      size="sm"
                      color="blue"
                      disabled={user.role === "admin" ? true : false}
                    >
                      make admin
                    </Button>
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
