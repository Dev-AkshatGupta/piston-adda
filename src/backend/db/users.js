import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  
  {
    _id: uuid(),
    id:1,
    firstName: "Akshat",
    lastName: "Gupta",
    username: "akshat",
    password: "akshat",
      profilePhoto:{
      default:"",
      chosen:"https://pbs.twimg.com/profile_images/1515328412885610503/8LHDJf1a_400x400.jpg",},
       coverPhoto:
     {default:"" ,chosen:"https://pbs.twimg.com/profile_banners/1248318243963461632/1637937949/600x200",},
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
   {
    _id: uuid(),
    id:2,
    firstName: "Abhijit Iyer-Mitra",
    username: "@Iyervval",
    password: "@Iyervval",
    profilePhoto:{
      default:"",
      chosen:"https://pbs.twimg.com/profile_images/1514922147365330948/qeCXYlZR_400x400.jpg",},
    coverPhoto:
     {default:"" ,chosen:"https://pbs.twimg.com/profile_banners/1963945884/1622831073/600x200",},
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
   {
    _id: uuid(),
    id:3,
    firstName: "K.Annamalai",
    username: "@annamalai_k",
    password: "@annamalai_k",
    profilePhoto:{
      default:"",
      chosen:"https://pbs.twimg.com/profile_images/1516014184969826305/a_7EKaso_400x400.jpg",},
    coverPhoto:
     {default:"" ,chosen:"https://pbs.twimg.com/profile_banners/61121030/1598621775/600x200",},
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
   {
    _id: uuid(),
    id:4,
    firstName: "Sai Deepak J",
    username: "@jsaideepak",
    password: "@jsaideepak",
    profilePhoto:{
      default:"",
      chosen:"https://pbs.twimg.com/profile_images/1426015031360049153/QYd08TfK_400x400.jpg",},
    coverPhoto:
     {default:"" ,chosen:"https://pbs.twimg.com/profile_banners/39234827/1626241043/600x200",},
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
   {
    _id: uuid(),
    id:5,
    firstName: "Dhruv",
    username: "TheBestDhruv",
    password: "Dhruv123",
    profilePhoto:{
      default:"",
      chosen:"https://pbs.twimg.com/profile_images/1464407388228780036/NFY5UUPn_200x200.jpg",},
    coverPhoto:
     {default:"" ,chosen:"https://pbs.twimg.com/profile_banners/4025742919/1637987458/1080x360",},
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
