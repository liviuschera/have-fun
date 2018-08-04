import React from "react";
import styled from "styled-components";
import { Subtitle, Paragraph, Remark } from "./typography";
import { inputSelectField } from "../components/sharedStyles";

const SidebarAside = styled.aside`
   display: grid;
   align-self: flex-start;
   align-content: flex-start;
   align-items: flex-start;
   width: var(--sidebar-width);
   margin-left: 4rem;
   background-color: var(--color-grey-light-2);
`;
0;

const LocationArticle = styled.article`
   height: 13rem;
   padding: var(--sidebar-article-padding);
   border-bottom: 1px solid var(--color-grey-light-3);
   select {
      ${inputSelectField};
      width: 100%;
   }
`;

const DateArticle = styled.article`
   display: grid;
   grid-template-columns: 1fr 1fr;
   /* grid-template-rows: repeat(3, 1fr); */
   height: 19rem;
   padding: var(--sidebar-article-padding);
   border-bottom: 1px solid var(--color-grey-light-3);
   align-content: center;
   grid-gap: 0.5rem;

   input {
      ${inputSelectField};
      width: max-content;

      /* height: 4rem;
      width: 17rem;
      font-family: Roboto;
      font-size: var(--font-paragraph-size); */
      /* line-height: var(--font-paragraph-size); */
      /* align-self: center; */
   }
`;

const CategoriesArticle = styled.article`
   height: 22.5rem;
   padding: var(--sidebar-article-padding);
`;

// const Input = styled.input`
//    height: 4rem;
//    width: 17rem;
//    font-family: Roboto;
//    /* font-size: var(--font-paragraph-size); */
//    /* line-height: var(--font-paragraph-size); */
//    align-self: center;

//    /* padding-left: 1rem; */
// `;
const Span = styled.span`
   display: grid;

   box-decoration-break: clone;
   justify-self: flex-end;
   text-align: end;
`;

const SBSubtitle = styled(Subtitle)`
   grid-column: 1/-1;
`;

const SideBar = props => (
   <SidebarAside>
      <LocationArticle>
         <Subtitle>Location</Subtitle>
         <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
         </select>
      </LocationArticle>
      <DateArticle>
         <SBSubtitle>Date</SBSubtitle>
         <span>from</span>
         <input type="date" value="1980-08-26" />
         <span>to</span>
         <input type="date" value="1980-08-26" />
      </DateArticle>
      <CategoriesArticle>
         <Subtitle>Categories</Subtitle>
      </CategoriesArticle>
      {/* {props.children} */}
   </SidebarAside>
);

export default SideBar;
