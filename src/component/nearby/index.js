import "./index.css";
import { Fragment } from "react";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Nearby({ data }) {
   return (
      <Box className="nearby-property" shadow>
         <Heading border>Додаткові властивості</Heading>
         {data.map(({ id, name, link }) => (
            <Fragment key={id}>
               <ListItem>
                  <a className="nearby-link" href={link}>
                     {name}
                  </a>
               </ListItem>
            </Fragment>
         ))}
      </Box>
   );
}
