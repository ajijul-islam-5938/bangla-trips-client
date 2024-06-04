import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Gallery from "../../Components/Gallery/Gallery";
import { Typography } from "@material-tailwind/react";
import useData from "../../Hooks/useData";
import { useLoaderData, useParams } from "react-router-dom";

const PackageDetails = () => {
  const data = useLoaderData();
  console.log(data);

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
  return (
    <div className="my-20 w-11/12 mx-auto">
      <SectionTitle title="PackageDetails Page" />
      <Gallery gallery={data.gallery} />
      <Typography variant="paragraph" as={"p"}>
        {data.aboutTour}
      </Typography>
      <div className="w-11/12 mx-auto my-10">
        <h1 className="text-2xl font-semibold text-center my-5">
          Our Tour Plan
        </h1>

        {data.tourPlan.map((plan, inx) => (
          <Accordion
            key={inx}
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              Day {plan.day}
            </AccordionHeader>
            <AccordionBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis minima odio porro delectus temporibus neque maiores incidunt explicabo eligendi?</AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;
