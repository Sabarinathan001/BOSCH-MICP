import React, { useState } from "react";

function DropDown() {
  const options = [
    { name: "bangalore", label: "bangalore" },
    { name: "bangalore", label: "bangalore" },
    { name: "bangalore", label: "bangalore" },
  ];
  const [selectedValue, setselectedValue] = useState();
  function handleChange(event) {
    setselectedValue(event.target.value);
  }
  return (
    <div style={{ width: "10rem" }}>
      <select
        style={{ width: "10rem" }}
        value={selectedValue}
        onChange={handleChange}
      ></select>
      <option value="">select option</option>
      {options.map((options) => (
        <option value={options.value}>{options.label}</option>
      ))}
    </div>
  );
}

export default DropDown;
