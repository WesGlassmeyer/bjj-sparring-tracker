import React from "react";
import { Link } from "react-router-dom";
import "./LogEntry.css";

export default function LogEntry(props) {
  return (
    <li className="log-entry">
      <p> {props.entry.date}</p>
      <p> Sparring rounds - {props.entry.cardio.rounds}</p>
      <p> Cardio rating: {props.entry.cardio.rating}</p>
      <p> Submissions executed: {props.entry.submissions.count}</p>
      <p> Times Tapped: {props.entry.taps.count}</p>
      <p> Sweeps executed: {props.entry.sweeps.count}</p>
    </li>
  );
}
