import React from "react";

const style = {
  background: "lightblue",
  border: "1px solid darkblue",
  fontSize: "50px",
  fontWeight: "400",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ onClick, value }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
