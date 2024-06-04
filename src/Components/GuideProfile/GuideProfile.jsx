import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const GuideProfile = () => {
  const guide = useLoaderData();
  return (
    <div className="my-20">
      <Card className="md:w-10/12 mx-auto">
        <CardHeader floated={false} className="h-80 ">
          <img
            className="w-80 h-80 mx-auto rounded-full"
            src={guide?.photoURL}
            alt={guide?.name}
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {guide?.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium my-3"
            textGradient
          >
            Email : {guide?.email}
          </Typography>
          <Typography color="blue-gray" className="font-lg" textGradient>
            <Chip
              variant="ghost"
              color="green"
              value={guide?.role}
              className="inline-block"
            />
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default GuideProfile;
