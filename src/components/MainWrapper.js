import React from "react";
import styled from "styled-components";
import { Subtitle, Paragraph, Remark } from "./typography";

const Wrapper = styled.main`
   display: grid;
   grid-column: 2/3;
   /* grid-gap: 2.4rem; */
   /* grid-template-rows: 10rem repeat(3, 1fr); */
   /* grid-template-rows: 10rem 1fr; */

   /* height: 100%; */
   width: 78rem;
   background-color: beige;
`;

const MainWrapper = props => {
   return <Wrapper>{props.children}</Wrapper>;
};

export default MainWrapper;
