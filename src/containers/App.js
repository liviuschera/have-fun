import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import ContentWrapper from "../components/ContentWrapper";
import MainWrapper from "../components/MainWrapper";
import NavInfoBar from "../components/NavInfoBar";
import Pagination from "../components/Pagination";
import EventBrite from "./eventbrite";

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   align-content: flex-start;
   margin: 0 auto;
   height: 100vh;
   width: var(--app-wrapper-width);
   background-color: var(--color-grey-light-1);
`;

export default class App extends Component {
   state = { categories: [] };
   eventbrite = new EventBrite();

   componentDidMount() {
      this.eventbrite.getCategories().then(({ categories: { categories } }) => {
         console.log("inside didmount: ", categories);
         this.setState({ categories: categories });
      });
   }

   render() {
      return (
         <Wrapper>
            <Header>Logo</Header>
            <SideBar categories={this.state.categories} />
            <MainWrapper>
               <NavInfoBar>NavBar</NavInfoBar>
               <ContentWrapper>
                  <Card>Card</Card>
                  <Card>Card</Card>
                  <Card>Card</Card>
               </ContentWrapper>
               <Pagination />
            </MainWrapper>
         </Wrapper>
      );
   }
}
