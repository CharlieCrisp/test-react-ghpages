import React from "react";
import fsa from "../img/fsa.jpg";
import facebook from "../img/facebook.png";
import instagram from "../img/Instagram_Logo.png";

const Footer = () => {
    return (
        <div className="row icon-row">
            <div className="col-sm-4">
                <a href="http://www.forestschoolassociation.org/" target="blank">
                    <img src={fsa} className="fsa" />
                </a>
            </div>
            <div className="col-sm-4 col-sm-offset-1 link">
                <a href="https://www.facebook.com/woodlandventure/" target="blank">
                    <img src={facebook} className="icon" />
                </a>
                <a href="https://www.instagram.com/woodlandventure" target="blank">
                    <img src={instagram} className="icon" />
                </a>
            </div>
            <div className="col-sm-4 col-sm-offset-1 vert-center">
                Website developed by <a target="blank" href="https://www.linkedin.com/in/charlie-crisp-88aab5122/">Charlie Crisp</a>
            </div>
        </div>
    );
}

export default Footer;