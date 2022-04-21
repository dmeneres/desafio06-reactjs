import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function Cities({continent}) {
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
  let continentObject = contentDescriptions[index]

  let citiesList = continentObject.citiesList
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cities +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City city={citiesList[0].city} country={citiesList[0].country} />
        <City city={citiesList[1].city} country={citiesList[1].country} />
        <City city={citiesList[2].city} country={citiesList[2].country} />
        <City city={citiesList[3].city} country={citiesList[3].country} />
        <City city={citiesList[4].city} country={citiesList[4].country} />
        <City city={citiesList[5].city} country={citiesList[5].country} />
        <City city={citiesList[6].city} country={citiesList[6].country} />
        <City city={citiesList[7].city} country={citiesList[7].country} />
      </Grid>
    </>
  );
}
