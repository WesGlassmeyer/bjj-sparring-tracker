import React from "react";
// import "./DropdownFilter.css";

export default function DropdownFilter(props) {
  const options = props.value;
  const optionItems = options.map((data) => (
    <option key={data} value={data}>
      {data}
    </option>
  ));

  return (
    <div className="custom-select">
      <select
        aria-label={props.id}
        className="dropdown"
        id={props.id}
        onChange={props.onChange}
        defaultValue={"DEFAULT"}
      >
        <option disabled value="DEFAULT">
          {" "}
          -- {props.label} --{" "}
        </option>
        {optionItems}
      </select>
    </div>
  );
}
