import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../CapitalizeFirstLetter";

export function City({ city, country }) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/${city}.png`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {capitalizeFirstLetter(city)}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {capitalizeFirstLetter(country)}
          </Text>
        </Flex>
        <Image
          src={`/${country}Flag.png`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
