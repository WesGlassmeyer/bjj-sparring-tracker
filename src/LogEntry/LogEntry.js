import React from "react";
import { Link } from "react-router-dom";
import "./LogEntry.css";

export default function LogEntry(props) {
  return (
    <li className="log-entry">
      <p> date props April 18, 2021</p>
      <p> round props Sparring rounds - 4</p>
      <p> cardio props Cardio: 5</p>
    </li>
  );
}
