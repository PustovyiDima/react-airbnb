import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import people_svg from "./people.svg";
import bedrooms_svg from "./bedrooms.svg";
import beds_svg from "./beds.svg";
import bath_svg from "./bath.svg";

export default function Property({ data }) {
   return (
      <Box className="property" shadow>
         <Heading border>Деталі властивості</Heading>
         <List {...data} />
      </Box>
   );
}

function List({ guests, bedrooms, beds, baths }) {
   return (
      <ul className="property__list">
         <ListItem imageSrc={people_svg}>{guests} гості</ListItem>
         <ListItem imageSrc={bedrooms_svg}>{bedrooms} спальня</ListItem>
         <ListItem imageSrc={beds_svg}>{beds} ліжко</ListItem>
         <ListItem imageSrc={bath_svg}>{baths} ванна кімната</ListItem>
      </ul>
   );
}
