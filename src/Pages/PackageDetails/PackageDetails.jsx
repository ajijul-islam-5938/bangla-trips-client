import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  ListItemPrefix,
  Avatar,
  ListItem,
  List,
  Card,
} from "@material-tailwind/react";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Gallery from "../../Components/Gallery/Gallery";
import { Typography } from "@material-tailwind/react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BookNow from "../../Components/BookNow/BookNow";

const PackageDetails = () => {
  const data = useLoaderData();

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  const [open, setOpen] = React.useState(0);

  const handleOpen = value => setOpen(open === value ? 0 : value);
  const { axiosSecure } = useAxios();

  const { data: guides ,refetch} = useQuery({
    queryKey: "guides",
    queryFn: async () => {
      const res = await axiosSecure.get("/guides");
      return res.data;
    },
  });
  return (
    <div className="my-28 w-11/12 mx-auto">
      <SectionTitle title="PackageDetails Page"/>
      <Gallery gallery={data.gallery} />
      <hr className="my-5"/>
      <Typography variant="h3" as={"h2"}>
        {data.packageName}
      </Typography>
      <Typography variant="paragraph" as={"p"}>
        {data.aboutTour}
      </Typography>
      <div className=" mx-auto my-10">
        <h1 className="text-2xl font-semibold text-center my-5">
          Our Tour Plan
        </h1>

        {data?.tourPlan?.map((plan, inx) => (
          <Accordion
            key={inx}
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="shadow px-5"
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              Day {plan.day}
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              perferendis minima odio porro delectus temporibus neque maiores
              incidunt explicabo eligendi?
            </AccordionBody>
          </Accordion>
        ))}

        <Card className="mx-auto my-10">
            <h1 className="text-center font-semibold text-2xl">Guide List</h1>
          <List>
            {guides?.map(guide => (
              <ListItem
                key={guide._id}
                className="flex justify-between items-center"
              >
                <div className="flex">
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src={guide?.photoURL}
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {guide.name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {guide.email}
                    </Typography>
                  </div>
                </div>
                <Link to={`/guide/${guide._id}`}>
                  <Button variant="outlined">View Details</Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Card>

        <h1 className="text-2xl text-center font-semibold">Book Now</h1>
        <BookNow data={data} refetch={refetch}/>
      </div>
    </div>
  );
};

export default PackageDetails;
