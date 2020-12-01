import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : 'study react',
      checked : true,
    },
    {
      id : 2,
      text : 'component styling',
      checked : true,
    },
    {
      id : 3,
      text : 'todo App',
      checked : false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos = {todos}/>
    </TodoTemplate>
  );  
};

export default App;
