import { Fragment } from "react";
import "./index.css";
import Box from "../box";
import Heading from "../heading";

export default function RoomList({ children, types, title }) {
   return (
      <div className="room-list">
         <Heading>{title}</Heading>
         <div className="room-list__values">
            {types.map(({ id, ...rest }) => (
               <Fragment key={id}>
                  <Item {...rest} />
               </Fragment>
            ))}
         </div>
      </div>
   );
}

function Item({ type, pricePerNight: price, currency, capacity }) {
   return (
      <Box className={"room-list__item"}>
         <span className="room-list__item__title">{type}</span>
         <span className="room-list__item__info">
            Кількість гостей: {capacity}
         </span>
         <span className="room-list__item__price">
            {currency}
            {price}
         </span>
      </Box>
   );
}
