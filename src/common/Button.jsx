import React, {useState} from "react";
import "./Button.css"

const Button = ({name, onClick, color}) => {
  return (
    <button 
      className="button__btn"
      style={{
        background: color
      }}
      onClick={onClick}
    >{name}
    </button>
  )
}

export default Button;