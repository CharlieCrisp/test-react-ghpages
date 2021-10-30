import React, {useState} from "react";
import beforeAndAfter from "./img/projects/Forest_School_Woodland_BeforeAndAfter.JPG";

import { Link } from "react-router-dom";

const imagesWithLinks = {
    [beforeAndAfter]: "shelter"
}

export const wrapWithLinkIfNeeded = (children, clickedImage) => {
  if (!(clickedImage in imagesWithLinks)) {
      return children;
  } else {
      const link = `${process.env.PUBLIC_URL}/projects/${imagesWithLinks[clickedImage]}`;
      return (
          <Link to={link} style={{color: "#aaaaaa"}}>
              <div className="modal-zoomer" href={link}>
              {children}
              <div id="modal-image-content-description">Click to see more...</div>:
              </div>
          </Link>
      )
  }
}


export const useImagePopup = () => {
  const [clickedImage, setClickedImage] = useState(null);
  const image = wrapWithLinkIfNeeded(
      <img className="modal-content-clickable" id="modal-image-clickable" src={clickedImage} />,
      clickedImage 
  );

  return [
      <div>
          <div id="myModal" className="modal" style={clickedImage !== null ? {display: "block"} : {}} onClick={() => setClickedImage(null)}>
              {image}
              <span className="closeClickable" id="closeClickable" onClick={() => setClickedImage(null)}>&times;</span>
          </div>
      </div>,
      setClickedImage
  ]
}