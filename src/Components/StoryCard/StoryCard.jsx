import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
} from "react-share";
import PrivateRoute from "../../Routes/PrivateRoute/PrivateRoute";
import useAuth from "../../Hooks/useAuth";

export default function StoryCard({ story }) {
  const user = useAuth()
  return (
    <Card color="transparent" shadow={true} className="border-t p-5 mx-auto">
      <Link to={`/story/${story._id}`}>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="md"
            variant="rounded"
            src={story.photoURL}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {story.name}
              </Typography>
              <div className="5 flex items-center gap-x-3">
                <p>Share with</p>

                <FacebookShareButton disabled={user ? false : true}
                  url={`${import.meta.env.VITE_SITE_LINK}/story/${story._id}`}
                >
                  <FacebookIcon size={20} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton disabled={user ? false : true}
                  url={`${import.meta.env.VITE_SITE_LINK}/story/${story._id}`}
                >
                  <FacebookMessengerIcon size={20} round />
                </FacebookMessengerShareButton>
              </div>
            </div>
            <Typography color="blue-gray">{story.email}</Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className="my-2" variant="h5">
            Package Name :{story.spotName}
          </Typography>
          <Typography variant="paragraph">
            {story.experience ||
              `I found solution to all my design needs from Creative Tim. I
            use them as a freelancer in my hobby projects for fun! And its
            really affordable, very humble guys !!!`}
          </Typography>
          <div>
            <img
              className="w-full h-60 rounded-md mt-5"
              src={story.images[0]}
              alt=""
            />
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
