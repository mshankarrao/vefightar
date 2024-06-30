import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";

export const InfoCard = () => {
  return (
    <Card w={"full"}>
      <Box p={3}>
        <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
          <Image src="/ecology-bag-with-leaves.jpeg" borderRadius={10} />
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              <Button size='xs'
                rounded={"full"}
                colorScheme="blue"
                height='70px'
                width='150px'
                border='2px'
                borderColor='yellow'>Register a new Creator</Button>
            </HStack>
            <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              <Button size='xs'
                rounded={"full"}
                colorScheme="blue"
                height='70px'
                width='150px'
                border='2px'
                borderColor='yellow'>Register a new Course</Button>
            </HStack>
            <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              <Button size='xs'
                rounded={"full"}
                colorScheme="blue"
                height='70px'
                width='150px'
                border='2px'
                borderColor='yellow'>Register a new Learner</Button>
            </HStack>
          </Flex>
        </VStack>
      </Box>
    </Card>
  );
};
