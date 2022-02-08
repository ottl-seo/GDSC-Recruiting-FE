import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import Header from "../components/Header";
import './pages.css';

const MainArea = styled.div`
    padding-top: 8rem;
    text-align: right;
`;
const Title = styled.div`
    font-size: 5rem;
    padding-left: 4rem;
    text-align:left;
    font-family: ROKAFSansBold;
    font-style: normal;
    line-height: 146%;
    color: #000000;
`;
const Description = styled.div`
    font-size: 4rem;
    font-family: ROKAFSansMedium;
    font-style: normal;
    font-weight: bold;
    line-height: 146%;
    padding: 0rem 30rem 4rem 0rem;
    text-align:right;
    color: #000000;
`;
const GoApply = styled.div`
    text-align:right;
    padding: 0rem 7rem 4rem 0rem;
    font-size: 5rem;

`;
const MainPage = () => { 
    return (
        <>
        
        <div className="main-page">
        <Header/>
        <MainArea>
            <Title>GDSC Ewha<br/>is Now Recruiting!</Title>
            <Link to="/apply">
                <GoApply>Go Apply →</GoApply>
            </Link>
        
        </MainArea>
        </div>
        </>
    )
}
export default MainPage;