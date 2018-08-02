import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Wrapper = styled.div`
   display: grid;
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
         </Wrapper>
      );
   }
}

export default App;
