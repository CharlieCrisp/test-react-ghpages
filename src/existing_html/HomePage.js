import React from "react";
import logoStacked from "../img/Logo_Stacked.png";

const HomePage = () => {
  return (
    <div>
      <div className="overflow">
        <div className="container-fluid top-item" >
            <div className="row quote_row">
                <div className="panel">
                    <img src={logoStacked} className="logo_panel" />
                </div>
            </div>
        </div>
        <div className="container-fluid quote_container">
            <div className="row">
                <div className="main_quote">
                    <span className="pop">Woodland Venture</span> provides <span className="pop">Forest School</span> and outdoor experiences in <span className="pop">Tunbridge Wells, Kent and East Sussex</span>. <br />
                    Whether you are a <span className="pop">school, parent, university or business</span>, we've got something for you!
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <a className="anchor" id="schools"></a>
                <h1 className="large-h1">Schools</h1>
            </div>
            <div className="row info-row">
                <div className="col-sm-6 info-col-less">
                    <div className="sch1-picture-col picture-col" id="sch1pic"></div>
                </div>
                <div className="col-sm-6 info-col-less" id="sch1">
                    <h1 className="half-image-text"> Forest Schools</h1><br/>
                    <h2 className="half-image-text">What is a Forest School</h2>
                    <p className="half-image-text-body">
                        <i>
                            “Forest School is an inspirational process that offers ALL learners regular opportunities
                            to achieve, develop confidence and self-esteem, through hands on learning experiences
                            in a local woodland.
                            Forest School is a specialised approach that sits within and compliments
                            the wider context of outdoor learning.”
                        </i>
                    </p> <br/>
                    <h2 className="half-image-text">Team Building</h2>
                    <p className="half-image-text-body">
                        We have developed a series of team building activities which will develop:
                        group communication skills, planning, analysing, persevering and resilience.<br/><br/>
                        These activities can be incorporated into a bespoke program for your school
                        or run as a one off day for children or staff.
                    </p>
                </div>
            </div>
            <div className="row info-row">
                <div className="col-sm-6 col-sm-pull-6 info-col-less" id="sch2">
                    <h2 className="half-image-text">What can Woodland Venture Forest School offer you?</h2>
                    <ul className="half-image-text-body">
                        <li>A bespoke program at Priest’s Wood in Langton Green</li>
                        <li>A bespoke program at your own site, subject to a suitability check</li>
                        <li>A one off bespoke session</li>
                        <li>Construction of a fire circle</li>
                        <li>Help in securing outdoor learning spaces</li>
                    </ul><br/>
                    <h2 className="half-image-text">What do you get for your money?</h2>
                    <p className="half-image-text-body">
                        Woodland Venture is headed up by a qualified teacher with 13 years experience in schools.
                    </p>
                    <ul className="half-image-text-body">
                        <li>Fully Trained Forest School Leader (Level 3)</li>
                        <li>Enhanced DBS checked</li>
                        <li>Independent insurance</li>
                        <li>All reasonable recourses for sessions including tools and hot chocolate are provided</li>
                    </ul>
                    <b className="half-image-text-body">
                        Download our Schools Brochure for further information <a href={`${process.env.PUBLIC_URL}/pdf/Schools_Brochure.pdf`} target="blank">here</a>.
                    </b>
                </div>
                <div className="col-sm-6 col-sm-push-6 info-col-less">
                    <div className="sch2-picture-col picture-col" id="sch2pic"></div>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="image-row-1"></div> 
        
        <div className="container-fluid">
            <div className="row info-row">
                <div className="col-sm-6 col-sm-pull-6 info-col" id="project">
                    <a className="anchor" id="projects"></a>
                    <h1 className="half-image-text">Projects</h1>
                    <p className="half-image-text-body">
                        Here at Woodland Venture, we specialise in creating special outdoor spaces. 
                        Here are some of the spaces that we have built. <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /><br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col-sm-6 col-sm-push-6 info-col">
                    <div className="project-picture-col picture-col" id="projectpic"></div>
                </div>
            </div>
        </div>
        <div className="container-fluid group-container">
            <div className="row info-row">
                <div className="col-sm-6 info-col">
                    <div className="group-picture-col picture-col" id="grouppic"></div>
                </div>
                <div className="col-sm-6 info-col" id="group">
                    <a className="anchor" id="groups"></a>
                    <h1 className="half-image-text">Groups</h1>
                    <p className="half-image-text-body">
                        Friendship groups/family groups/stag and hen parties and more!<br/><br/>
                        Looking to spend some quality time together in a different way?
                        We might just have exactly what you are looking for!<br/><br/>
                        With your friends around you in a relaxed and tranquil setting, learn some new skills
                        or brush up on some old ones.<br/><br/>
                        We can teach you a range of bush craft skills such as:
                    </p>
                    <ul className="half-image-text-body">
                        <li>Lighting fires using flint and steel, friction and other methods</li>
                        <li>Whittling a piece of wood into a tool or piece of art work</li>
                        <li>Building dens from natural resources</li>
                        <li>Sleeping out in hammocks</li>
                        <li>Cooking over open fires</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container-fluid panel-borderless">
            <div className="row info-row">
                <div className="col-sm-6 col-sm-pull-6 info-col" id="corp">
                    <a className="anchor" id="corporate"></a>
                    <h1 className="half-image-text">Corporate Team Building</h1>
                    <p className="half-image-text-body">
                        Do you want a relaxed and mindful alternative for your staff team building exercises?<br/><br/>
                        How about sending your team out on a day where they can focus on themselves and
                        rediscover what their passions are and what drives them? <br/><br/>
                        Most importantly, we can help them to reconnect with their colleagues, develop stronger bonds, and
                        discover the skills and strengths of others.<br/><br/>
                        These activities will develop: group communication skills,
                        planning, analysing, persevering and resilience.<br/><br/>
                        If you are interested please get in touch and we can discuss a bespoke program that will
                        focus on your company's unique requirements.
                    </p>
                </div>
                <div className="col-sm-6 col-sm-push-6 info-col">
                    <div className="corp-picture-col picture-col" id="corppic"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;