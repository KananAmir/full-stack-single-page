import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
   return (
      <header>
         <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/users"}>Users</Link>
         </nav>
      </header>
   );
};

export default Header;
