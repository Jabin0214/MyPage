import React from 'react';
import { Link } from 'react-router-dom';
import { Place, School, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { Typography } from '@mui/material';

const LinkItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-3 group">
    {React.cloneElement(icon, { className: "text-gray-600 group-hover:text-blue-600 transition-colors duration-200" })}
    {link ? (
      <Link to={link} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
        <Typography variant="body2">{text}</Typography>
      </Link>
    ) : (
      <Typography variant="body2" className="text-gray-700">{text}</Typography>
    )}
  </div>
);

const LinkSection = () => (
  <div className="bg-white shadow-md rounded-lg p-6 mt-10">
    <Typography variant="h6" className="font-semibold py-2 text-gray-800">Contact Information</Typography>
    <div className="space-y-4">
      <LinkItem 
        icon={<Place />} 
        text="New Zealand" 
      />
      <LinkItem 
        icon={<School />} 
        text="University of Auckland, New Zealand" 
      />
      <LinkItem 
        icon={<GitHub />} 
        text="Github" 
        link="https://github.com/Jabin0214" 
      />
      <LinkItem 
        icon={<LinkedIn />} 
        text="LinkedIn" 
        link="https://www.linkedin.com/in/your-linkedin" 
      />
      <LinkItem 
        icon={<Email />} 
        text="jabinchen0214@gmail.com" 
        link="mailto:jabinchen0214@gmail.com" 
      />
    </div>
  </div>
);

export default LinkSection;