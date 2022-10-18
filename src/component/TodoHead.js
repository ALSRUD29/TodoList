import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;

  h1 {
    margin: 0;
    font-size: 50px;
    color: #343a40;
    text-align: center;
  }
  .day {
    margin-top: 10px;
    color: #868e96;
    font-size: 21px;
    text-align: center;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`

function TodoHead( {todos} ){

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
    const undoneTasks = todos.filter(todo => !todo.done);

    return (
        <TodoHeadBlock>
            <h1>My Todo-List</h1>
            <div className="day">{dateString} {dayName}</div>
            <div className="tasks-left"></div>
        </TodoHeadBlock>
    )
}

export default TodoHead;