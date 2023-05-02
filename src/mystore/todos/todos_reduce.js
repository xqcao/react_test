import * as types from "./todos_type";
const initialState = [
  { name: "coding", description: "java and python coding", id: "0001" },
  { name: "sleep", description: "sleeping", id: "0002" },
];
const reduce = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];
    case types.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case types.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
          todo.description = action.payload.description;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reduce;
