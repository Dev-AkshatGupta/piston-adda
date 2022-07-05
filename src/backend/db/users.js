import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    id: "8f9a9720-4c73-44b2-a4cf-71482e794d0e",
    firstName: "Akshat",
    username: "akshat",
    password: "akshat",
    bio: "I m the coolest man",
    profilePhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_images/1515328412885610503/8LHDJf1a_200x200.jpg",
    },
    coverPhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_banners/1248318243963461632/1654966206/600x200",
    },

    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
    liked: [],
  },
  {
    _id: uuid(),
    id: "362be157-f9f3-4c6d-a2a5-386e7c852c34",
    firstName: "Abhijit Iyer-Mitra",
    username: "Iyervval",
    password: "Iyervval",
    bio: "I m an national analyst",
    profilePhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_images/1514922147365330948/qeCXYlZR_200x200.jpg",
    },
    coverPhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_banners/1963945884/1622831073/600x200",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
    liked: [],
  },
  {
    _id: uuid(),
    id: "4675f040-bebf-45ba-9c9c-f551587412f6",
    bio: "Tamil Nadu BJP head",
    firstName: "K.Annamalai",
    username: "annamalai_k",
    password: "annamalai_k",
    profilePhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_images/1516014184969826305/a_7EKaso_200x200.jpg",
    },
    coverPhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_banners/61121030/1598621775/600x200",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    id: "52cf33fd-8665-4771-a940-0ccb9b5f433d",
    bio: "Supreme Court advocate",
    firstName: "Sai Deepak J",
    username: "jsaideepak",
    password: "jsaideepak",
    profilePhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_images/1426015031360049153/QYd08TfK_200x200.jpg",
    },
    coverPhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_banners/39234827/1626241043/600x200",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    id: "a7fe04ea-3740-4b39-bdf8-784fa5dc5445",
    firstName: "Anand Ranganathan",
    username: "ARanganathan72",
    password: "Anand123",
    bio: "Professor in JNU",
    profilePhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_images/1512802297717342217/av29k04g_200x200.jpg",
    },
    coverPhoto: {
      default: "",
      chosen:
        "https://pbs.twimg.com/profile_banners/1344897174/1647848393/600x200",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
];
