import React from "react";

const Input = ({name, value, onChange, type, label}) => {
  return <>
    <label style={{display: "block"}}>{label || "label"}</label>
    <input 
      type={type || "text"}
      name={name}
      value={value}
      onChange={onChange}
      style={{
        width: "100%"
      }}
    />
    <small>*Error msg</small>
  </>
}

export default Input;