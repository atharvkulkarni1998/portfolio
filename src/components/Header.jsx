import React from "react";

const Header = (props) => {
  return (
    <div className="sticky top-0 right-0 width-9/10">
      <div className="flex items-center gap-10 ">
        {props.headersArray.map((eachHeader) => {
          return (
            <div
              key={eachHeader.value}
              className="cursor-pointer hover:text-violet-600 text-base"
            >
              {eachHeader.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
