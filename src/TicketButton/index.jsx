import "./TicketButton.css";
import React from "react";

export default function ({ text, href }) {
  return (
    <a href={href}>
      {" "}
      <b> {text} </b>
    </a>
  );
}
