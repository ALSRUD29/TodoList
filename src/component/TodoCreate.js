import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';


const CircleButton = styled.button`
  width: 40px;
  height: 40px;
  color: white;
  background: rgb(38,85,255);
  border-radius: 50%;
  border: none;
  outline: none; 
  font-size: medium;
  margin-left: 10px;
  font-display: center;
  font-weight: bold;
`
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 10px;
  
`
const Input = styled.input`
    width: 380px;
    margin-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    `

function TodoCreate(){
  
  const [value, setValue] = useState('');
  const contentRef = useRef(null);
  
  const onChange = e => setValue(e.target.value);
    
  const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지
        
        fetch('http://localhost:4000/todos',{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
              content: contentRef.current.value,
              completed : false
            }),
          })
          .then(res => {
            if(!res.ok){
                throw Error("에러")
            }
          })
          .catch((error)=>{
              console.error('Error',error)
        })
        window.location.reload();
        setValue('');
      };
    
    
    return (
            <InsertForm onSubmit={onSubmit}>
                <Input 
                autoFocus 
                placeholder="Write your Todo..." 
                onChange={onChange}
                value={value}
                ref={contentRef}
                />
                <CircleButton type='submit'><MdAdd /></CircleButton>
            </InsertForm>
    );
}

export default TodoCreate;
