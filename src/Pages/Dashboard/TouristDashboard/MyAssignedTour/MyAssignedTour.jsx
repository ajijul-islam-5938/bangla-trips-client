import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import ReactPaginate from "react-paginate";
import { useState } from "react";
const TABLE_HEAD = [
  "Package Name",
  "Guide Name",
  "Price",
  "Status",
  "Tour Date",
  "Action",
];

const MyAssignedTour = () => {
  const { axiosSecure } = useAxios();
  const user = useAuth();

  const { data: assigned, refetch } = useQuery({
    queryKey: ["assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assigned-tours?email=${user.email}`);
      return res.data;
    },
  });
  console.log(assigned);

  const handleReject = (_id, item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Want to Reject ${item.name}'s Booking ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/booking/reject/${_id}`)
          .then(res => {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: ` Request of ${assigned.name} is Rejected`,
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

  const handleAccept = (_id, item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Want to Accept ${item.name}'s Booking ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/booking/accept/${_id}`)
          .then(res => {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: ` Request of ${assigned.name} is Accepted`,
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


  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = assigned?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(assigned?.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % assigned?.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl my-16">
        {" "}
        My Assigned Tours
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
            {currentItems?.map(item => (
              <tr key={item._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.package.packageName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.name}
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
                      value={item.price}
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
                    {item.status === "inReview" ? (
                      <Chip
                        variant="ghost"
                        color="orange"
                        size="sm"
                        value="In Review"
                        className="text-center"
                      />
                    ) : item.status === "rejected" ? (
                      <Chip
                        variant="ghost"
                        color="red"
                        size="sm"
                        value="Rejected"
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
                      value={item.date}
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
                      onClick={() => handleAccept(item._id, item)}
                      variant="gradient"
                      size="sm"
                      color="green"
                      disabled={item.status === "accepted" ? true : false}
                    >
                      Accept
                    </Button>

                    <Button
                      onClick={() => handleReject(item._id, item)}
                      variant="gradient"
                      size="sm"
                      color="red"
                      disabled={item.status === "rejected" ? true : false}
                    >
                      Reject
                    </Button>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={TABLE_HEAD.length}>
                <ReactPaginate
                  nextLabel="Next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="< Previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </Card>
    </div>
  );
};

export default MyAssignedTour;
