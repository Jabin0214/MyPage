import React from 'react';
import { Avatar, Container, Typography, Paper } from "@mui/material";
import LinkSection from "./LinkSection";
import ProjectPage from "./ProjectPage";

const ProfileSection = () => (
    <Paper elevation={3} className="p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex flex-col items-center">
                <Avatar
                    alt="Profile Picture"
                    src="src/assets/avatar.jpeg"
                    sx={{ width: 200, height: 200, mb: 2 }}
                />
                <Typography variant="h4" component="h1" className="font-bold mb-2 text-center">
                    Jabin Chen
                </Typography>
                <Typography variant="h6" className="text-gray-600 mb-4 text-center">
                    Full-stack Web and Mobile App Developer
                </Typography>
            </div>
            <div className="md:w-2/3">
                <Typography variant="body1" className="text-gray-700 mb-6">
                    I am a backend developer with expertise in Node.js. I have experience in
                    building scalable, secure and reliable web applications using various
                    frameworks and technologies. I enjoy solving complex problems and
                    learning new skills. I am passionate about creating high-quality code that
                    follows best practices and industry standards. I am always looking for new
                    challenges and opportunities to grow as a developer.
                </Typography>
                <LinkSection />
            </div>
        </div>
    </Paper>
);

const HomePage = () => (
    <Container maxWidth="lg" className="py-12">
        <ProfileSection />
        <ProjectPage />
    </Container>
);

export default HomePage;