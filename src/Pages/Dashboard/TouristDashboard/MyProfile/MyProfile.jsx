import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";
import useAxios from "../../../../Hooks/useAxios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyProfile = () => {
  const user = useAuth();
  //   console.log(user);
  const { axiosSecure } = useAxios();

  const [guide, setGuide] = useState({});

  const handleStory = event => {
    event.preventDefault();
    const storyInfo = {
      spotName: event.target.spotName.value,
      tourType: event.target.tourType.value,
      email: user.email,
      experience: event.target.experience.value,
      photoURL: user.photoURL,
      images: [
        event.target.image1.value,
        event.target.image2.value,
        event.target.image3.value,
        event.target.image4.value,
      ],
      guideName: guide.name,
      name: user.displayName,
      date: event.target.date.value,
    };

    Swal.fire({
      title: "Are you sure?",
      text: `You want to Add the story ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .post("/story", storyInfo)
          .then(res => {
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: "The Package Booked For You",
            });
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

  const { data: guides, refetch } = useQuery({
    queryKey: "guides",
    queryFn: async () => {
      const res = await axiosSecure.get("/guides");
      return res.data;
    },
  });
  return (
    <div className="my-10">
      <Card className="md:w-10/12 mx-auto">
        <CardHeader floated={false} className="h-80 ">
          <img
            className="w-80 h-80 mx-auto rounded-full"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {user?.displayName}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Email : {user?.email}
          </Typography>
        </CardBody>
        <CardFooter className="">
          <h1 className="text-center font-semibold my-5 mx-auto">
            Add your Own Story
          </h1>
          <form onSubmit={handleStory} className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:my-2">
              <Input
                variant="outlined"
                label="Spot Name"
                name="spotName"
                required
              />
              <Input
                variant="outlined"
                label="Tour Type"
                // placeholder="Outlined"
                name="tourType"
                required
              />

              <Select
                onChange={e => setGuide(e)}
                label="Select Guide"
                name="guide"
                required
              >
                {guides?.map(guide => (
                  <Option
                    value={{ email: guide.email, name: guide.name }}
                    key={guide._id}
                  >
                    {guide.name}
                  </Option>
                ))}
              </Select>
              <Input
                type="date"
                variant="outlined"
                label="Tour Date"
                // placeholder="Outlined"
                name="date"
                required
              />
              <Input
                variant="outlined"
                label="image 1"
                required
                // placeholder="Outlined"
                name="image1"
              />
              <Input
                variant="outlined"
                label="Image 2"
                // placeholder="Outlined"
                name="image2"
                required
              />
              <Input
                variant="outlined"
                label="Image 3"
                // placeholder="Outlined"
                name="image3"
                required
              />
              <Input
                variant="outlined"
                label="Image 4"
                // placeholder="Outlined"
                name="image4"
                required
              />
              <div className="md:col-span-2">
                <Textarea
                  variant="outlined"
                  label="Share Your Experience"
                  name="experience"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="gradient"
              color="red"
              className="bg-red-500"
              fullWidth
            >
              Add Story
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyProfile;
