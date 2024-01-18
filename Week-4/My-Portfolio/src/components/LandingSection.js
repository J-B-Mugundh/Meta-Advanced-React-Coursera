import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am J B Mugundh!";
const bio1 = "Meta Certified React Developer!";
const bio2 = "Six Sigma Green Belt!";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground 
    backgroundColor="#2A4365"
  >
    <Avatar src="https://media.licdn.com/dms/image/D5603AQEvLCjYth7Llw/profile-displayphoto-shrink_400_400/0/1705250691290?e=1710979200&v=beta&t=4ztVvVwlrz-oKdP7ckKFBiyt2FvYKcr8ROqkw46X4Ww" size='2xl'/>
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h3" size="4xl" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h3" size="4xl" noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;