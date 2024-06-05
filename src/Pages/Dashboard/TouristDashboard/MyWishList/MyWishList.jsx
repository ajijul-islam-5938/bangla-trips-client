import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import { Link } from "react-router-dom";
const TABLE_HEAD = ["Name", "E-mail", "Role", "Actions"];

const MyWishList = () => {
  const { axiosSecure } = useAxios();
  const user = useAuth();

  const { data: wishLists, refetch } = useQuery({
    queryKey: ["wishLists"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wish-lists?email=${user.email}`);
      return res.data;
    },
  });


  const handleDelete = (_id, wishList) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to Delete ${wishList.packageName} from wish List ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/wish-list/delete/${_id}`)
          .then(res => {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: `${wishList.packageName} is Deleted`,
            });
            refetch()
            console.log(res);
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
      <h1 className="text-center font-semibold text-2xl my-16">
        My Wish Lists
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
            {wishLists?.map(wishList => (
              <tr key={wishList._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {wishList.packageName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {wishList.tourType}
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
                      color="green"
                      size="sm"
                      value={`$`+wishList.price}
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
                    <Button
                      onClick={() => handleDelete(wishList._id, wishList)}
                      variant="outlined"
                      size="sm"
                      color="deep-orange"
                    >
                      delete
                    </Button>
                    <Link to={`/package/details/${wishList.packageId}`}>
                    <Button

                      variant="gradient"
                      size="sm"
                      color="blue"
                      
                    >
                     Visit Details
                    </Button>
                    </Link>
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

export default MyWishList;
