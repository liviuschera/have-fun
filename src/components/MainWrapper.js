import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
   display: grid;
   grid-column: 2/3;
   background-color: beige;
`;

const MainWrapper = props => {
   return <Wrapper>{props.children}</Wrapper>;
};

export default MainWrapper;
