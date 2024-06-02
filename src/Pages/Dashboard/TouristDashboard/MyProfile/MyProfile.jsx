import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";

const MyProfile = () => {
  const user = useAuth();
  console.log(user);
  return (
    <div className="my-10">
      <Card className="md:w-10/12 mx-auto">
        <CardHeader floated={false} className="h-80 ">
          <img className="w-80 h-80 mx-auto rounded-full" src={user?.photoURL} alt={user?.displayName} />
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
          <form className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:my-2">
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
              <Input
                variant="outlined"
                label="Outlined"
                placeholder="Outlined"
              />
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
