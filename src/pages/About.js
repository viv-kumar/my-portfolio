import React from "react";
import img from "../assets/kkkkk1 (1).jpg"
import "../styles/About.css";

function About(){
 return (
   <div>
     <div id="about-div">
       <div>
         <img src={img} />
       </div>
       <div>
         <p>
           Well-qualified Full-stack developer familiar with wide range of
           programming utilities and languages. Knowledgeable of backend and
           frontend development requirements. Handles any part of process with
           ease .Collaborative team player with excellent technical abilities
           offering hands-on experience of multiple project.
         </p>
       </div>
     </div>
   </div>
 );
}
export default About;
