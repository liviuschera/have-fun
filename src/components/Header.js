import React from "react";
import styled from "styled-components";
import logo from "../images/logo@2x.png";
import sprite from "../images/sprite.svg";

const HeaderDiv = styled.header`
   display: inline-grid;
   height: 9rem;
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
      background-color: orangered;
      width: 50%;
      justify-content: center;
      grid-template-columns: 90%;

      button {
         /* display: inline; */
         position: absolute;
         background: transparent;
         border: none;
         height: 2rem;
         width: 2rem;

         svg {
            height: inherit;
            width: inherit;
         }
      }

      input {
         background-color: transparent;
         background-color: yellowgreen;
         border: none;
         border-bottom: 1px solid var(--color-white);

         &::placeholder {
            color: var(--color-white-alpha-50);
         }
      }
   }
`;

const Header = props => (
   <HeaderDiv>
      <img src={logo} alt="" />
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
