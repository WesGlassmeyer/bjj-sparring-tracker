import React from "react";
// import "./DropdownFilter.css";

export default function DropdownFilter(props) {
  const options = props.options;
  const optionItems = options.map((data) => (
    <option key={data} value={data}>
      {data}
    </option>
  ));

  return (
    <div className="custom-select">
      <select
        disabled={props.disabled}
        aria-label={props.id}
        className="dropdown"
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      >
        <option disabled value="">
          {" "}
          -- {props.label} --{" "}
        </option>
        {optionItems}
      </select>
    </div>
  );
}
