import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  background-color: white;
  border-radius: 16px;
  margin: 0 auto;
  display: flex; /* 투두 리스트 관련 */
  flex-direction: column; /* 투두 리스트 관련 */

`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
