import React from "react";
import dan from "../img/Woodland_Venture_Dan_Headshot.jpg"


const getYearsBetween = (start, stop) => {
    const dob = new Date(start).getTime();
    const dateToCompare = new Date(stop).getTime();
    const age = (dateToCompare - dob) / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(age);   
}

const getOldestAge = (now) => {
    const birthday = new Date(1997, 6, 7);
    return getYearsBetween(birthday, now);
}

const getYoungestAge = (now) => {
    const birthday = new Date(2011, 8, 16);
    return getYearsBetween(birthday, now);
}

const getYearsTeaching = (now) => {
    const firstDay = new Date(2003, 1, 1);
    return getYearsBetween(firstDay, now);
}

const About = () => {
    const now = new Date();

    return (
        <div className="row info-row-about simple-top-item">
            <div className="dan-image info-col">
                <img src={dan} id="dan" />
            </div>
            <div className="dan-text info-col">
                <h1 className="about-contact">Dan Gillinder</h1>
                <p className="half-image-text-body" id="about-dan">
                    Dan is the current managing director of Woodland Venture. He is a family man with a son and 4 stepchildren,
                    ranging in ages from {getYoungestAge(now)} to {getOldestAge(now)}.<br /><br /> He has
                    been a Primary School teacher for {getYearsTeaching(now)} years
                    working in a range of year groups and leader
                    roles.<br /><br /> Prior to his career in teaching Dan
                    worked through a range of roles in outdoor
                    pursuits which include Leadership
                    responsibilities and in his spare time he assists
                    the running of a local Scout Troop. <br /><br />He has
                    completed a Forest School leader course and
                    has been running Forest Schools successfully
                    in partnership with several local schools.
                </p>
            </div>
        </div>
    )
}

export default About;