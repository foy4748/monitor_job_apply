import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

interface InitialState {
  data: string[];
}

const initialState: InitialState = {
  data: ["Testing"],
};

export const todoSlide = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      state.data.push(payload);
    },
    getTodo: (state, action: PayloadAction<string>) => {
      state.data = [action.payload];
    },
  },
});

export const getTodoAsync = (data: string) => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    dispatch(getTodo(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const addTodoAsync = (data: string) => async (dispatch: any) => {
  try {
    //console.log(data);
    const response = await axios.post(API_URL, data);
    // console.log(response);
    dispatch(addTodo(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const { addTodo, getTodo } = todoSlide.actions;

// For getting initial state
export const showTodo = (state: RootState) => state.todo.data;

export default todoSlide.reducer;
