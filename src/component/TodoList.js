import React from "react";
import styled from "styled-components";
import TodoItem from './TodoItem'


const TodoListBlock = styled.div`
  padding: 20px 32px;
  padding-bottom: 48px;

  flex: 1; /* 투두 템플릿 관련 */
  overflow-y: auto; /* 투두 템플릿 관련 */
  

`;

function TodoList({todos}){
    return ( 
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
