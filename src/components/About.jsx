import { Button } from "@mui/material";
import React from "react";
import aboutUsImage from "../assets/aboutUsImage.jpg";
import resumeFile from "../assets/Atharv_Kulkarni_ReactJS_1.3Years.pdf"
const About = (props) => {
  return (
    <div className="p-3 flex justify-between flex-row">
      <img
        src={aboutUsImage}
        width="600px"
        height="600px"
        alt="about Us"
        className="w-1/2"
      />
      <div className="flex justify-center flex-col items-start w-1/2">
        <div className="mb-10 text-5xl">{props.aboutData.aboutHeader}</div>
        <div className="text-left text-lg mb-5">{props.aboutData.aboutMe}</div>
        <div className="text-lg">{props.aboutData.otherActivitiesData}</div>
        {props.aboutData.otherActivitiesArray.map((eachHobby, index) => {
          return (
            <li className="text-base" key={index}>
              {eachHobby.label}
            </li>
          );
        })}
        <Button href={resumeFile} download sx={{textTransform:"capitalize", fontSize:"20px", mt:5}}>Download CV</Button>
      </div>
    </div>
  );
};

export default About;
