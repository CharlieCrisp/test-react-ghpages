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
import { useImagePopup } from "../projectLinkwrapper";



const Projects = () => {
    const [modal, setClickedImage] = useImagePopup();


    return (
        <div>
            {modal}
            <div className="container-fluid hero-container"></div>
            <div className="description-container">
            <div className="quote-title">Projects</div><br />
            <p className="quote-text">
                Here are some of the <span className="pop">learning resources</span> we've been building for our clients around Tunbridge Wells.<br />
                <span className="pop">Like what you see?</span> Get in contact to get a <span className="pop">bespoke quote!</span><br />
                <a href="mailto:info@woodlandventure.co.uk">info@woodlandventure.co.uk</a>
            </p>
            </div>
            <div className="panel-container">
            <div className="col-md-4">
                <div className="product-panel" onClick={() => setClickedImage(beforeAndAfter)}>
                <h3>Outdoor Shelter</h3>
                <img id="shelter" src={beforeAndAfter} className="panel-image-clickable"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(parachute)}>
                <h3>Parachute</h3>
                <img src={parachute} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(workTop)}>
                <h3>Mud Kitchen - Work Top</h3>
                <img src={workTop} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(stage)}>
                <h3>Stage</h3>
                <img src={stage} className="panel-image"></img>
                </div>
                
                <div className="product-panel" onClick={() => setClickedImage(woodlandKitchen)}>
                <h3>Forest School Kitchen</h3>
                <img src={woodlandKitchen} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(sandpitCoverOff)}>
                <h3>Sandpit with cover off</h3>
                <img src={sandpitCoverOff} className="panel-image"></img>
                </div>
            </div>


            <div className="col-md-4">
                <div className="product-panel" onClick={() => setClickedImage(fireCircle)}>
                    <h3>Fire Circle</h3>
                    <img src={fireCircle} className="panel-image" />
                </div>
                <div className="product-panel" onClick={() => setClickedImage(chalkboard)}>
                <h3>Fencing and Chalkboard</h3>
                <img src={chalkboard} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(sink)}>
                <h3>Mud Kitchen - Sink</h3>
                <img src={sink} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(sandpitCover)}>
                <h3>Sandpit Cover</h3>
                <img src={sandpitCover} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(kitchenClose)}>
                <h3>Forest School Kitchen</h3>
                <img src={kitchenClose} className="panel-image"></img>
                </div>
            </div>


            <div className="col-md-4">
                <div className="product-panel" onClick={() => setClickedImage(logOven)}>
                <h3>Log Oven</h3>
                <img src={logOven} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(bench)}>
                <h3>Work Bench</h3>
                <img src={bench} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(bootRack)}>
                <h3>Boot Storage</h3>
                <img src={bootRack} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(sinkAgain)}>
                <h3>Forest School Kitchen</h3>
                <img src={sinkAgain} className="panel-image"></img>
                </div>
                <div className="product-panel" onClick={() => setClickedImage(sandpitCoverOn)}>
                <h3>Sandpit with cover on</h3>
                <img src={sandpitCoverOn} className="panel-image"></img>
                </div>
            </div>
            </div>
       </div>
    )
}

export default Projects;