import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { FaJs, FaPython, FaReact, FaJava, FaCode } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const technologyIcons = {
  javascript: FaJs,
  python: FaPython,
  react: FaReact,
  java: FaJava,
  typescript: SiTypescript,
  default: FaCode
};

const ProjectCard = ({ title, description, technologies, projectUrl }) => {
  return (
    <Card className="max-w-sm h-full flex flex-col">
      <CardContent className="flex-grow">
        <div className="mb-4 flex justify-center space-x-4 bg-gray-100 py-4 rounded">
          {technologies.map((tech, index) => {
            const IconComponent = technologyIcons[tech.toLowerCase()] || technologyIcons.default;
            return <IconComponent key={index} className="text-4xl text-gray-700" />;
          })}
        </div>
        <Typography variant="h5" component="div" className="mb-2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={projectUrl}
          size="small"
          color="primary"
          className="mt-auto"
        >
          Source Code
        </Button>
        {/* <Button
          component={Link}
          to={projectUrl}
          size="small"
          color="primary"
          className="mt-auto"
        >
          Source Code
        </Button> */}
      </CardActions>
    </Card>
  );
};

const ProjectPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A project description",
      technologies: ["JavaScript"],
      projectUrl: "/projects/js-toolkit"
    },
    {
      title: "Project 2",
      description: "Another project description",
      technologies: ["Python", "React"],
      projectUrl: "/projects/data-analysis"
    },
    {
      title: "Project 3",
      description: "Yet another project description",
      technologies: ["Java"],
      projectUrl: "/projects/java-backend"
    }
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h3" component="h1">
        My Project
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;