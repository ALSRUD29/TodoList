import React from "react";
import styled, { css } from "styled-components";
import { MdDone,MdDelete } from "react-icons/md"; /* 리액트 아이콘에서 불러오기 */
import { useState } from "react";


const TodoItemBlock = styled.div`
  display: flex; /* 체크,본문,삭제 한줄 가운데 정렬 */
  align-items: center; /* 체크,본문,삭제 한줄 가운데 정렬 */
  padding-top: 12px;
  padding-bottom: 12px;
`;
const CheckCircle = styled.div`
  border: 1px solid #ced4da;
  border-radius: 16px;
  width: 32px;
  height: 32px; /* 여기까지 동그라미 모양 만들기*/
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center; /* 여기까지 동그라미 안쪽 센터 정렬*/
  margin-right: 20px; /* 체크박스랑 오른쪽 텍스트 사이의 간격*/
  cursor: pointer;
  /* 기본 설정에서 done으로 바뀌면 체크표시랑 색바뀜*/
  ${(props) =>
    props.completed &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1; /* 이걸 쓰니까 텍스트 영역이 옆으로 길어짐 */
  font-size: 25px;
  color: #495057;
  ${(props) =>
    props.completed &&
    css`
      color: #dee2e6;
    `}

`;
const Remove = styled.div`
  color: #dee2e6;
  font-size: 30px;
  cursor: pointer;

  display: flex; /* 리무브 자식태그인 MdDelete를 조정 */
  align-items: center;
  justify-content: center;
`;

function TodoItem({ todo }) {
  const [rerender, setRerender] = useState({todo})
    const [completed, setCompleted] = useState();

    const ischecked = () => {
        fetch(`http://localhost:4000/todos/${todo.id}`,{
            method: "PATCH",
            headers: {"Content-Type" : "Application/json"},
            body: JSON.stringify({
                completed : !completed
            })
        })
        .then((res)=>{
           if(res.ok){
            setCompleted(!completed)
           }
        })
        .catch((error)=>{
            console.error('Error', error)
        })
    }

    const onRemove = () => {
      if(window.confirm('삭제하시겠습니까?')){
        fetch(`http://localhost:4000/todos/${todo.id}`, {
          method : 'DELETE'
        })
      }
      window.location.reload();
    }

    

  return (
    <TodoItemBlock>
      <CheckCircle onClick={ischecked} completed={completed}>{completed && <MdDone />}</CheckCircle>
      <Text completed={completed}>{todo.content}</Text>
      <Remove onClick={onRemove}><MdDelete /></Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
