import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
} from "@chakra-ui/react";

import { TableRows, TableRow } from "../Interfaces/TableData";

export default function Home({ name, dataRows }: TableRows) {
  return (
    <Box>
      <Heading as="h1">{name}</Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" size="lg">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Applied Jobs</Th>
              <Th>Interviewed</Th>
              <Th>Completed Tasks</Th>
              <Th>Rejections</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataRows.map((data: TableRow, idx: number) => {
              return (
                <Tr key={idx}>
                  <Td>{data.date}</Td>
                  <Td textAlign="center">{data.appliedJobs}</Td>
                  <Td textAlign="center">{data.submittedTasks}</Td>
                  <Td textAlign="center">{data.interviews}</Td>
                  <Td textAlign="center">{data.rejections}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
