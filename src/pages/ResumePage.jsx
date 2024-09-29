import React from 'react';
import { Container } from '@mui/material';

const ResumePage = () => (
  <Container maxWidth="md" className="py-12">
     <iframe
        src="src/assets/resume.pdf"
        width="100%"
        height= "800px"
        className="border border-gray-300 rounded-lg"
        title="resume"
      />
  </Container>
);

export default ResumePage;