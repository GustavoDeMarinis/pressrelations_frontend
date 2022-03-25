import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import NewsCards from "../components/NewsCards/NewsCards";
import CreateNewsModal from "../components/CreateNewsModal/CreateNewsModal";

export default function Home() {
  const [news, setNews] = useState();
  const [tags, setTags] = useState();

  const getNews = async () => {
    await axios.get("http://localhost:4000/news/").then((response) => {
      setNews(response.data.data);
    });
  };

  const getTags = async () => {
    await axios.get("http://localhost:4000/tags/").then((response) => {
      setTags(response.data.data);
    });
  };
  useEffect(() => {
    getNews();
    getTags();
  }, []);

  return (
    <div className={styles.container}>
      <CreateNewsModal tags={tags} />
      <Head>
        <title>News Api</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w={300}>
        {news?.map((news) => {
          return <NewsCards key={news.id} {...news}></NewsCards>;
        })}
      </Box>
    </div>
  );
}
