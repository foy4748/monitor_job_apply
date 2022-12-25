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

interface TableRow {
  date: string;
  appliedJobs: number;
  submittedTasks: number;
  interviews: number;
  rejections: number;
}

interface TableRows {
  name: string;
  dataRows: TableRow[];
}

// Related to Redux-Toolkit
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../Slices/store";
import { getTodoAsync, showTodo } from "../Slices/TestSlice";
export default function Home({ name, dataRows }: TableRows) {
  const dispatch = useDispatch();
  const initialValue = useSelector(showTodo);
  console.log(initialValue);
  return (
    <Box>
      <Heading as="h1">{name}</Heading>
      <button
        onClick={() => {
          dispatch(getTodoAsync("5"));
          console.log("hit");
        }}
      >
        Testing
      </button>
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
