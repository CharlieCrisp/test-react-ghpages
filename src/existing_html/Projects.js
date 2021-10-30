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


const Projects = () => {
    return (
        <div>
            <div class="container-fluid hero-container"></div>
            <div class="description-container">
            <div class="quote-title">Projects</div><br />
            <p class="quote-text">
                Here are some of the <span class="pop">learning resources</span> we've been building for our clients around Tunbridge Wells.<br />
                <span class="pop">Like what you see?</span> Get in contact to get a <span class="pop">bespoke quote!</span><br />
                <a href="mailto:info@woodlandventure.co.uk">info@woodlandventure.co.uk</a>
            </p>
            </div>
            <div class="panel-container">
            <div class="col-md-4">
                <div class="product-panel">
                <h3>Outdoor Shelter</h3>
                <img id="shelter" src={beforeAndAfter} class="panel-image-clickable"></img>
                </div>
                <div class="product-panel">
                <h3>Parachute</h3>
                <img src={parachute} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Mud Kitchen - Work Top</h3>
                <img src={workTop} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Stage</h3>
                <img src={stage} class="panel-image"></img>
                </div>
                
                <div class="product-panel">
                <h3>Forest School Kitchen</h3>
                <img src={woodlandKitchen} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Sandpit with cover off</h3>
                <img src={sandpitCoverOff} class="panel-image"></img>
                </div>
            </div>


            <div class="col-md-4">
                <div class="product-panel">
                    <h3>Fire Circle</h3>
                    <img src={fireCircle} class="panel-image" />
                </div>
                <div class="product-panel">
                <h3>Fencing and Chalkboard</h3>
                <img src={chalkboard} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Mud Kitchen - Sink</h3>
                <img src={sink} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Sandpit Cover</h3>
                <img src={sandpitCover} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Forest School Kitchen</h3>
                <img src={kitchenClose} class="panel-image"></img>
                </div>
            </div>


            <div class="col-md-4">
                <div class="product-panel">
                <h3>Log Oven</h3>
                <img src={logOven} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Work Bench</h3>
                <img src={bench} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Class Boot Storage</h3>
                <img src={bootRack} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Forest School Kitchen</h3>
                <img src={sinkAgain} class="panel-image"></img>
                </div>
                <div class="product-panel">
                <h3>Sandpit with cover on</h3>
                <img src={sandpitCoverOn} class="panel-image"></img>
                </div>
            </div>
            </div>
       </div>
    )
}

export default Projects;