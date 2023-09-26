import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AditionalProperties({
   rules,
   policy,
   transport,
   languages,
   offers,
   checkin,
}) {
   return (
      <Box className="aditional-property" shadow>
         <Heading border>Додаткові властивості</Heading>
         <ul className="aditional-property__list">
            <ListItem title="Правила дому">{rules} </ListItem>
            <ListItem title="Політика скасування">{policy} </ListItem>
            <ListItem title="Місцевий транспорт">{transport} </ListItem>
            <ListItem title="Мови хоста">
               {languages.map((item) => (
                  <span>{item}</span>
               ))}
            </ListItem>
            <ListItem title="Спеціальні пропозиції:">{offers} </ListItem>
            <ListItem title="Інструкції щодо реєстрації">{checkin} </ListItem>
         </ul>
      </Box>
   );
}
