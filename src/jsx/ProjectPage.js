import React from "react";
import {projectDetails} from "./projectDetails";
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
import { Carousel } from "react-bootstrap";

// TODO: Can this be refactored without breaking?
const getImage = (imageSrc) => (
  <div style={{
    width: "100%", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center" 
  }}>
    <img
      src={imageSrc}
      alt={imageSrc}
      style={{height: "60vh"}}
    />
  </div>
)

const getImages = (imageSrcs) => {
  console.log(imageSrcs.length)
  if (imageSrcs.length > 1) {
    return (
      <Carousel>
        {
          imageSrcs.map(imageSrc => {
            return (
              <Carousel.Item key={imageSrc}>
                {getImage(imageSrc)}
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    )
  } else {
    return getImage(imageSrcs[0])
  }
}

const images = {
  "parachute": getImages([parachute]),
  "worktop": getImages([workTop]),
  "stage": getImages([stage]),
  "kitchen": getImages([kitchenClose, woodlandKitchen]),
  "sandpitcover": getImages([sandpitCover, sandpitCoverOff, sandpitCoverOn]),
  "logoven": getImages([logOven]),
  "bench": getImages([bench]),
  "bootrack": getImages([bootRack]), 
  "sink": getImages([sink, sinkAgain]),
  "firecircle": getImages([fireCircle]), 
}

const ProjectPage = ({match}) => {
  const {projectName} = match.params;
  const maxWidth = "800px";

  const details = projectDetails[projectName];
  const { title, price, shortDescription, longDescription } = details;

  // TODO: Can scroll through images
  return <div 
    style={{
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  > 
    <div style={{maxWidth: maxWidth}}>
    {images[projectName]}
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
        <p>
          {longDescription}
        </p>
      </div>
    </div>
  </div>
}

export default ProjectPage;