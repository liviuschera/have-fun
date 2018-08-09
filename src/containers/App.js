import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import DisplayCard from "../components/DisplayCard";
import ContentWrapper from "../components/ContentWrapper";
import MainWrapper from "../components/MainWrapper";
import NavInfoBar from "../components/NavInfoBar";

const Wrapper = styled.div`
   display: grid;

   /* grid-template-rows: var(--header-height); */
   grid-template-columns: repeat(2, 1fr);
   align-content: flex-start;
   margin: 0 auto;
   height: 100vh;
   width: var(--app-wrapper-width);
   background-color: var(--color-grey-light-1);
`;

class App extends Component {
   render() {
      return (
         <Wrapper>
            <Header>Logo</Header>
            <SideBar />
            <MainWrapper>
               <NavInfoBar>NavBar</NavInfoBar>
               <ContentWrapper>
                  <DisplayCard>Card</DisplayCard>
                  <DisplayCard>Card</DisplayCard>
                  <DisplayCard>Card</DisplayCard>
               </ContentWrapper>
            </MainWrapper>
         </Wrapper>
      );
   }
}

export default App;
