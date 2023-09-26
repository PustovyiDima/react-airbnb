import "./index.css";
import Heading from "../heading";

export default function Contact({ name, image, rate, time, info, phone }) {
   return (<div className="contact">
   <div className="contact__block">
      <img src={image} className="contact__img" alt="contact" />
      <div className="contact__info">
         <Heading>Господар - {name}</Heading>
         <div className="contact__list">
            <span className="contact__list__item">{phone}</span>
            <span className="contact__list__item">{time}</span>
            <span className="contact__list__item">{rate}% відсотків швидкості відгуку</span>
         </div>
      </div>
   </div>
   <div className="contact__description">{info}</div>
</div>)
}


