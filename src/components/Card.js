import React from "react";
import styled from "styled-components";
import CardImage from "../images/pic.jpg";
import { HeaderSecondary, Paragraph } from "./typography";
import sprite from "../images/sprite.svg";

const Card = styled.div`
   display: grid;
   height: var(--card-height);
   width: 78rem;
   background-color: seashell;
   grid-template-columns: var(--card-height) 1fr;
   grid-column-gap: 2rem;
   img {
      height: var(--card-height);
      width: var(--card-height);
   }
   div {
   }
`;

const Row = styled.div`
   position: relative;
   display: flex;
   justify-items: start;
   /* margin-top: 1rem; */
`;

const EventName = styled(Paragraph)`
   font-weight: bold;
`;

const LabelType = styled.span`
   background-color: var(--color-grey-light-3);
   color: var(--color-white);
   padding: 0 1rem;
   border-radius: 10rem;
   margin-left: 2rem;
`;

const CardHeader = styled(HeaderSecondary)`
   color: var(--color-primary);
`;

const EventInfo = styled.span`
   color: var(--color-grey-dark);
   margin-left: 0.7rem;
`;

const Span = styled.button`
   background: transparent;
   border: none;
   height: var(--font-paragraph-size);
   width: var(--font-paragraph-size);
   margin-top: 0.3rem;

   svg {
      height: inherit;
      width: inherit;
   }

   &:not(:first-child) {
      margin-left: 2rem;
   }
`;

const DisplayCard = () => {
   return (
      <Card>
         <img src={`${CardImage}`} alt="Card " />
         <div>
            <CardHeader>Some Title</CardHeader>
            <Paragraph>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
               hic eum nulla nemo facere molestias sint omnis quam quo. Officia,
               cumque quo.
            </Paragraph>
            <Row>
               <EventName>Event name</EventName>
               <LabelType>Label</LabelType>
            </Row>
            <Row>
               <Span>
                  <svg>
                     <use xlinkHref={`${sprite}#icon-location`} />
                  </svg>
               </Span>
               <EventInfo>EventLoction</EventInfo>
               <Span>
                  <svg>
                     <use xlinkHref={`${sprite}#icon-calendar`} />
                  </svg>
               </Span>
               <EventInfo>EventDate</EventInfo>
            </Row>
         </div>
      </Card>
   );
};

export default DisplayCard;
