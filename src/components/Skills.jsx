import React from "react";
import cssIcon from "../assets/css.jpg";
import firebaseIcon from "../assets/firebase.jpg";
import htmlIcon from "../assets/html.jpg";
import javascriptIcon from "../assets/javascript.jpg";
import reactIcon from "../assets/react.jpg";
import typescriptIcon from "../assets/typescript.jpg";
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
      <div className="flex flex-row items-center">
        <div className="w-1/2 text-5xl">Skills Acquired</div>
        <div className="flex flex-row gap-20 flex-wrap w-1/2">
          {skillsArray.map((eachSkill, index) => {
            return (
              <div className="rounded border flex justify-center p-7 w-1/5 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-100 ...">
                <img
                  src={eachSkill}
                  className="rounded-md"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
