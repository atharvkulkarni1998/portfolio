import React from "react";
import cssIcon from "../assets/css.jpg";
import firebaseIcon from "../assets/firebase.jpg";
import htmlIcon from "../assets/html.jpg";
import javascriptIcon from "../assets/javascript.jpg";
import reactIcon from "../assets/react.jpg";
import typescriptIcon from "../assets/typescript.jpg";
import { Box } from "@mui/material";
const Skills = () => {
  const skillsArray = [
    cssIcon,
    firebaseIcon,
    htmlIcon,
    javascriptIcon,
    reactIcon,
    typescriptIcon,
  ];
  return (
    <div>
      <div className="flex flex-col ">
        <div className="text-center text-5xl">Skills Acquired</div>
        <div className="flex flex-row justify-around flex-wrap mt-10">
          {skillsArray.map((eachSkill, index) => {
            return (
              <Box key={index} sx={{width:'8%'}} className="rounded border flex justify-center p-7 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-100 ...">
                <img
                  src={eachSkill}
                  className="rounded-md"
                  alt={'image'+index}
                />
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
