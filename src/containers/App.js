import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "../components/Header";

const Wrapper = styled.div`
   display: grid;
   margin: 0 auto;
   height: 100vh;
   width: 120rem;
   background-color: var(--color-grey-light-1);
`;

class App extends Component {
   render() {
      return (
         <Wrapper>
            <Header>Logo</Header>
         </Wrapper>
      );
   }
}

export default App;
