import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import NewsModal from "../components/NewsModal/NewsModal";
import { axiosGet } from "../helpers/axiosCalls";

import TableNews from "../components/TableNews/TableNews";
import TableTags from "../components/TableTags/TableTags";

export default function Home() {
  const [news, setNews] = useState([]);
  const [tags, setTags] = useState([]);
  const [isTableNews, setTable] = useState(false);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    axiosGet("/news").then((res) => setNews(res.data.data));
    axiosGet("/tags").then((res) => setTags(res.data.data));
  }, []);

  return (
    <Box margin={10}>
      <Head>
        <title>News Front-End</title>
      </Head>
      <Heading marginBottom={10}>News Front-End Project</Heading>
      <Box marginBottom={6}>
        <Button
          colorScheme="teal"
          variant={isTableNews ? "solid" : "outline"}
          onClick={() => setTable(true)}
          marginRight={6}
        >
          News
        </Button>
        <Button
          colorScheme="blue"
          variant={!isTableNews ? "solid" : "outline"}
          onClick={() => setTable(false)}
        >
          Tags
        </Button>
      </Box>
      {isTableNews ? (
        <Box>
          <NewsModal tags={tags} setNews={setNews} forceUpdate={forceUpdate} />
          <TableNews news={news} setNews={setNews} forceUpdate={forceUpdate} />
        </Box>
      ) : (
        <TableTags tags={tags} />
      )}
    </Box>
  );
}
