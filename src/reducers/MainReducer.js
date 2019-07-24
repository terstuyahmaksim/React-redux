import { combineReducers } from "redux";
import uniqid from "uniqid";
import {
  ADD_TODO,
  DEL_TODO,
  CHANGE_STATUS_TODO,
  OPEN_DETAILS_VIEW,
  UPDATE,
  CLOSEDET
} from "../constants/TodoConstants";

const STATUS_NOT_READY = `Not ready`;
//const STATUS_DONE = `Done`;
//const STATUS_IN_PROCESS = "In process";
const firstUniqueId = uniqid();
const defaultState = {
  todos: {
    byId: {
      [firstUniqueId]: {
        id: firstUniqueId,
        title: "wash a car",
        status: STATUS_NOT_READY,
        details: "empty"
      }
    },
    allIds: [firstUniqueId]
  },
  activeTodoItem: null
};
// это замена сервера
const generateTodoItem = action => {
  return {
    id: action.data.id ? action.data.id : uniqid(),
    title: action.data.newTitle ? action.data.newTitle : action.data.title,
    status: action.data.status ? action.data.status : STATUS_NOT_READY,
    details: action.data.details ? action.data.details : "empty"
  };
};
const delTodoItem = (todos, id) => {
  const elementIndex = todos.indexOf(id);
  if (elementIndex !== -1) {
    const newTodos = [...todos];
    newTodos.splice(elementIndex, 1);
    return newTodos;
  }
  return todos;
};
const editTodoItem = (state, action) => {};
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoItem = generateTodoItem(action, state);
      return {
        ...state,
        todos: {
          byId: {
            ...state.todos.byId,
            [newTodoItem.id]: newTodoItem
          },
          allIds: [...state.todos.allIds, newTodoItem.id]
        }
      };
    case DEL_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          allIds: delTodoItem(state.todos.allIds, action.data)
        },
        activeTodoItem: null
      };
    case CHANGE_STATUS_TODO:
      editTodoItem(state, action);
      return {};
    case OPEN_DETAILS_VIEW:
      return {
        ...state,
        activeTodoItem: action.data
      };
    case UPDATE:
      return {
        ...state,
        todos: {
          byId: {
            ...state.todos.byId,
            [action.data.id]: generateTodoItem(action)
          },
          allIds: [...state.todos.allIds]
        },
        activeTodoItem: null
      };
    case CLOSEDET:
      return {
        ...state,
        activeTodoItem: null
      };
    default:
      return state;
  }
};
const todoApp = combineReducers({
  todoReducer
});

export default todoApp;
