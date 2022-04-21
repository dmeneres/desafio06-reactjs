import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Continent() {
  const { asPath } = useRouter();
  const path = asPath.split('/')
  const continent = path[2]

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner continent={continent} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  );
}
