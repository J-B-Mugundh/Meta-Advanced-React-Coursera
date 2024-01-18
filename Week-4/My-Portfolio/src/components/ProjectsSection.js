import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Next-Gen-Security_Enhanced-DDoS-Attack-Detection-for-Autonomous-Vehicles-in-6G-Networks",
    description:
      "This research proposed an Advanced DDoS Attack Detection System (ADADS) using a Hybrid Detection Model (HDM) and Continuous Learning Model (CLM) for dynamic adaptation to evolving attack patterns.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Integrated-Assistive-System-For-Object-Detection-And-Blind-Navigation ",
    description:
      "Explore our integrated assistive system combining advanced object detection and blind navigation, designed to enhance accessibility for individuals with visual impairments. Navigating the world with confidence and precision🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "E-Medical-Service-Platform",
    description:
      "An impactful E-Medical Services Platform made utilizing HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL, specifically designed to provide essential healthcare services during pandemic times.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "FileCoffer",
    description:
      "A Deception Detection Mechanism and File Locking Mechanism Using Facial Recognition using Haar Cascades algorithm for attaining high security in the digital world of advancing technologies",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;