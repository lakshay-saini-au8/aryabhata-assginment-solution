import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, EDIT_TASK, REMOVE_TASK, UPDATE_TASK } from "../actionTypes";

const initialState = {
  tasks: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      const data = {
        id: uuidv4(),
        title: payload,
        isEditable: false,
      };
      return { ...state, tasks: [...state.tasks, data] };
    case REMOVE_TASK:
      const updatedArr = state.tasks.filter((item) => item.id !== payload);
      return { ...state, tasks: [...updatedArr] };
    case EDIT_TASK:
      const editUpdate = state.tasks.map((item) => {
        if (item.id === payload) {
          return { ...item, isEditable: !item.isEditable };
        } else {
          return item;
        }
      });
      return { ...state, tasks: [...editUpdate] };
    case UPDATE_TASK:
      const updatedTask = state.tasks.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            title: payload.title,
            isEditable: !item.isEditable,
          };
        } else {
          return item;
        }
      });
      return { ...state, tasks: [...updatedTask] };
    default:
      return state;
  }
};
export default todoReducer;
