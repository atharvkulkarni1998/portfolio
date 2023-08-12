import React from "react";
import { Box } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
const Education = (props) => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="text-center text-5xl">Education</div>
        <div className="flex flex-row justify-around flex-wrap mt-10">
          {props.educationData.map((eachSection, index) => {
            return (
              <Box key={index} sx={{minWidth:'280px', width:'20%', p:2, borderRadius:'4px'}} className='border'>
              <SchoolIcon sx={{width:'60px', height:'60px', color:'#00205a'}}/>
                <div className='text-2xl font-semibold h-12'>{eachSection.label}</div>
                <div className='text-base font-semibold mt-4'>{eachSection.specialization}</div>
                <div className='text-base font-semibold mt-6'>{eachSection.institute}</div>
                <div className="mt-2">{eachSection.grades}</div>
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
