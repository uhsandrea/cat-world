import React from "react";
import cat from "../images/cat.png";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <Link to="/"><img className="nav" src={cat} alt="Home"/></Link>
  );
}

export default HomeNav;