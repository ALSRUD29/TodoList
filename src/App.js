import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoHead from './component/TodoHead';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:4000/todos`)
    .then((res)=> {
      if(!res.ok){
        throw Error('데이터페치 오류')
      }
      return res.json();
    })
    .then(data => {
      setTodos(data);
    })
    .catch(err => {
      throw Error('에러')
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoCreate todos={todos} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
}

export default App;
