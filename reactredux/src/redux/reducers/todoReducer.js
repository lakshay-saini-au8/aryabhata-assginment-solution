import { ADD_TASK, REMOVE_TASK } from "../actionTypes";

const initialState = {
  tasks: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case REMOVE_TASK:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default todoReducer;
