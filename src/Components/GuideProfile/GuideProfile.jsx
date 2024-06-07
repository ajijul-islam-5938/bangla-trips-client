import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Avatar,
  IconButton,
  Textarea,
  Rating,
} from "@material-tailwind/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import ReviewCard from "../ReviewCard/ReviewCard";
import { StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const GuideProfile = () => {
  const guide = useLoaderData();
  const [rating, setRating] = useState(0);
  const user = useAuth();
  const { axiosSecure, axiosPublic } = useAxios();
  const navigate = useNavigate();
  const handleComment = e => {
    e.preventDefault();
    if (!user) {
      return Swal.fire({
        title: "Want to Login???",
        text: `You must have login for comment!!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Book it!",
      }).then(result => {
        if (result.isConfirmed) {
          return navigate("/sign-in");
        }
      });
    }
    const commentInfo = {
      comment: e.target.comment.value,
      rating: rating,
      guideEmail: guide.email,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    };

    axiosSecure
      .post("/comment", commentInfo)
      .then(res => {
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Commented success",
        });
        refetch()
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  const { data: reviews,refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments?email=${guide.email}`);
      return res.data;
    },
  });
  return (
    <div className="my-20">
      <Card className="md:w-10/12 mx-auto border-t shadow-lg">
        <CardHeader
          floated={false}
          className="h-96 flex items-center justify-center border-t "
        >
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
      <div className="my-16">
        <SectionTitle title="tourist review" />
        <div className="my-10 w-10/12 mx-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper py-20"
          >
            {reviews?.map(review => (
              <SwiperSlide key={review._id}>
                <ReviewCard review={review}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="my-20">
          <SectionTitle title="Add Your Review" />
          <Card className="my-20 w-10/12 mx-auto shadow-lg border-t">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8 px-5"
            >
              <Avatar
                size="lg"
                variant="circular"
                src={user?.photoURL}
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {user?.displayName}
                  </Typography>
                  <div className="flex items-center gap-0">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={rating}
                      onChange={setRating}
                    />
                  </div>
                </div>
                <Typography color="blue-gray">{user?.email}</Typography>
              </div>
            </CardHeader>
            <CardBody>
              <form
                onSubmit={handleComment}
                className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2"
              >
                <div className="flex">
                  <IconButton variant="text" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </IconButton>
                  <IconButton variant="text" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>
                  </IconButton>
                </div>
                <Textarea
                  rows={1}
                  resize={true}
                  placeholder="Your Message"
                  className="min-h-full !border-0 focus:border-transparent focus:bg-white"
                  containerProps={{
                    className: "grid h-full",
                  }}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  name="comment"
                />
                <div>
                  <IconButton
                    type="submit"
                    variant="text"
                    className="rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="blue"
                      strokeWidth={2}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </IconButton>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
