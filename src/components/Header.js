import React from "react";
import styled from "styled-components";
import logo from "../images/logo@2x.png";
import sprite from "../images/sprite.svg";

const HeaderDiv = styled.header`
   display: inline-grid;
   height: var(--header-height);
   width: 100%;
   background-color: var(--color-primary);
   grid-template-columns: 30% 1fr;
   align-items: center;

   img {
      height: 3rem;
      margin-left: 3rem;
   }

   form {
      position: relative;
      display: grid;
      /* background-color: orangered; */
      width: 50%;
      justify-content: center;
      grid-template-columns: 90%;

      button {
         position: absolute;
         left: 2.5rem;
         background: transparent;
         border: none;
         height: 2.5rem;
         width: 2.5rem;
         top: -0.5rem;

         svg {
            height: inherit;
            width: inherit;
            fill: var(--color-white);
         }
      }

      input {
         background-color: transparent;
         /* line-height: var(--font-placeholder-weight); */
         /* background-color: yellowgreen; */
         border: none;
         padding-bottom: 0.5rem;
         border-bottom: var(--border-bottom-input);
         padding-left: 3.5rem;
         outline: none;
         color: var(--color-white);
         font-size: var(--font-placeholder-size);
         /* font: var(--font-placeholder); */

         &::placeholder {
            /* padding-left: 3.5rem; */
            color: var(--color-white-alpha-50);
         }
      }
   }
`;

const Header = props => (
   <HeaderDiv>
      <img src={logo} alt="Have Fun logo" />
      <form action="#">
         <button>
            <svg>
               <use xlinkHref={`${sprite}#icon-magnifier`} />
            </svg>
         </button>
         <input type="text" placeholder="Explore your own activities" />
      </form>
      {/* {props.children} */}
   </HeaderDiv>
);

export default Header;
