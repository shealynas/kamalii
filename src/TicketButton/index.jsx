import "./TicketButton.css";
import React from "react";

export default function ({ text, href }) {
  return (
    <a className="ticketbtn" href={href}>
      {" "}
      <b> {text} </b>
    </a>
  );
}
