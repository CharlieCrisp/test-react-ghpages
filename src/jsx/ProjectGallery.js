import React from "react";
import beforeAndAfter from "../img/projects/Forest_School_Woodland_BeforeAndAfter.JPG";
import parachute from "../img/projects/Forest_School_Woodland_Parachute.JPG";
import workTop from "../img/projects/Forest_School_Woodland_Work_Top.JPG";
import stage from "../img/projects/Forest_School_Woodland_Stage.JPG";
import woodlandKitchen from "../img/projects/Forest_School_Woodland_Kitchen_2020.jpg";
import sandpitCoverOff from "../img/projects/Forest_School_Woodland_Sandpit_Cover_Off.jpg";
import fireCircle from "../img/projects/Forest_School_Woodland_Fire_Circle.JPG";
import chalkboard from "../img/projects/Forest_School_Woodland_Chalkboard.JPG";
import sink from "../img/projects/Forest_School_Woodland_Sink.JPG";
import sandpitCover from "../img/projects/Forest_School_Woodland_Sandpit_Cover.JPG";
import kitchenClose from "../img/projects/Forest_School_Woodland_Kitchen_Close.jpg";
import logOven from "../img/projects/Forest_School_Woodland_Log_Oven.JPG";
import bench from "../img/projects/Forest_School_Woodland_Bench.JPG";
import bootRack from "../img/projects/Forest_School_Woodland_Boot_Rack.jpg";
import sinkAgain from "../img/projects/Forest_School_Woodland_Kitchen_Sink.jpg";
import sandpitCoverOn from "../img/projects/Forest_School_Woodland_Sandpit_Cover_On.jpg";
import { projectDetails } from "./projectDetails";


import { Link } from "react-router-dom";

const Project = ({ imgName, name }) => {
  const maxWidth = "300px";
  const details = projectDetails[name];
  const {price, shortDescription, title} = details;

  return (
    <Link to={`${process.env.PUBLIC_URL}/projectgallery/${name}`} style={{ textDecoration: 'none' }}>
      <div 
        style={{
          maxWidth: maxWidth, 
          marginBottom: "20px", 
          backgroundColor: "#eeeeee"
        }}
      >
        <div 
          style={{
            width: "300px",
            height: "300px", 
            backgroundImage: `url(${imgName})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}
        />
        <div 
          style={{
            padding: "10px",
            color: "#333333",
          }}
        >
          <h2>{title}</h2>
          <h4>Price: {price}</h4>
          <p>
            {shortDescription}
          </p>
        </div>
      </div>
    </Link>
  )
}

const ProjectsGallery = () => {
  return (
    <div>
      <div className="container-fluid hero-container"></div>
      <div className="description-container">
        <div className="quote-title">Projects</div><br />
        <p className="quote-text">
            Here are some of the <span className="pop">learning resources</span> we've been building for our clients around Tunbridge Wells.<br />
            <span className="pop">Like what you see?</span> Get in contact to get a <span className="pop">bespoke quote!</span><br />
            <a href="mailto:info@woodlandventure.co.uk">info@woodlandventure.co.uk</a>
        </p>
      </div>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        <Project imgName={parachute} name="parachute"/>
        <Project name="worktop" imgName={workTop}/>
        <Project name="stage" imgName={stage}/>
        <Project name="kitchen" imgName={woodlandKitchen}/>
        <Project name="sandpitcover" imgName={sandpitCover}/>
        <Project name="firecircle" imgName={fireCircle}/>
        <Project name="sink" imgName={sink}/>
      </div>
    </div>
  )
}

export default ProjectsGallery;