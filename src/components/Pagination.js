import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
   margin-top: 2.4rem;
   grid-row: 3/4;
   height: 4rem;
   ul {
      display: flex;
      list-style: none;
      justify-content: flex-end;
      li {
         background-color: var(--color-white);
         line-height: 4rem;
         flex: 0 0 4rem;
         text-align: center;
         a {
            text-decoration: none;
            height: 4rem;
            width: 4rem;
         }
      }
      li:not(:last-child) {
         border-right: 1px solid var(--color-grey-light-4);
      }
      li:first-child {
         border-radius: 3px 0 0 3px;
      }
      li:last-child {
         border-radius: 0 3px 3px 0;
      }
   }
`;

const Pagination = props => {
   return (
      <Wrapper>
         <ul>
            <li>
               <a href="">&#xab;</a>
            </li>
            <li>
               <a href="">1</a>
            </li>
            <li>
               <a href="">2</a>
            </li>
            <li>
               <a href="">3</a>
            </li>
            <li>
               <a href="">&#xbb;</a>
            </li>
         </ul>
         {props.children}
      </Wrapper>
   );
};

export default Pagination;
