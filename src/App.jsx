import "./css/App.css";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import data from "./data/data";
import TechStack from "./components/TechStack";
import MyInfo from "./components/MyInfo";
import Fotter from "./components/Fotter";

function App() {
  const Projects = data.map((project) => {
    return <ProjectCard {...project} key={project.id} />;
  });

  return (
    <>
      {/* <div className="header-container">
        <div className="glitch-wrapper">
          <div className="glitch" data-glitch="Believe Code">
            Believe Code
          </div>
        </div>
      </div> */}
      <Navbar />
      <div className="container">
        <MyInfo />
        <TechStack />
        <h2 className="project-heading">Projects</h2>
        <div className="projects-container">{Projects}</div>
      </div>
      <Fotter />
    </>
  );
}

export default App;
