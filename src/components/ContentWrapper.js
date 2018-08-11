import React from "react";
import styled from "styled-components";
import { Subtitle, Paragraph, Remark } from "./typography";

const Wrapper = styled.div`
   display: grid;
   /* align-content: flex-start; */
   grid-row: 2/3;
   grid-gap: 2.4rem;
   /* height: 22rem; */
   width: 78rem;
   background-color: salmon;
`;

const ContentWrapper = props => {
   return <Wrapper>{props.children}</Wrapper>;
};

export default ContentWrapper;
