import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} onClick={()=>{
        window.location.href=project.dep;
      }}/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon onClick={()=>{
        window.location.href = project.git;
      }}/>
    </div>
  );
}

export default ProjectDisplay;
