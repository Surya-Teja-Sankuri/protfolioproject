import contact from "../assets/projects/contact-management.png";
import cnature from "../assets/projects/cnature-logo.jpg";
import pgLife from "../assets/projects/pg-life.jpg";
import portfolio from "../assets/projects/portfolio.png";

export default [
  {
    id: 1,
    title: "cNature Mobile Application",
    Technologies: ["React Native", "Firebase"],
    description:
      "A React Native app with Firebase Firestore and Auth, To store your flora and fauna observations, With ease and fun, Share them with the world, and make new connections.",
    image: cnature,
    github_link: "https://github.com/Surya-Teja-Sankuri/cnapp",
  },
  {
    id: 2,
    title: "Portfolio",
    Technologies: ["React.js"],
    description: "This is what you are looking right now",
    image: portfolio,
    github_link: "https://github.com/Surya-Teja-Sankuri/portfolioproject",
  },
  {
    id: 3,
    title: "Contact Management",
    Technologies: ["React.js", "node.js", "Express.js", "MongoDB"],
    description:
      "This application provide the facility of storing contact information when user is logged in and can perform CRUD operations.",
    image: contact,
    github_link:
      "https://github.com/Surya-Teja-Sankuri/Contact-Management-Frontend",
  },
  {
    id: 4,
    title: "PG life Web App",
    Technologies: ["React.js", "Mongo", "backend"],
    description: `A professional web app for finding PG hostels near you,
    With user login for easy access and personalized search results.
    View hostel details, including location, facilities, and pricing,
    And make an informed decision about your next home.`,
    image: pgLife,
    github_link: "https://github.com/Surya-Teja-Sankuri/pglife_project",
  },
];
