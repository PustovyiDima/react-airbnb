import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

// import people_svg from "./svg/people.svg";
import breakfast from "./svg/breakfast.svg";
import child from "./svg/child.svg";
import gym from "./svg/gym.svg";
import meeting from "./svg/meeting.svg";
import parking from "./svg/parking.svg";
import pet from "./svg/pet.svg";
import pool from "./svg/pool.svg";
import security from "./svg/security.svg";
import shuttle from "./svg/shuttle.svg";
import wifi from "./svg/wifi.svg";

export default function Amenities({ list }) {
   return (
      <Box className="property" shadow>
         <Heading border>Зручності</Heading>
         <List {...list} />
      </Box>
   );
}

function List({
   hasPool,
   hasGym,
   hasFreeBreakfast,
   hasFreeWiFi,
   hasParking,
   hasPetsAllowed,
   hasAirportShuttle,
   hasConciergeService,
   hasRoomService,
   hasChildFriendly,
}) {
   return (
      <ul className="property__list">
         {hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}
         {hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}
         {hasFreeBreakfast && (
            <ListItem imageSrc={breakfast}>Безкоштовний сніданок</ListItem>
         )}
         {hasFreeWiFi && (
            <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>
         )}
         {hasParking && (
            <ListItem imageSrc={parking}>
               Безкоштовний вуличний паркінг
            </ListItem>
         )}
         {hasPetsAllowed && (
            <ListItem imageSrc={pet}>
               Дозволено розміщення з домашніми тваринами
            </ListItem>
         )}
         {hasAirportShuttle && (
            <ListItem imageSrc={shuttle}>Трансфер до/з аеропрту</ListItem>
         )}
         {hasConciergeService && (
            <ListItem imageSrc={security}>Консьєрж-сервіс</ListItem>
         )}
         {hasRoomService && (
            <ListItem imageSrc={meeting}>Обслуговування номепів</ListItem>
         )}
         {hasChildFriendly && (
            <ListItem imageSrc={child}>Підходить для дітей</ListItem>
         )}
      </ul>
   );
}
