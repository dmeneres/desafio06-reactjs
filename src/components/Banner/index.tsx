import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]} //RESPONSIVE DECLARATION
      bgImage="url('/banner.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]} //RESPONSIVE DECLARATION {[100% 20%]} => 100% HORIZONTAL 20% VERTICAL
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]} //RESPONSIVE DECLARATION
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]} //RESPONSIVE DECLARATION
          >
            5 continents,
            <br />
            endless possibilities.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]} //RESPONSIVE DECLARATION
          >
            The time has come to take the trip you've always dreamed of.
          </Text>
        </div>
        <Image
          w={["300px", "300px", "300px", "430px"]} //RESPONSIVE DECLARATION
          display={["none", "none", "block"]} //RESPONSIVE DECLARATION
          src="/airplane.svg"
          alt="airplane flying"
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
