import swordImage from "../assets/images/3D_Sword.jpg";
import ravenclawImage from "../assets/images/3D_Ravenclaw.jpg";
import pumpkinImage from "../assets/images/3D_Pumpkin.jpg";
import quizAppImage from "../assets/images/quiz-app.png";
import videogameApiImage from "../assets/images/videogame-api.png";
import bookTrackerImage from "../assets/images/Book-tracker.png";
import spaceNewsImage from "../assets/images/space-news.png";

export interface Project {
  title: string;
  imageUrl: string;
  content: string;
  url: string;
}

const projectJS: Project[] = [
  {
    title: "Space News",
    imageUrl: spaceNewsImage,
    content: "Displaying space articles from spaceflightnewsapi.net",
    url: "https://github.com/kirhyan/space-news",
  },
  {
    title: "Quiz App",
    imageUrl: quizAppImage,
    content: "Quiz app with some questions and their correct answer",
    url: "https://github.com/kirhyan/quiz-app",
  },
  {
    title: "Video Games Api",
    imageUrl: videogameApiImage,
    content: "A website to find the best videogames deals",
    url: "https://github.com/kirhyan/react-video-games-api",
  },
  {
    title: "Book Tracker",
    imageUrl: bookTrackerImage,
    content: "Web to save your read and want to read",
    url: "https://github.com/kirhyan/book-tracker",
  },
];

export const project3D: Project[] = [
  {
    title: "World of Warcraft Artifact",
    imageUrl: swordImage,
    content: "DK Artifact Sword Fan Art from World of Warcraft",
    url: "https://www.artstation.com/artwork/zOAQBm",
  },
  {
    title: "Ravenclaw Common Room",
    imageUrl: ravenclawImage,
    content: "3D Ravenclaw Common Room",
    url: "https://www.artstation.com/artwork/J96kbm",
  },
  {
    title: "Pumpkin House",
    imageUrl: pumpkinImage,
    content: "Pumpking House for the videogame Kiku's Magic Hat",
    url: "https://www.artstation.com/artwork/LR0BDP,",
  },
];

export default projectJS;
