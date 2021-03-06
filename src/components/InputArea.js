// 글자수 세기, 제한 까지? 되는 인풋박스 컴포넌트 분리

import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

const Box = styled.div`
    height: 18rem;
    padding: 3rem;
    padding-left: 10%;
`;
const InputBox = styled.textarea`
    resize: none;
    width: 90%;
    height: 80%;
    left: 10%;
    top: 20%;
    font-size: 0.8rem;
    border-radius: 0.5rem;
    color:#000000;
    background: #C5C5C5;
    font-family: "Pretendard-Regular";
    padding: 1rem;
    @media(max-width: 870px){
        font-size:0.7rem;
    }
`;
//color:#FFFFFF;
//background: #3D3D3D; 
const TextCounts = styled.div`
    left: 10%;
    top: 30%;
    padding-bottom: 1rem;
`;
const InputArea = ({ questionText, id, value, onChange }) => {
    
    return (
        <Box>
            <Question questionText={questionText}/>
            <TextCounts>{value.length+" / 500"}</TextCounts>
            <InputBox 
                id={id} 
                value={value}
                onKeyUp={onChange}
                onKeyDown={onChange}
                onKeyPress={onChange}
                onChange={onChange}
                placeholder="내용을 입력해주세요."/>
        </Box>
    )
}
export default InputArea;