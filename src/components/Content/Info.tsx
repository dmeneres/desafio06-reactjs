import {
  Button,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Info({information}) {
  const PopoverTriggerGb: React.FC<{ children: any }> = PopoverTrigger;
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {information.countries}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          countries
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {information.languages}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          languages
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {information.cities}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cities +100
          <Popover>
            <PopoverTriggerGb>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTriggerGb>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                London, Paris, Rome, Prague, Amsterdam
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
