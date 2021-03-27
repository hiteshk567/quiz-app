import React from "react";

import "./Input.css";

const Input = ({ type, placeholder, id, label, value, onChange }) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
