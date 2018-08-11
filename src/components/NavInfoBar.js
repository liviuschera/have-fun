import React from "react";
import styled from "styled-components";
import { Subtitle, Paragraph, Remark } from "./typography";

const Wrapper = styled.nav`
   align-self: center;
   grid-row: 1/2;
   height: 5rem;
   width: 78rem;
   margin-top: 2.4rem;
   margin-bottom: 2.4rem;
   background-color: saddlebrown;
`;

const NavInfoBar = () => {
   return <Wrapper>NavInfoBar</Wrapper>;
};

export default NavInfoBar;
