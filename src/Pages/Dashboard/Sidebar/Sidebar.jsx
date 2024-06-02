import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Card className="md:fixed h-full md:h-[calc(100vh-2rem)] w-full md:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List className="">
          <Typography
            as={NavLink}
            to="/dashboard/my-profile"
            variant="small"
            // color="blue-gray"
            className="font-medium"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              My Profile
            </ListItem>
          </Typography>
          <Typography
            as={NavLink}
            to="/dashboard/my-bookings"
            variant="small"
            // color="blue-gray"
            className="font-medium"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              My Bookings
            </ListItem>
          </Typography>
          <Typography
            as={NavLink}
            to="/dashboard/my-wishlist"
            variant="small"
            // color="blue-gray"
            className="font-medium"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              My WishList
            </ListItem>
          </Typography>
          <Typography
            as={NavLink}
            to="/dashboard/request-to-admin"
            variant="small"
            // color="blue-gray"
            className="font-medium"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              Request To Admin
            </ListItem>
          </Typography>
        </List>
      </Card>
    </div>
  );
};

export default Sidebar;
