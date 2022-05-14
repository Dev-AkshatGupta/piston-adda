import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "I felt that commerce was not a good career option for me and I invested my ery precious years In it though I dont't regret for choosing commerce but I realized How much system is not well managed that a student falls to choose properly would love to work in the direction for the betterment of this thing ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akshat",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1515328412885610503/8LHDJf1a_200x200.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "49eb98ce-6456-4f21-8a68-24c12101e834",
        content: " you man",
        username: "akshat",
        userPhoto:
          "https://pbs.twimg.com/profile_images/1515328412885610503/8LHDJf1a_200x200.jpg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: "2022-05-13T23:15:24+05:30",
        updatedAt: "2022-05-13T23:15:24+05:30",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The Ministry of Home Affairs has accorded ‘Y’ Scale of security to Bharatiya Janata Party Tamil Nadu president K. Annamalai. According to police sources, he would be protected round-the-clock by armed Personal Security Officers drawn from the Central Reserve Police Force (CRPF) and the Security Branch CID of the State police.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userPhoto:
      "https://pbs.twimg.com/profile_images/1516014184969826305/a_7EKaso_200x200.jpg",
    username: "@annamalai_k",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Security cover for Mr. Annamalai was enhanced after a detailed assessment of his threat perception. Intelligence agencies gathered the level of threat to the former IPS officer-turned-politician in the recent weeks and prepared a report, the sources said. Last month, petrol-filled bottles, the wick in one of them lit,",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userPhoto:
      "https://pbs.twimg.com/profile_images/1426015031360049153/QYd08TfK_200x200.jpg",
    username: "@jsaideepak",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "government had scaled down the security of many protectees after their threat perceptions were assessed by the Security Review Committee about three months ago. The security of former Chief Minister Edappadi K. Palaniswami was also downgraded from Z-Plus cover (that he was provided as Chief Minister) to Y-Plus with CRPF cover, the sources added. As BJP’s State vice-president Mr. Annamalai was given Y-Plus security cover in February 2021 following suspected threat to his life from extremist organisations. The scale was later reduced to ‘X’ Scale.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userPhoto:
      "https://pbs.twimg.com/profile_images/1512802297717342217/av29k04g_200x200.jpg",
    username: "@ARanganathan72",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userPhoto:
      "https://pbs.twimg.com/profile_images/1514922147365330948/qeCXYlZR_200x200.jpg",
    username: "@Iyervval",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
