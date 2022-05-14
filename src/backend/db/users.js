import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Akshat",
    lastName: "Gupta",
    username: "akshat",
    password: "akshat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
   {
    _id: uuid(),
    firstName: "Dhruv",
    username: "TheBestDhruv",
    password: "Dhruv123",
    profilePhoto:
      "https://pbs.twimg.com/profile_images/1464407388228780036/NFY5UUPn_200x200.jpg",
    coverPhoto:
      "https://pbs.twimg.com/profile_banners/4025742919/1637987458/1080x360",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
