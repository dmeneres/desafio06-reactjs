import { Grid, Text } from "@chakra-ui/react";
import { Info } from "./Info";

interface continentObjectProps {
  name: string,
  description: string,
  countries: string,
  languages: string,
  cities: string,
  citiesList: {
    city: string,
    country: string
  }
}

export function Content({continent}) {
  var contentDescriptions = require('../../../public/contentDescriptions.json');
  function findContinentName(element) {
    return (
      element.name === continent
    )
  }
  function findContinentIndex() {
    return (
      contentDescriptions.findIndex(findContinentName)
    )
  }
  let index = findContinentIndex()
  let continentObject: continentObjectProps = contentDescriptions[index]

  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {continentObject.description}

      </Text>
      <Info information={continentObject} />
    </Grid>
  );
}
