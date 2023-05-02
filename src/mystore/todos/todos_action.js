import * as types from "./todos_type";

export const addAction = (x) => {
  return {
    type: types.ADD_TODO,
    payload: x,
  };
};

export const updateAction = (x) => {
  return {
    type: types.UPDATE_TODO,
    payload: x,
  };
};

export const deleteAction = (x) => {
  return {
    type: types.DELETE_TODO,
    payload: x,
  };
};
