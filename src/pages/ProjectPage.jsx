import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
      <div className="px-6 py-4 bg-gray-100 flex justify-center space-x-4">
        {technologies.map((tech, index) => {
          const IconComponent = technologyIcons[tech.toLowerCase()] || technologyIcons.default;
          return <IconComponent key={index} className="text-4xl text-gray-700" />;
        })}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link 
          to={projectUrl} 
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600 transition-colors duration-300"
        >
          了解更多
        </Link>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const projects = [
    {
      title: "JavaScript 工具库",
      description: "一个用于简化常见 JavaScript 操作的工具库。",
      technologies: ["JavaScript", "TypeScript"],
      projectUrl: "/projects/js-toolkit"
    },
    {
      title: "Python 数据分析项目",
      description: "使用 Python 进行大规模数据分析和可视化的项目。",
      technologies: ["Python", "React"],
      projectUrl: "/projects/data-analysis"
    },
    {
      title: "Java 后端服务",
      description: "基于 Java 的高性能后端服务，支持大规模并发请求。",
      technologies: ["Java"],
      projectUrl: "/projects/java-backend"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">我的项目</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;