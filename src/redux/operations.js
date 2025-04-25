import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from './auth/operations';

//https://6805ee0eca467c15be6a7236.mockapi.io/tasks
//redux-thunk

// export const fetchTodos = () => async dispatch => {
//   try {
//     dispatch(setIsLoading(true));
//     const response = await axios.get('https://6805ee0eca467c15be6a7236.mockapi.io/tasks');
//     dispatch(fetchSuccess(response.data));
//   } catch (error) {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };

// axios.defaults.baseURL = 'https://6805ee0eca467c15be6a7236.mockapi.io';

export const fetchTodos = createAsyncThunk('fetchTodos', async (signal, thunkAPI) => {
  try {
    const response = await goitApi.get('/tasks', {
      signal,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
  try {
    await goitApi.delete(`/tasks/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
  try {
    const response = await goitApi.post('/tasks', body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleCompletedTodoThunk = createAsyncThunk('toggleCompleted', async ({ id, ...body }, thunkAPI) => {
  try {
    const response = await goitApi.patch(`/tasks/${id}`, body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changeTitleThunk = createAsyncThunk('changeTitle', async ({ id, ...body }, thunkAPI) => {
  try {
    const response = await goitApi.patch(`/tasks/${id}`, body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
