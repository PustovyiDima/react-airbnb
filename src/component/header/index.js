import "./index.css";

import logo from "./logo.svg";

export default function Header() {
   return (
      <header className="header">
         <a href="/" className="logo">
            <img src={logo} width={102} height={32} alt="logo" />
         </a>
      </header>
   );
}
