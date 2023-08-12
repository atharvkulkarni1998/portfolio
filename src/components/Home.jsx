import React from "react";
import profileImage from "../assets/my_image.jpg";

const Home = (props) => {
  return (
    <div className="mt-32 p-3 mt-4 flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="text-5xl  flex justify-start">{props.homeData.homeHeader}</h2>
        <h2 className="text-6xl flex justify-start mt-10">
        {props.homeData.yourNameText}
        </h2>
      </div>
      <img src={profileImage} width="600px" height="600px" alt='profile icon'/>
    </div>
  );
};

export default Home;
