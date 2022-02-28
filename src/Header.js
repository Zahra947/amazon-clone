import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <nav className=" header">
      <Link to="/" href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAWZgVmr7NL6do8sjOxdWw7mzLVNrUI5BpqW-HKGXCACxX38WJ5RsmxZN5B4114vR3g&usqp=CAU"
          alt="amazon-logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="search"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
    </nav>
  );
}
