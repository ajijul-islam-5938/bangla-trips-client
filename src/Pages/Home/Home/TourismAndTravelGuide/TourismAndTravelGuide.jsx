import * as React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button as MButton,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import PackageCard from "../../../../Components/PackageCard/PackageCard";
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from "@material-tailwind/react";

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const steps = [
  {
    label: "Browse Tour Packages",
    description: `Explore a wide range of tour packages that we have carefully selected to provide you with the best travel experiences. Whether you're looking for adventure, relaxation, or cultural immersion, we have something for everyone.`,
  },
  {
    label: "Select a Package",
    description: `Choose the tour package that matches your preferences and interests. Each package includes detailed itineraries, highlights, and pricing options to help you make an informed decision.`,
  },
  {
    label: "Book Your Tour",
    description: `Complete your booking with a few simple steps. Provide your details, select your preferred dates, and make a secure payment. Get ready for an exciting adventure with BanglaTravel Guide.`,
  },
];

const TourismAndTravelGuide = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const data = [
    {
      label: "Overview",
      value: "html",
      desc: (
        <div className="md:w-[70%] mx-auto">
          <div className="md:w-[60%] mx-auto">
            <h1 className="text-2xl text-center my-5">
              Welcome to BanglaTravel Guide
            </h1>
            <p className="text-center">
              Your ultimate companion to explore the beauty of Bangladesh.
              Discover breathtaking locations, amazing tour packages, and
              experienced tour guides all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-16">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Z44fFqBQQtg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl"
            ></iframe>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/JLjvEYMBGzQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl"
            ></iframe>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/v2QvHyOTlo4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl"
            ></iframe>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1hfrHd3_MMs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="my-16">
            <h1 className="text-xl">How It Works</h1>

            <Box sx={{ maxWidth: "100%" }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={
                        index === 2 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>All steps completed - you're finished</Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                  <Button variant="contained" sx={{ mt: 1, mr: 1 }}>
                    Get Started
                  </Button>
                </Paper>
              )}
            </Box>
          </div>
        </div>
      ),
    },
    {
      label: "Our Packages",
      value: "react",
      desc: (
        <div className="">
          <div className="md:w-[60%] mx-auto my-12">
            <h1 className="text-2xl text-center my-5">Our Packages</h1>
            <p className="text-center">
              Your ultimate companion to explore the beauty of Bangladesh.
              Discover breathtaking locations, amazing tour packages, and
              experienced tour guides all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
          <MButton className="mx-auto block my-10" variant="gradient" size="lg">
            View All Packages
          </MButton>
        </div>
      ),
    },
    {
      label: "Our Guides",
      value: "vue",
      desc: (
        <div className="">
          <div className="md:w-[60%] mx-auto my-12">
            <h1 className="text-2xl text-center my-5">Meet Our Tour Guides</h1>
            <p className="text-center">
              Your ultimate companion to explore the beauty of Bangladesh.
              Discover breathtaking locations, amazing tour packages, and
              experienced tour guides all in one place.
            </p>
          </div>
          <div className="">
            <Card className="md:w-10/12 mx-auto">
              <List>
                <ListItem className="flex justify-between items-center">
                  <div className="flex">
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src="https://docs.material-tailwind.com/img/face-1.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Software Engineer @ Material Tailwind
                    </Typography>
                  </div>
                  </div>
                  <Button variant="outlined">View Details</Button>
                </ListItem>
                <ListItem className="flex justify-between items-center">
                  <div className="flex">
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src="https://docs.material-tailwind.com/img/face-1.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Software Engineer @ Material Tailwind
                    </Typography>
                  </div>
                  </div>
                  <Button variant="outlined">View Details</Button>
                </ListItem>
                <ListItem className="flex justify-between items-center">
                  <div className="flex">
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src="https://docs.material-tailwind.com/img/face-1.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Software Engineer @ Material Tailwind
                    </Typography>
                  </div>
                  </div>
                  <Button variant="outlined">View Details</Button>
                </ListItem>
                <ListItem className="flex justify-between items-center">
                  <div className="flex">
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src="https://docs.material-tailwind.com/img/face-1.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Software Engineer @ Material Tailwind
                    </Typography>
                  </div>
                  </div>
                  <Button variant="outlined">View Details</Button>
                </ListItem>
                
              </List>
            </Card>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="my-32">
      <SectionTitle title="Tourism And Travel Guides" />
      <div className="my-16">
        <Tabs id="custom-animation" value="html">
          <TabsHeader className="md:w-[40%] mx-auto">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default TourismAndTravelGuide;
