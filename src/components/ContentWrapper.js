import React from "react";
import styled from "styled-components";
import { Subtitle, Paragraph, Remark } from "./typography";

const Wrapper = styled.div`
   display: grid;
   /* grid-row: 2/; */
   /* grid-column: 2/3; */
   height: 22rem;
   width: 78rem;
   background-color: salmon;
`;

const ContentWrapper = () => {
   return <Wrapper>card</Wrapper>;
};

export default ContentWrapper;
