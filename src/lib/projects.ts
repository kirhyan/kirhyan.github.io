import swordImage from "../assets/images/3D_Sword.jpg";
import ravenclawImage from "../assets/images/3D_Ravenclaw.jpg";
import pumpkinImage from "../assets/images/3D_Pumpkin.jpg";

export interface Project {
  title: string;
  imageUrl: string;
  content: string;
}

const projectJS: Project[] = [
  {
    title: "Space News",
    imageUrl:
      "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/09/maiaspace-kourou.jpg",
    content: "Articles about space",
  },
  {
    title: "Quiz App",
    content: "Is a quiz app with some questions and their correct answer",
  },
  {
    title: "Video Games Api",
    content: "A web to find the best videogames deals",
  },
  {
    title: "Book Tracker",
    content: "A web to save your read and want to read",
  },
];

export const project3D: Project[] = [
  {
    title: "World of Warcraft Artifact",
    imageUrl: swordImage,
    content:
      "Death Kmight Artifact Sword Fan Art in 3D from the videogame World of Warcraft",
  },
  {
    title: "Ravenclaw Common Room",
    imageUrl: ravenclawImage,
    content: "3D Ravenclaw Common Room",
  },
  {
    title: "Pumpkin House",
    imageUrl: pumpkinImage,
    content: "Cute Pumpking House for the videogame Kiku's Magic Hat",
  },
];

export default projectJS;
