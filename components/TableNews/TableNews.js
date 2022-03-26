import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import DeleteNews from "../DeleteNews/DeleteNews";
import NewsModal from "../NewsModal/NewsModal";

const TableNews = ({ news, setNews, forceUpdate }) => {
  return (
    <Table variant="simple" marginTop={6}>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Headline</Th>
          <Th>Date</Th>
          <Th isNumeric></Th>
        </Tr>
      </Thead>
      <Tbody>
        {news
          .sort(function (a, b) {
            return a.id - b.id;
          })
          .map((news) => {
            return (
              <Tr key={news.id}>
                <Td>{news.id}</Td>
                <Td>
                  <Popover placement="bottom-start">
                    <PopoverTrigger>
                      <Button variant="link" colorScheme="teal">
                        {news.headline}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Tags</PopoverHeader>
                      <PopoverBody>
                        {news.tags.map((tag) => (
                          <Text key={tag.id}>{tag.name} </Text>
                        ))}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
                <Td>{format(new Date(news.date), "dd-MM-yyyy")}</Td>
                <Td isNumeric>
                  <NewsModal
                    id={news.id}
                    setNews={setNews}
                    forceUpdate={forceUpdate}
                    edit={true}
                  />
                  <DeleteNews
                    id={news.id}
                    setNews={setNews}
                    forceUpdate={forceUpdate}
                  />
                </Td>
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};

export default TableNews;
