import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
      spacing={0}
      align="start"
      borderWidth={1}
      borderRadius="md"
      bg="white"
      
    >

      <VStack align="start" spacing={0} flex={1} >
        <div>
          <Image
            src={imageSrc}
            alt={title}
            boxSize="100%"
            objectFit="fill"
            borderRadius="md"
          />
        </div>
        <VStack align="start" p={4}>
          <Heading as="h2" size="md" color="black">
            {title}
          </Heading>
          <Text color="darkgrey">{description}</Text>

          <HStack color="black">
            <Text>SEE MORE</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
          </VStack>

      </VStack>
    </HStack>
  );
};

export default Card;