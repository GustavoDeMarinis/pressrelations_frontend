import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const TableTags = ({ tags }) => {
  return (
    <Table variant="simple" marginTop={6}>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tags
          .sort(function (a, b) {
            return a.id - b.id;
          })
          .map((tag) => {
            return (
              <Tr key={tag.id}>
                <Td>{tag.id}</Td>
                <Td>{tag.name}</Td>
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};

export default TableTags;
