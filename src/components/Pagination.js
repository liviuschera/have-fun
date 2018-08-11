import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
   /* display: inline-grid; */
   /* align-self: center; */
   margin-top: 2.4rem;
   grid-row: 3/4;
   height: 4rem;
   background-color: green;
`;

const Pagination = props => {
   return <Wrapper>1 2 3 4 5{props.children}</Wrapper>;
};

export default Pagination;
