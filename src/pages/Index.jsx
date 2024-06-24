import { Box, Container, VStack, Heading, Text, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bgColor} color={color} minH="100vh" py={10}>
      <Container maxW="container.md">
        <VStack spacing={8} align="center">
          <Button onClick={toggleColorMode} alignSelf="flex-end">
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to Our Landing Page
          </Heading>
          <Text fontSize="xl" textAlign="center">
            This is a simple, clean, and modern landing page designed to capture your attention.
          </Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;