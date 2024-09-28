import React from 'react';
import { Typography, Container, Paper, Divider, Link } from '@mui/material';

const Section = ({ title, children }) => (
  <div className="mb-6">
    <Typography variant="h5" className="font-bold mb-2">{title}</Typography>
    <Divider className="mb-2" />
    {children}
  </div>
);

const SubSection = ({ title, date, role, children }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <Typography variant="h6" className="font-semibold">{title}</Typography>
      <Typography variant="body2" className="text-gray-600">{date}</Typography>
    </div>
    <Typography variant="subtitle1" className="mb-1">{role}</Typography>
    {children}
  </div>
);

const ResumePage = () => (
  <Container maxWidth="md" className="py-8">
    <Paper elevation={3} className="p-8">
      <Typography variant="h4" className="text-center mb-4">Zhuobin(Jabin) Chen</Typography>
      <Typography variant="body1" className="text-center mb-6">
        E-mail: jabinchen0214@gmail.com | Phone: (+64) 2102342572 <br />
        LinkedIn: <Link href="www.linkedin.com/in/jabinchen-590929276" target="_blank">www.linkedin.com/in/jabinchen-590929276</Link>
      </Typography>

      <Section title="Technical Strengths">
        <Typography variant="subtitle1" className="font-semibold">Programming Languages:</Typography>
        <ul className="list-disc pl-6 mb-2">
          <li>Advanced: Python, R, JavaScript (React), Swift</li>
          <li>Intermediate: Java, R, SQL, C</li>
        </ul>
        <Typography variant="subtitle1" className="font-semibold mt-2">Development Frameworks & Tools:</Typography>
        <ul className="list-disc pl-6">
          <li>Web Development: ReactJS, Node.js, Express, MongoDB (MERN Stack)</li>
          <li>Mobile Development: Swift for iOS</li>
          <li>Data Analysis: R, SPSS, Python with Pandas, NumPy, Scikit-Learn</li>
          <li>Deployment: AWS, Docker, Nginx</li>
          <li>Version Control: Git</li>
        </ul>
        <Typography variant="subtitle1" className="font-semibold mt-2">Certifications:</Typography>
        <Typography>AWS Academy Cloud Architecting, Microsoft Office Specialist Master</Typography>
      </Section>

      <Section title="Experience">
        <SubSection
          title="The University of Auckland"
          date="Feb 2023 - Present"
          role="Teaching Assistant"
        >
          <ul className="list-disc pl-6">
            <li>Evaluated and marked assignments for computer science courses, specifically <i>Principles of Programming</i>, <i>Introduction to Software Fundamentals</i> and <i>Computer Organisation</i>, maintaining high academic standards.</li>
            <li>Provided teaching assistance to faculty, enriching the learning environment for students through additional support and resources.</li>
            <li>Delivered constructive feedback to students, promoting better academic outcomes and comprehension.</li>
          </ul>
        </SubSection>

        <SubSection
          title="FRW Healthcare Limited, ICT Graduate School"
          date="Jun 2024 - Oct 2024"
          role="Web & Mobile Frontend Developer"
        >
          <ul className="list-disc pl-6">
            <li>Led the development of an innovative application that revolutionizes the medication purchasing process in pharmacies by automating data extraction from product images using advanced image recognition technology.</li>
            <li>Engineered a minimalist, user-centric interface using <strong>Swift</strong> for iOS and <strong>ReactJs</strong> with <strong>Tailwindcss</strong> for web, enhancing intuitive navigation and user interaction, which significantly boosted operational efficiency.</li>
            <li>Integrated OpenAI's API to facilitate real-time image recognition and knowledge base searches. Collaborated with backend developers, consuming <strong>RESTful APIs</strong> to ensure efficient communication between the frontend and backend systems.</li>
            <li>Utilized <strong>Docker</strong> to containerize the frontend applications, managed deployments using <strong>Nginx</strong> as a reverse proxy and load balancer, and successfully deployed the scalable solution on <strong>AWS</strong>, ensuring optimal performance and reliability of cloud services.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Project">
        <SubSection
          title="MERN Stack Web Application Development"
          date="Jun 2023 - Nov 2023"
          role="Full Stack Developer"
        >
          <ul className="list-disc pl-6">
            <li>Participated in a team project to develop a feature-rich web application using the MERN stack, focusing on integrating Spotify's and OpenAI's API to enhance user interactivity.</li>
            <li>Took charge of full-stack development, including both front-end and back-end responsibilities. Gained a profound understanding of the development of frontend and backend systems for enhancing user experience through the integration of large language model APIs.</li>
            <li>Employed technologies such as <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> to build a robust application that replicated and extended the functionalities of Spotify, adding social features like song commenting and real-time chat.</li>
          </ul>
        </SubSection>

        <SubSection
          title="Data Mining and Big Data Analysis on COVID-19 Impact"
          date="Jun 2023 - Nov 2023"
          role="Data Analyst"
        >
          <ul className="list-disc pl-6">
            <li>Conducted an in-depth data mining project to analyze the impact of the COVID-19 pandemic on education quality in Venezuela, using the CRISP-DM methodology.</li>
            <li>Utilized a variety of data analysis tools including <strong>IBM SPSS Modeler</strong>, <strong>Spyder</strong>, and <strong>Jupyter Notebook</strong>, leveraging both <strong>Python</strong> and <strong>R</strong> for data preprocessing, complex modeling, and in-depth analysis.</li>
            <li>Designed and tested multiple machine learning models—including <strong>decision trees</strong>, <strong>random forests</strong>, <strong>logistic regression</strong>, and <strong>clustering</strong>—to identify and predict key factors leading to increased school dropout rates during the pandemic.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Education">
        <SubSection
          title="University of Auckland"
          date="Jul 2023 - Dec 2024"
          role="Master of Science Major in Information Technology"
        >
          <Typography>GPA: 7/9</Typography>
        </SubSection>

        <SubSection
          title="University of Auckland"
          date="Jul 2020 - July 2023"
          role="Bachelor of Science Major in Computer Science"
        />
      </Section>

      <Section title="Reference">
        <Typography>Available if required</Typography>
      </Section>
    </Paper>
  </Container>
);

export default ResumePage;