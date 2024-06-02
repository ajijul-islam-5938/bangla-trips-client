import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../../Provider/AuthProvider";
import { Divider } from "@mui/material";
import Swal from "sweetalert2";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-white">
      <Typography
        as={NavLink}
        to="/"
        variant="small"
        // color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as={NavLink}
        to="/community"
        variant="small"
        // color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Community
        </ListItem>
      </Typography>
      <Typography
        as={NavLink}
        to="/blogs"
        variant="small"
        // color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Blogs</ListItem>
      </Typography>
      <Typography
        as={NavLink}
        to="/about-us"
        variant="small"
        // color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
      <Typography
        as={NavLink}
        to="/contact-us"
        variant="small"
        // color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(res => {
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Logged Out",
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
    <Navbar className="fixed bg-[rgba(0,0,0,0.1)] shadow-none backdrop-blur w-full border-none rounded-none z-[999] top-0 left-0 right-0 mx-auto  px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-white"
        >
          BanglaTrips
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="absolute right-12 md:right-5">
          {user && (
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
              <MenuHandler>
                <Button
                  variant="text"
                  // color="blue-gray"
                  className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="border border-gray-900 p-0.5"
                    src={user.photoURL}
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3 w-3 transition-transform ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="px-5">
                <div
                  className="text-center font-semibold space-y-2 my-5"
                  aria-readonly
                >
                  <h1 className="text-xl">{user.displayName}</h1>
                  <p>{user.email}</p>
                </div>
                <Divider />
                <List className="">
                  <Typography
                    as={NavLink}
                    to="/dashboard"
                    variant="small"
                    // color="blue-gray"
                    className="font-medium px-5rounded "
                  >
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                      Dashboard
                    </ListItem>
                  </Typography>
                  <Typography
                    as={NavLink}
                    to="/dashboard/my-bookings"
                    variant="small"
                    // color="blue-gray"
                    className="font-medium px-5rounded "
                  >
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                      Offer Announcements
                    </ListItem>
                  </Typography>
                  <Typography
                    className="px-5 py-1 my-2 rounded text-red-500 bg-red-50"
                    onClick={handleLogout}
                  >
                    Logout
                  </Typography>
                </List>
              </MenuList>
            </Menu>
          )}
        </div>
        <div className="hidden gap-2 lg:flex">
          {!user && (
            <Typography
              as={Link}
              to="/sign-in"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            >
              <Button variant="gradient" size="sm">
                Sign In
              </Button>
            </Typography>
          )}
        </div>
        <IconButton
          variant="text"
          // color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {!user && (
          <div className="grid w-full items-center gap-2 lg:hidden">
            <Typography as={Link} to="/sign-in" fullWidth>
              <Button variant="gradient" size="sm" fullWidth>
                Sign In
              </Button>
            </Typography>
          </div>
        )}
      </Collapse>
    </Navbar>
  );
}
