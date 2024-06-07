import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
} from "react-share";
import useAuth from "../../Hooks/useAuth";

const StoryDetails = () => {
  const user = useAuth()
  const story = useLoaderData();
  const images = story?.images.map(imagelink => ({imagelink}))
  console.log(images);
  return (
    <div className="my-28 w-10/12 mx-auto">
      <SectionTitle title="Story Details Page" />
      <div>
        <Card color="transparent" shadow={true} className="border-t p-5 mx-auto my-10">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="md"
              variant="rounded"
              src={story?.photoURL}
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  {story?.name}
                </Typography>
                <div className="5 flex items-center gap-x-3">
                  <p>Share with</p>
                  <FacebookShareButton disabled={user ? false : true}
                    url={`${import.meta.env.VITE_SITE_LINK}/story/${
                      story?._id
                    }`}
                  >
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton disabled={user ? false : true}
                    url={`${import.meta.env.VITE_SITE_LINK}/story/${
                      story?._id
                    }`}
                  >
                    <FacebookMessengerIcon size={40} round />
                  </FacebookMessengerShareButton>
                </div>
              </div>
              <Typography color="blue-gray">{story?.email}</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography variant="h3" >
                  My Visited Package :  {story.spotName}
            </Typography>
            <Typography variant="h5" className="my-2" >
                 Type : {story.tourType}
            </Typography>
            <Typography variant="h6" className="my-2" >
                   Really I was lucky to found the Guide <Chip variant="ghost" color="light-green" value={story.guideName} className="inline-block"/> he is The Great Guide I ever Seen
            </Typography>
            <Typography>
              {story?.experience ||
                `I found solution to all my design needs from Creative Tim. I
            use them as a freelancer in my hobby projects for fun! And its
            really affordable, very humble guys !!!`}
            </Typography>
            <div className="my-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
                {images.map(({ imagelink }, index) => (
                  <div key={index}>
                    <img
                      className="h-60 w-full max-w-full rounded-lg object-cover object-center"
                      src={imagelink}
                      alt="gallery-photo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default StoryDetails;
