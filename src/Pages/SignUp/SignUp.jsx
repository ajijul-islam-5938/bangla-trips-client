import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa6";
import loginImg from "../../assets/sign-up.avif";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import Auth from "../../firebase.config";
import useAxios from "../../Hooks/useAxios";

const SignUp = () => {
  const { axiosPublic } = useAxios();
  const { googleLogin, createUserWithEmailPassword, user } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Logged In",
        });

        const userInfo = {
          email: res.user.email,
          name: res.user.displayName,
          photoURL : res.user.photoURL 
        };

        axiosPublic.post(`/user`, userInfo);
      })
      .catch(err => {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  const handleSignUp = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoUrl = event.target.photoUrl.value;
    const password = event.target.password.value;

    createUserWithEmailPassword(email, password)
      .then(res => {
        updateProfile(Auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(res => {
            console.log(res);
            Swal.fire({
              icon: "success",
              title: "Success!!",
              text: "Created Successfully",
            });
            const userInfo = {
              email: Auth.currentUser.email,
              name: Auth.currentUser.displayName,
              role : "tourist"
            };

            axiosPublic.post(`/user`, userInfo);
          })
          .catch(err => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
            console.log(err);
          });
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className=" hidden md:flex">
          <img className="w-full h-full" src={loginImg} alt="" />
        </div>
        <div className="">
          <Card color="transparent" shadow={false}>
            <form
              onSubmit={handleSignUp}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="text-center my-10">
                <Typography variant="h4" color="blue-gray">
                  Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Nice to meet you! Enter your details to register.
                </Typography>
              </div>
              <div className="mb-1 flex flex-col gap-6">
                <Input type="text" label="Name" name="name" required />
                <Input type="email" label="Email" name="email" required />
                <Input type="twxt" label="PhotoURL" name="photoUrl" required />
                <Input type="password" label="Password" name="password" required />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button type="submit" className="mt-6" fullWidth>
                Sign Up
              </Button>
              <div className="my-5">
                <Divider>OR</Divider>
              </div>
              <div className="text-center">
                <IconButton
                  onClick={handleGoogleLogin}
                  className=" w-full text-2xl rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
                >
                  <FaGoogle />
                </IconButton>
              </div>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link to="/sign-In" className="font-medium text-gray-900">
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
