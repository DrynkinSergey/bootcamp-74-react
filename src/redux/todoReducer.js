import { addTodo, changeFilter, deleteTodo } from './actions';

const initialState = {
  todos: [],
  filter: '',
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo.type:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case deleteTodo.type:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload),
      };
    case changeFilter.type:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
