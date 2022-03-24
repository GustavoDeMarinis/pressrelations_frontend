import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NewsCards = ({ id, headline, text, ...news }) => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white" margin={3}>
      <Text fontSize="3xl">{headline}</Text>
      <p>{id}</p>
      <p></p>
      <p>{text}</p>
      {/* <li>{news.}</li> */}
    </Box>
  );
};

export default NewsCards;
