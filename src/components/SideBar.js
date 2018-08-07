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
   height: 19rem;
   padding: var(--sidebar-article-padding);
   border-bottom: 1px solid var(--color-grey-light-3);
   align-content: center;
   grid-gap: 0.5rem;

   input {
      ${inputSelectField};
      width: max-content;
   }
`;

const CategoriesArticle = styled.article`
   height: 22.5rem;
   padding: var(--sidebar-article-padding);

   div {
      line-height: var(--font-subtitle-size);
      input[type="checkbox"] {
         /* display: none; */
      }
      label {
         cursor: pointer;
         span {
            /* margin-left: -2rem; */
            padding-right: 1rem;
            display: inline-block;
            height: var(--font-paragraph-size);
            width: var(--font-paragraph-size);
            background: var(--color-white);
            border-radius: 3px;

            &::before {
               content: "\u2714";
               /* display: block; */
               position: absolute;
               line-height: var(--font-paragraph-size);
               width: inherit;
               height: inherit;
               border-radius: inherit;
               color: var(--color-white);
               padding-left: 1px;
               background-color: var(--color-secondary);
               opacity: 0;
               transition: all 0.2s;
            }
         }
      }
      input:checked + label span::before {
         opacity: 1;
      }
   }
`;

const Label = styled.label`
   /* grid-gap: 1rem; */
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
         <label for="from">from</label>
         <input type="date" value="1980-08-26" name="from" />
         <label for="to">to</label>
         <input type="date" value="1980-08-26" name="to" />
      </DateArticle>
      <CategoriesArticle>
         <Subtitle>Categories</Subtitle>
         <div>
            <input type="checkbox" name="name1" id="" />
            <label htmlFor="name1">
               <span>&nbsp;</span>
               All
            </label>
         </div>
         <div>
            <input type="checkbox" name="name2" id="" />
            <label htmlFor="name2">
               <span>&nbsp;</span>
               Entertainment
            </label>
         </div>
         <div>
            <input type="checkbox" name="name3" id="" />
            <label htmlFor="name3">
               <span>&nbsp;</span>
               Food
            </label>
         </div>
      </CategoriesArticle>
      {/* {props.children} */}
   </SidebarAside>
);

export default SideBar;
