import React from "react";

const Input = ({name, value, onChange, type, label}) => {
  return <>
    <input 
      type={type || "text"}
      name={name}
      value={value}
      onChange={onChange}
    />
  </>
}

export default Input;