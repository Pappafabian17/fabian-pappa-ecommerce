import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import CartWidget from "../cartWidget/CartWidget";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="brandContainer">
        <img className="logoMate" src="/images/logo.svg" alt="logo de mate" />
        <Link className="link" to="/">
          Mates SAS
        </Link>
      </div>
      <div className="navSection">
        <Link className="link" to="/category/mates">
          Mates
        </Link>
        <Link className="link" to="/category/termos">
          Termos
        </Link>
        <Link className="link" to="/category/bombillas">
          Bombillas
        </Link>
        <CartWidget cantidad={8} />
      </div>
    </div>
  );
}
