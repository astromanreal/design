import React from "react";
import { Link } from "react-router-dom";
import "./Navbar1.css";

export default function Navbar1() {
  return (
    <>
      <nav role="navigation" id="nav">
        <input class="trigger" type="checkbox" id="mainNavButton" />
        <label for="mainNavButton">
          <i class="fa fa-space-shuttle" aria-hidden="true"></i> Space
          Xploration
        </label>
        <ul>
          {/* <h1>
            <Link to="/">Space xploration</Link>
          </h1> */}
          <li>
            <Link to="/lost">Lost</Link>
          </li>
          <li>
            <Link to="/testing">Testing</Link>
          </li>
          <li>
            <Link to="/parasnath">Parasnath</Link>
          </li>
          <li>
            <Link to="/mission">Missions</Link>
          </li>
          <li>
            <Link to="/payment">Payment</Link>
          </li>
          <li>
            <Link to="/rocket">Rocket</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
