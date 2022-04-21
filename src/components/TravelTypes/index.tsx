import { Grid, GridItem } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Type icon="cocktail" text="nightlife" />
      </GridItem>
      <GridItem>
        <Type icon="surf" text="beach" />
      </GridItem>
      <GridItem>
        <Type icon="building" text="modern" />
      </GridItem>
      <GridItem>
        <Type icon="museum" text="vintage" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="earth" text="and more..." />
      </GridItem>
    </Grid>
  );
}
