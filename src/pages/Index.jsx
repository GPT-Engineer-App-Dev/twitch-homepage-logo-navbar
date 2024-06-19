import { Box, Button, Container, Flex, Heading, HStack, Image, Spacer, Text, VStack, SimpleGrid, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const streams = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    title: "Stream 1",
    category: "Gaming",
    viewers: 1200,
  },
  {
    id: 2,
    thumbnail: "https://via.placeholder.com/300x200",
    title: "Stream 2",
    category: "Music",
    viewers: 800,
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1581091870621-1f9d9a7f6a3b",
    title: "Stream 3",
    category: "Art",
    viewers: 500,
  },
];

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
      <Box mt={10} w="100%">
        <Heading as="h2" size="xl" mb={6} textAlign="center">Live Streams</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {streams.map((stream) => (
            <Box key={stream.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={stream.thumbnail} alt={stream.title} />
              <Box p={6}>
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Live
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {stream.category}
                  </Box>
                </Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {stream.title}
                </Box>
                <Box>
                  {stream.viewers} viewers
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;