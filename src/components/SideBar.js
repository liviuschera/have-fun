import React from "react";
import styled from "styled-components";
import { Subtitle, Paragraph } from "./typography";

const SidebarAside = styled.aside`
   display: grid;
   align-self: flex-start;
   align-content: flex-start;
   align-items: flex-start;
   width: var(--sidebar-width);
   margin-left: 4rem;
   background-color: var(--color-grey-light-2);
`;

const LocationArticle = styled.article`
   height: 13rem;
   padding: var(--sidebar-article-padding);
   border-bottom: 1px solid var(--color-grey-light-3);
`;

const DateArticle = styled.article`
   height: 19rem;
   padding: var(--sidebar-article-padding);

   border-bottom: 1px solid var(--color-grey-light-3);
`;

const CategoriesArticle = styled.article`
   height: 22.5rem;
   padding: var(--sidebar-article-padding);
`;

const SideBar = props => (
   <SidebarAside>
      <LocationArticle>
         <Subtitle>Location</Subtitle>
      </LocationArticle>
      <DateArticle>
         <Subtitle>Date</Subtitle>
      </DateArticle>
      <CategoriesArticle>
         <Subtitle>Categories</Subtitle>
      </CategoriesArticle>
      {/* {props.children} */}
   </SidebarAside>
);

export default SideBar;
