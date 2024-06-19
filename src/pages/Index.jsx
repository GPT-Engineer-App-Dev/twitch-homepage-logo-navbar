import { Box, Button, Container, Flex, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="purple.600" color="white" padding={4} alignItems="center">
        <Image src="/twitch-logo.svg" alt="Twitch Logo" boxSize="40px" />
        <Spacer />
        <HStack spacing={4}>
          <Link to="/"><Text>Home</Text></Link>
          <Link to="/about"><Text>About</Text></Link>
          <Link to="/contact"><Text>Contact</Text></Link>
        </HStack>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">Welcome to Twitch</Heading>
          <Text fontSize="lg">Experience the best live streaming platform for gamers and creators.</Text>
          <Button colorScheme="purple" size="lg">Get Started</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;