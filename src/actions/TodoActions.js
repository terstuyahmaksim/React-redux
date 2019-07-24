import {
  ADD_TODO,
  DEL_TODO,
  CHANGE_STATUS_TODO,
  OPEN_DETAILS_VIEW,
  UPDATE,
  CLOSEDET
} from "../constants/TodoConstants";

export const add = todoItem => {
  return {
    type: ADD_TODO,
    data: todoItem
  };
};

export const del = itemId => {
  return {
    type: DEL_TODO,
    data: itemId
  };
};

export const changeStatus = todoItem => {
  return {
    type: CHANGE_STATUS_TODO,
    data: todoItem
  };
};

export const openDetailsView = itemId => {
  return {
    type: OPEN_DETAILS_VIEW,
    data: itemId
  };
};

export const update = newData => {
  return {
    type: UPDATE,
    data: newData
  };
};

export const closeDet = () => {
  return {
    type: CLOSEDET
  };
};
