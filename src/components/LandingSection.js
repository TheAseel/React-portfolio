import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Aseel!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const avatarUrl = "https://i.ibb.co/FhnGyvk/aS-IdPic.png";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#58ABAE"
  >
    <VStack spacing={4}>
      <Avatar src={avatarUrl} size="xl" />
      <Heading  fontSize="lg" >{greeting}</Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;