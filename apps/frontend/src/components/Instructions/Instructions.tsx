import { Button, Card, Flex } from "@chakra-ui/react";

const Steps = [
  {
    title: "Learn Blockchain",
  },
  {
    title: "Learn Vechain",
  },
  {
    title: "Learn Vorj", 
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex
        p={{ base: 4 }}
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        {Steps.map((step, index) => (
          <Button size='md'
          height='108px'
          width='400px'
          border='2px'
          borderColor='yellow.500'>{step.title}</Button>
        ))}
      </Flex>
    </Card>
  );
};
