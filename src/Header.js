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
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Hello Zahra</span>
            <span>Sign In</span>
          </div>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
