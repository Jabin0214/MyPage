import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { FaJs, FaPython, FaReact, FaJava, FaCode } from 'react-icons/fa';

const technologyIcons = {
  javascript: FaJs,
  python: FaPython,
  react: FaReact,
  java: FaJava,
  default: FaCode
};

const projects = [
  {
    title: "Project 1",
    description: "Project 1 description",
    technologies: ["JavaScript", "TypeScript"],
    projectUrl: "/projects/js-toolkit"
  },
  { 
    title: "Project 2",
    description: "Project 2 description",
    technologies: ["Python", "React"],
    projectUrl: "/projects/data-analysis"
  },
  {
    title: "Project 3",
    description: "Project 3 description",
    technologies: ["Java"],
    projectUrl: "/projects/java-backend"
  }
];

export default function MultiActionAreaCard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-12'>
      {projects.map((project, index) => (
        <CardActionArea key={index}>
          <Card className='p-4' >
            <div className='flex'>
              {project.technologies.map((tech, index) => {
                const IconComponent = technologyIcons[tech.toLowerCase()] || technologyIcons.default;
                return <IconComponent key={index} className="text-4xl text-gray-700" />;
              })}
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </CardActionArea>


      ))}
    </div>
  );
}
