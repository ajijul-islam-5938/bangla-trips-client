import * as React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";

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
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Customer Stories",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
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
