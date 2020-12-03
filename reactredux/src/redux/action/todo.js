import { ADD_TASK, EDIT_TASK, REMOVE_TASK, UPDATE_TASK } from "../actionTypes";

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const removeTask = (payload) => ({
  type: REMOVE_TASK,
  payload,
});

export const editTask = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const updateTask = (payload) => ({
  type: UPDATE_TASK,
  payload,
});
