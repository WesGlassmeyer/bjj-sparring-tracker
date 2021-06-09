import React from "react";
import "./LogEntry.css";

export default function LogEntry(props) {
  return (
    <li className="log-entry">
      <div className="entry-text">
        <div className="date-edit">
          <div>
            <span className="bold date"> {props.entry.date}</span>
          </div>
          <span>
            <button
              className="edit-btn"
              type="button"
              onClick={() => {
                props.handleEdit(props.entry.id);
              }}
            >
              ...
            </button>
          </span>
        </div>
        <div className="entry-padding">
          <span className="entry-cardio"> Cardio rating: </span>
          <span className="bold"> {props.entry.cardio}</span>
        </div>
        <div className="entry-container">
          <div className="entry-specs">
            <div className="entry-specs-number bold">{props.entry.rounds}</div>
            <div className="entry-specs-text">Rounds</div>
          </div>
          <div className="entry-specs">
            <div className="entry-specs-number bold">
              {props.entry.submissions.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count;
              }, 0)}
            </div>
            <div className="entry-specs-text">Subs</div>
          </div>
          <div className="entry-specs">
            <div className="entry-rounds-number bold">
              {props.entry.taps.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count;
              }, 0)}
            </div>
            <div className="entry-specs-text">Taps</div>
          </div>
          <div className="entry-specs">
            <div className="entry-specs-number bold">
              {props.entry.sweeps.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count;
              }, 0)}
            </div>
            <div className="entry-specs-text">Sweeps</div>
          </div>
        </div>
      </div>
    </li>
  );
}
