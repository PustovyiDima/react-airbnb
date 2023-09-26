import { Fragment } from "react";
import "./index.css";
import Box from "../box";
import Heading from "../heading";

export default function GuestReviews({ children, reviews, title }) {
   return (
      <div className="review-list">
         <Heading>{title}</Heading>
         <div className="review-list__values">
            {reviews.map(({ id, ...rest }) => (
               <Fragment key={id}>
                  <Item {...rest} />
               </Fragment>
            ))}
         </div>
      </div>
   );
}

function Item({ guestName: name, rating, review }) {
   return <Box className={"review-list__item"}>
      <div className="review-list__block">
         <span className="review-list__title">{name}</span>
         <span className="review-list__rating">Рейтинг: {rating}</span>
      </div>
      <span className="review-list__info">{review}</span>
   </Box>;
}

