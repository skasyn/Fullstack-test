import { Container } from '../components/Container';
import { ConvertProvider } from '../context/convert';
import { Grid, GridItem, Select, Stack, Text, Input } from "@chakra-ui/react";

const Index = () => (

  <ConvertProvider>
    <Container height="100vh">
    <Stack>
      <Text>
      1 dollars
      </Text>
      <Text fontSize="3xl">
        Beaucoup d'argent, genre vraiment
      </Text>
      <Text fontSize="sm">
        { new Date().toString()}
      </Text>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        paddingTop="20px"
      >
        <GridItem>
          <Input placeholder="Select option" />
        </GridItem>
        <GridItem>
        <Select placeholder="Select option">
            <option value="option1">Option 2</option>
          </Select>
        </GridItem>
        <GridItem>
        <Input placeholder="Select option" />
        </GridItem>
        <GridItem>
        <Select placeholder="Select option">
            <option value="option1">Option 4</option>
          </Select>
        </GridItem>
      </Grid>
    </Stack>
  </Container>
  </ConvertProvider>

)

export default Index
