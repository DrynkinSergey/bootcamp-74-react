import { useState } from 'react';
import todosData from '../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';

export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [todoValue, setTodoValue] = useState('');

  const handleDeleteItem = id => {
    const newData = todos.filter(item => item.id !== id);
    setTodos(newData);
    console.log('Deleting...');
  };

  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      todo: todoValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoValue('');
  };

  const handleChangeInput = e => setTodoValue(e.target.value);
  const handleToggleTodo = id => {
    const newData = todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item));
    setTodos(newData);
  };

  const handleDeleteSelected = () => {
    const newData = todos.filter(item => !item.completed);
    setTodos(newData);
  };
  return (
    <div>
      <div className='flex'>
        <input value={todoValue} onChange={handleChangeInput} className={s.input} />
        <button onClick={addTodo} className='btn border'>
          Add
        </button>
      </div>
      <button onClick={handleDeleteSelected}>Delete completed todos</button>
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem key={item.id} {...item} handleDeleteItem={handleDeleteItem} handleToggleTodo={handleToggleTodo} />
        ))}
      </ul>
    </div>
  );
};
