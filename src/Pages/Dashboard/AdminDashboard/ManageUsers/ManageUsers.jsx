import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";
import useAdmin from "../../../../Hooks/useAdmin";
import { RiAdminLine } from "react-icons/ri";
const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const ManageUsers = () => {
  const { axiosSecure } = useAxios();

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl my-16">Manage Users</h1>
      <Card className="h-full w-full md:w-11/12 mx-auto my-16">
        <table className="w-full min-w-max table-auto text-left">
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
                        color="green"
                        size="sm"
                        value="Admin"
                        className="text-center"
                      />
                    ) : user.role === "guide" ? (
                      <Chip
                        variant="ghost"
                        color="green"
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
                        color="green"
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
                    <Button variant="outlined" size="small" color="orange">
                      Make Guide
                    </Button>
                    <Button variant="gradient" size="small" color="blue">
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
