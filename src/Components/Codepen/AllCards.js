import React from "react";
import Blogcards from "../Cards/Blogcards";
import Smallcards from "../Cards/Smallcards";
import Othercards from "../Cards/Othercards";
import Maincards from "../Cards/Maincards";

export default function AllCards() {
  return (
    <div>
      <h1>Blog cards</h1>
      <Blogcards />
      <h1>Small card</h1>
      <Smallcards />
      <h1>Other card</h1>
      <Othercards />
      <h1>Main cards</h1>
      <Maincards />
    </div>
  );
}
